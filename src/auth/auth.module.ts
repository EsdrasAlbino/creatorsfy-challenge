import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ShopService } from './shop.service';

@Module({
  imports: [HttpModule],
  controllers: [AuthController],
  providers: [AuthService, ShopService],
  exports: [ShopService],
})
export class AuthModule {}
