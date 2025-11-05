import { pgTable, serial, text, timestamp, jsonb, integer, varchar } from 'drizzle-orm/pg-core';

// Shops table - stores Shopify store information
export const shops = pgTable('shops', {
  id: serial('id').primaryKey(),
  shop: varchar('shop', { length: 255 }).notNull().unique(),
  accessToken: text('access_token').notNull(),
  connectedAt: timestamp('connected_at').defaultNow().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Orders table - stores Shopify orders
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  shopId: integer('shop_id')
    .notNull()
    .references(() => shops.id, { onDelete: 'cascade' }),
  shopifyOrderId: varchar('shopify_order_id', { length: 255 }).notNull().unique(),
  orderNumber: integer('order_number'),
  email: varchar('email', { length: 255 }),
  totalPrice: varchar('total_price', { length: 50 }),
  currency: varchar('currency', { length: 10 }),
  financialStatus: varchar('financial_status', { length: 50 }),
  fulfillmentStatus: varchar('fulfillment_status', { length: 50 }),
  orderData: jsonb('order_data').notNull(), // Full order JSON from Shopify
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Export types for TypeScript
export type Shop = typeof shops.$inferSelect;
export type NewShop = typeof shops.$inferInsert;

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;
