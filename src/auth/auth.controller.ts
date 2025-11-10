import {
  Controller,
  Get,
  Query,
  Res,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  /**
   * Start OAuth flow
   * GET /auth/shopify?shop=example.myshopify.com
   */
  @Get('shopify')
  initiateAuth(@Query('shop') shop: string, @Res() res: Response) {
    if (!shop) {
      throw new BadRequestException('Shop parameter is required');
    }

    // Validate shop domain format
    if (!shop.endsWith('.myshopify.com')) {
      throw new BadRequestException('Invalid shop domain');
    }

    // Generate state for security
    const state = this.authService.generateState();

    // Store state in session/cookie for validation in callback
    // For simplicity, we'll skip state validation in this implementation
    // In production, you should validate the state parameter

    const authUrl = this.authService.getAuthorizationUrl(shop, state);

    this.logger.log(`Redirecting to Shopify OAuth for shop: ${shop}`);

    return res.redirect(authUrl);
  }

  /**
   * OAuth callback
   * GET /auth/callback?code=...&hmac=...&shop=...&state=...
   */
  @Get('callback')
  async handleCallback(@Query() query: any, @Res() res: Response) {
    const { code, shop, hmac } = query;

    // Validate required parameters
    if (!code || !shop || !hmac) {
      throw new BadRequestException('Missing required parameters');
    }

    // Validate HMAC
    if (!this.authService.validateHmac(query)) {
      throw new BadRequestException('Invalid HMAC signature');
    }

    try {
      // Complete OAuth flow
      await this.authService.completeOAuth(shop, code);

      this.logger.log(`Shop ${shop} connected successfully`);

      // Redirect to success page or return success message
      return res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Shopify OAuth Success</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              background-color: #f4f4f4;
            }
            .container {
              text-align: center;
              background: white;
              padding: 40px;
              border-radius: 10px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 { color: #5c6ac4; }
            .checkmark {
              font-size: 72px;
              color: #50b83c;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="checkmark">✓</div>
            <h1>Successfully Connected!</h1>
            <p>Your Shopify store <strong>${shop}</strong> has been connected.</p>
            <p>The webhook for order creation has been registered.</p>
          </div>
        </body>
        </html>
      `);
    } catch (error) {
      this.logger.error(`OAuth callback error: ${error.message}`);
      throw new BadRequestException('Failed to complete OAuth flow');
    }
  }
}
