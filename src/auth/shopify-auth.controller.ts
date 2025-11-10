import {
  Controller,
  Get,
  Query,
  Res,
  HttpStatus,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { ShopifyAuthService } from './shopify-auth.service';

@Controller('auth')
export class ShopifyAuthController {
  private stateStore = new Map<string, string>(); // In production, use Redis or similar

  constructor(private shopifyAuthService: ShopifyAuthService) {}

  /**
   * GET /auth/shopify?shop=store-name.myshopify.com
   * Initiates OAuth flow
   */
  @Get('shopify')
  async initiateOAuth(
    @Query('shop') shop: string,
    @Res() res: Response,
  ): Promise<void> {
    if (!shop) {
      throw new BadRequestException('Shop parameter is required');
    }

    // Validate shop domain
    if (!this.shopifyAuthService.validateShopDomain(shop)) {
      throw new BadRequestException('Invalid shop domain format');
    }

    // Generate state for CSRF protection
    const state = this.shopifyAuthService.generateState();
    this.stateStore.set(state, shop);

    // Generate auth URL
    const authUrl = this.shopifyAuthService.generateAuthUrl(shop, state);

    // Redirect to Shopify authorization
    res.redirect(authUrl);
  }

  /**
   * GET /auth/callback
   * Handles OAuth callback from Shopify
   */
  @Get('callback')
  async handleCallback(
    @Query() query: any,
    @Res() res: Response,
  ): Promise<void> {
    const { code, shop, state, hmac } = query;

    // Validate required parameters
    if (!code || !shop || !state || !hmac) {
      throw new BadRequestException('Missing required parameters');
    }

    // Validate state (CSRF protection)
    const storedShop = this.stateStore.get(state);
    if (!storedShop || storedShop !== shop) {
      throw new UnauthorizedException('Invalid state parameter');
    }

    // Clean up state
    this.stateStore.delete(state);

    // Validate HMAC
    if (!this.shopifyAuthService.validateHmac(query)) {
      throw new UnauthorizedException('Invalid HMAC signature');
    }

    try {
      // Exchange code for access token
      const accessToken =
        await this.shopifyAuthService.exchangeCodeForToken(shop, code);

      // Save shop to database
      const savedShop = await this.shopifyAuthService.saveShop(
        shop,
        accessToken,
      );

      // Success response
      res.status(HttpStatus.OK).json({
        success: true,
        message: 'Shop connected successfully',
        shop: {
          id: savedShop.id,
          shop: savedShop.shop,
          connectedAt: savedShop.connectedAt,
        },
      });
    } catch (error) {
      console.error('OAuth callback error:', error);
      throw new BadRequestException('Failed to complete OAuth flow');
    }
  }

  /**
   * GET /auth/verify?shop=store-name.myshopify.com
   * Verifies if a shop is connected
   */
  @Get('verify')
  async verifyShop(@Query('shop') shop: string): Promise<any> {
    if (!shop) {
      throw new BadRequestException('Shop parameter is required');
    }

    const shopData = await this.shopifyAuthService.getShop(shop);

    if (!shopData) {
      return {
        connected: false,
        message: 'Shop not connected',
      };
    }

    return {
      connected: true,
      shop: {
        id: shopData.id,
        shop: shopData.shop,
        connectedAt: shopData.connectedAt,
      },
    };
  }
}
