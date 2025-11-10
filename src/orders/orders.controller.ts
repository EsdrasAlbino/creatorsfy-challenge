import { Controller, Get, Param, Logger } from '@nestjs/common';
import { OrderService } from '../webhooks/order.service';
import { ShopService } from '../auth/shop.service';

@Controller('orders')
export class OrdersController {
  private readonly logger = new Logger(OrdersController.name);

  constructor(
    private readonly orderService: OrderService,
    private readonly shopService: ShopService,
  ) {}

  /**
   * Get all orders
   * GET /orders
   */
  @Get()
  async getAllOrders() {
    this.logger.log('Fetching all orders');
    const orders = await this.orderService.getAllOrders();
    return {
      count: orders.length,
      orders,
    };
  }

  /**
   * Get orders by shop domain
   * GET /orders/shop/:shopDomain
   */
  @Get('shop/:shopDomain')
  async getOrdersByShop(@Param('shopDomain') shopDomain: string) {
    this.logger.log(`Fetching orders for shop: ${shopDomain}`);

    const shop = await this.shopService.getShopByDomain(shopDomain);

    if (!shop) {
      return {
        error: 'Shop not found',
        shopDomain,
      };
    }

    const orders = await this.orderService.getOrdersByShop(shop.id);

    return {
      shop: shopDomain,
      count: orders.length,
      orders,
    };
  }

  /**
   * Get all connected shops
   * GET /orders/shops
   */
  @Get('shops')
  async getAllShops() {
    this.logger.log('Fetching all connected shops');
    const shops = await this.shopService.getAllShops();
    return {
      count: shops.length,
      shops: shops.map((shop) => ({
        id: shop.id,
        shop: shop.shop,
        connectedAt: shop.connectedAt,
      })),
    };
  }
}
