import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from '../db/database.service';
import { shops } from '../db/schema';
import { eq } from 'drizzle-orm';
import { createHmac, randomBytes } from 'crypto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ShopifyAuthService {
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly scopes: string;
  private readonly apiVersion: string;
  private readonly host: string;

  constructor(
    private configService: ConfigService,
    private databaseService: DatabaseService,
    private httpService: HttpService,
  ) {
    this.apiKey = this.configService.get<string>('SHOPIFY_API_KEY');
    this.apiSecret = this.configService.get<string>('SHOPIFY_API_SECRET');
    this.scopes = this.configService.get<string>('SHOPIFY_SCOPES');
    this.apiVersion = this.configService.get<string>('SHOPIFY_API_VERSION');
    this.host = this.configService.get<string>('HOST');
  }

  /**
   * Generate OAuth authorization URL
   */
  generateAuthUrl(shop: string, state: string): string {
    const redirectUri = `${this.host}/auth/callback`;
    const authUrl = `https://${shop}/admin/oauth/authorize?client_id=${this.apiKey}&scope=${this.scopes}&redirect_uri=${redirectUri}&state=${state}`;
    return authUrl;
  }

  /**
   * Generate random state for CSRF protection
   */
  generateState(): string {
    return randomBytes(32).toString('hex');
  }

  /**
   * Validate HMAC signature
   */
  validateHmac(query: any): boolean {
    const { hmac, ...params } = query;
    
    if (!hmac) {
      return false;
    }

    // Sort parameters
    const sortedParams = Object.keys(params)
      .sort()
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    // Calculate HMAC
    const calculatedHmac = createHmac('sha256', this.apiSecret)
      .update(sortedParams)
      .digest('hex');

    return calculatedHmac === hmac;
  }

  /**
   * Exchange code for access token
   */
  async exchangeCodeForToken(shop: string, code: string): Promise<string> {
    const url = `https://${shop}/admin/oauth/access_token`;
    
    const response = await firstValueFrom(
      this.httpService.post(url, {
        client_id: this.apiKey,
        client_secret: this.apiSecret,
        code,
      }),
    );

    return response.data.access_token;
  }

  /**
   * Save shop credentials to database
   */
  async saveShop(shop: string, accessToken: string) {
    const db = this.databaseService.getDb();

    // Check if shop already exists
    const existingShop = await db
      .select()
      .from(shops)
      .where(eq(shops.shop, shop))
      .limit(1);

    if (existingShop.length > 0) {
      // Update existing shop
      await db
        .update(shops)
        .set({
          accessToken,
          connectedAt: new Date(),
          updatedAt: new Date(),
        })
        .where(eq(shops.shop, shop));

      return existingShop[0];
    } else {
      // Insert new shop
      const [newShop] = await db
        .insert(shops)
        .values({
          shop,
          accessToken,
          connectedAt: new Date(),
        })
        .returning();

      return newShop;
    }
  }

  /**
   * Get shop by domain
   */
  async getShop(shop: string) {
    const db = this.databaseService.getDb();
    
    const result = await db
      .select()
      .from(shops)
      .where(eq(shops.shop, shop))
      .limit(1);

    return result[0] || null;
  }

  /**
   * Validate shop domain format
   */
  validateShopDomain(shop: string): boolean {
    const shopRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]*\.myshopify\.com$/;
    return shopRegex.test(shop);
  }
}
