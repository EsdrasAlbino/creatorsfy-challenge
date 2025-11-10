import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '../db/database.service';
import { orders } from '../db/schema';
import { eq } from 'drizzle-orm';

export interface ShopifyOrder {
  id: number;
  order_number: number;
  email: string;
  total_price: string;
  currency: string;
  financial_status: string;
  fulfillment_status: string | null;
  [key: string]: any;
}

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(private readonly databaseService: DatabaseService) {}

  async saveOrder(shopId: number, orderData: ShopifyOrder) {
    const db = this.databaseService.getDb();

    try {
      const [savedOrder] = await db
        .insert(orders)
        .values({
          shopId,
          shopifyOrderId: orderData.id.toString(),
          orderNumber: orderData.order_number,
          email: orderData.email || null,
          totalPrice: orderData.total_price,
          currency: orderData.currency,
          financialStatus: orderData.financial_status || null,
          fulfillmentStatus: orderData.fulfillment_status || null,
          orderData: orderData as any,
        })
        .returning();

      this.logger.log(
        `Order ${orderData.order_number} saved for shop ID ${shopId}`,
      );

      return savedOrder;
    } catch (error) {
      this.logger.error(
        `Error saving order ${orderData.order_number}: ${error}`,
      );
      throw error;
    }
  }

  async getOrdersByShop(shopId: number) {
    const db = this.databaseService.getDb();
    return await db.select().from(orders).where(eq(orders.shopId, shopId));
  }

  async getAllOrders() {
    const db = this.databaseService.getDb();
    return await db.select().from(orders);
  }
}
