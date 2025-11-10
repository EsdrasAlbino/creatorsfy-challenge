import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from '../db/database.service';
import { shops } from '../db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class ShopService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly configService: ConfigService,
  ) {}

  async createOrUpdateShop(shop: string, accessToken: string) {
    const db = this.databaseService.getDb();

    // Check if shop already exists
    const existingShop = await db
      .select()
      .from(shops)
      .where(eq(shops.shop, shop))
      .limit(1);

    if (existingShop.length > 0) {
      // Update existing shop
      const [updated] = await db
        .update(shops)
        .set({
          accessToken,
          updatedAt: new Date(),
        })
        .where(eq(shops.shop, shop))
        .returning();

      return updated;
    } else {
      // Create new shop
      const [created] = await db
        .insert(shops)
        .values({
          shop,
          accessToken,
          connectedAt: new Date(),
        })
        .returning();

      return created;
    }
  }

  async getShopByDomain(shop: string) {
    const db = this.databaseService.getDb();

    const [shopData] = await db
      .select()
      .from(shops)
      .where(eq(shops.shop, shop))
      .limit(1);

    return shopData;
  }

  async getAllShops() {
    const db = this.databaseService.getDb();
    return await db.select().from(shops);
  }
}
