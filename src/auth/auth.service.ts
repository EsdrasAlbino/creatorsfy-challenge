import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as crypto from 'crypto';
import { ShopService } from './shop.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly shopService: ShopService,
  ) {}

  /**
   * Generate the OAuth authorization URL
   */
  getAuthorizationUrl(shop: string, state: string): string {
    const apiKey = this.configService.get<string>('SHOPIFY_API_KEY');
    const scopes = this.configService.get<string>('SHOPIFY_SCOPES');
    const redirectUri = `${this.configService.get<string>('HOST')}/auth/callback`;

    const authUrl = `https://${shop}/admin/oauth/authorize?client_id=${apiKey}&scope=${scopes}&redirect_uri=${redirectUri}&state=${state}`;

    return authUrl;
  }

  /**
   * Validate HMAC for security
   */
  validateHmac(query: Record<string, any>): boolean {
    const { hmac, ...params } = query;
    const secret = this.configService.get<string>('SHOPIFY_API_SECRET');

    const message = Object.keys(params)
      .sort()
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    const generatedHash = crypto
      .createHmac('sha256', secret)
      .update(message)
      .digest('hex');

    return generatedHash === hmac;
  }

  /**
   * Exchange authorization code for access token
   */
  async getAccessToken(
    shop: string,
    code: string,
  ): Promise<{ access_token: string; scope: string }> {
    const apiKey = this.configService.get<string>('SHOPIFY_API_KEY');
    const apiSecret = this.configService.get<string>('SHOPIFY_API_SECRET');

    const url = `https://${shop}/admin/oauth/access_token`;

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, {
          client_id: apiKey,
          client_secret: apiSecret,
          code,
        }),
      );

      return response.data;
    } catch (error) {
      this.logger.error(`Error getting access token: ${error.message}`);
      throw error;
    }
  }

  /**
   * Register webhook for orders/create
   */
  async registerOrdersWebhook(shop: string, accessToken: string): Promise<void> {
    const webhookUrl = `${this.configService.get<string>('HOST')}/webhooks/orders/create`;
    const apiVersion = this.configService.get<string>('SHOPIFY_API_VERSION');

    const url = `https://${shop}/admin/api/${apiVersion}/webhooks.json`;

    try {
      // First, check if webhook already exists
      const listResponse = await firstValueFrom(
        this.httpService.get(url, {
          headers: {
            'X-Shopify-Access-Token': accessToken,
            'Content-Type': 'application/json',
          },
        }),
      );

      const existingWebhook = listResponse.data.webhooks.find(
        (webhook: any) =>
          webhook.topic === 'orders/create' && webhook.address === webhookUrl,
      );

      if (existingWebhook) {
        this.logger.log(
          `Webhook already exists for shop ${shop}: ${existingWebhook.id}`,
        );
        return;
      }

      // Create new webhook
      const response = await firstValueFrom(
        this.httpService.post(
          url,
          {
            webhook: {
              topic: 'orders/create',
              address: webhookUrl,
              format: 'json',
            },
          },
          {
            headers: {
              'X-Shopify-Access-Token': accessToken,
              'Content-Type': 'application/json',
            },
          },
        ),
      );

      this.logger.log(
        `Webhook registered successfully for shop ${shop}: ${response.data.webhook.id}`,
      );
    } catch (error) {
      this.logger.error(
        `Error registering webhook for shop ${shop}: ${error.message}`,
      );
      throw error;
    }
  }

  /**
   * Complete OAuth flow: get token, save shop, register webhook
   */
  async completeOAuth(shop: string, code: string): Promise<void> {
    // Get access token
    const { access_token } = await this.getAccessToken(shop, code);

    // Save shop to database
    await this.shopService.createOrUpdateShop(shop, access_token);

    // Register webhook
    await this.registerOrdersWebhook(shop, access_token);

    this.logger.log(`OAuth completed successfully for shop: ${shop}`);
  }

  /**
   * Generate random state for OAuth security
   */
  generateState(): string {
    return crypto.randomBytes(16).toString('hex');
  }
}
