import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { ShopService } from '../auth/shop.service';
import { OrderService, ShopifyOrder } from './order.service';

@Injectable()
export class WebhooksService {
  private readonly logger = new Logger(WebhooksService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly shopService: ShopService,
    private readonly orderService: OrderService,
  ) {}

  /**
   * Validate Shopify webhook HMAC
   */
  validateWebhookHmac(body: string, hmacHeader: string): boolean {
    const secret = this.configService.get<string>('SHOPIFY_API_SECRET');

    if (!secret) {
      this.logger.error('SHOPIFY_API_SECRET not configured');
      return false;
    }

    const hash = crypto
      .createHmac('sha256', secret)
      .update(body, 'utf8')
      .digest('base64');

    return hash === hmacHeader;
  }

  /**
   * Process order webhook
   */
  async processOrder(
    shopDomain: string,
    orderData: ShopifyOrder,
  ): Promise<void> {
    try {
      // Get shop from database
      const shop = await this.shopService.getShopByDomain(shopDomain);

      if (!shop) {
        this.logger.error(`Shop not found: ${shopDomain}`);
        throw new Error('Shop not found');
      }

      // Save order
      await this.orderService.saveOrder(shop.id, orderData);

      this.logger.log(
        `Order ${orderData.order_number} processed successfully for shop ${shopDomain}`,
      );
    } catch (error) {
      this.logger.error(
        `Error processing order webhook: ${error instanceof Error ? error.message : error}`,
      );
      throw error;
    }
  }
}
