import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { AuthModule } from '../auth/auth.module';
import { WebhooksModule } from '../webhooks/webhooks.module';
import { OrderService } from '../webhooks/order.service';

@Module({
  imports: [AuthModule, WebhooksModule],
  controllers: [OrdersController],
  providers: [OrderService],
})
export class OrdersModule {}
