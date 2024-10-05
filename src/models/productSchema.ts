/** @format */

import {
  pgTable,
  serial,
  varchar,
  text,
  decimal,
  integer,
  boolean,
  timestamp,
} from 'drizzle-orm/pg-core';

// Product table schema
export const Products = pgTable('products', {
  id: serial('id').primaryKey(), // Unique identifier for each product
  name: varchar('name', { length: 255 }).notNull(), // Product name
  description: text('description').notNull(), // Detailed product description
  price: decimal('price', { precision: 10, scale: 2 }).notNull(), // Product price
  stock: integer('stock').default(0), // Available stock count
  sku: varchar('sku', { length: 100 }).notNull(), // Stock Keeping Unit for inventory management
  category_id: integer('category_id').notNull(), // Foreign key referencing the categories table
  subcategory_id: integer('subcategory_id').notNull(), // Foreign key referencing the subcategories table
  brand: varchar('brand', { length: 100 }), // Brand name
  model: varchar('model', { length: 100 }), // Model name
  weight: decimal('weight', { precision: 10, scale: 2 }), // Product weight (optional)
  dimensions: varchar('dimensions', { length: 100 }), // Dimensions of the product (optional)
  colors: text('colors[]'), // Array of available product colors
  material: varchar('material', { length: 100 }), // Material used in the product (optional)
  warranty: varchar('warranty', { length: 100 }), // Warranty information (optional)
  image_url: varchar('image_url', { length: 255 }), // URL of the primary product image
  additional_images: text('additional_images[]'), // Array of additional image URLs
  is_active: boolean('is_active').default(true), // Status of the product (active/inactive)
  has_been_on_sale: boolean('has_been_on_sale').default(false), // Indicates if the product has been on sale
  created_at: timestamp('created_at').defaultNow(), // Date and time of creation
  updated_at: timestamp('updated_at').defaultNow(),
});

// Export the product table
export default {
  Products,
};
