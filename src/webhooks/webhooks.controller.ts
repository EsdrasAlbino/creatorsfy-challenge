import {
  Controller,
  Post,
  Headers,
  Body,
  BadRequestException,
  Logger,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { WebhooksService } from './webhooks.service';
import type { ShopifyOrder } from './order.service';

interface RawBodyRequest extends Request {
  rawBody?: Buffer;
}

@Controller('webhooks')
export class WebhooksController {
  private readonly logger = new Logger(WebhooksController.name);

  constructor(private readonly webhooksService: WebhooksService) {}

  /**
   * Receive orders/create webhook from Shopify
   * POST /webhooks/orders/create
   */
  @Post('orders/create')
  async handleOrderCreate(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @Headers('x-shopify-shop-domain') shopDomain: string,
    @Req() req: RawBodyRequest,
    @Body() body: ShopifyOrder,
  ) {
    this.logger.log(`Received order webhook from shop: ${shopDomain}`);

    // Validate HMAC
    if (!hmac) {
      throw new BadRequestException('Missing HMAC header');
    }

    if (!shopDomain) {
      throw new BadRequestException('Missing shop domain header');
    }

    // Get raw body for HMAC validation
    const rawBody = req.rawBody?.toString('utf8') || JSON.stringify(body);

    if (!this.webhooksService.validateWebhookHmac(rawBody, hmac)) {
      this.logger.error('Invalid webhook HMAC');
      throw new BadRequestException('Invalid HMAC signature');
    }

    try {
      await this.webhooksService.processOrder(shopDomain, body);

      this.logger.log(
        `Order ${body.order_number} processed successfully from ${shopDomain}`,
      );

      return {
        success: true,
        message: 'Order processed successfully',
      };
    } catch (error) {
      this.logger.error(
        `Error processing order webhook: ${error instanceof Error ? error.message : error}`,
      );
      throw new BadRequestException('Failed to process order webhook');
    }
  }
}
