/** @format */

import {
  pgTable,
  serial,
  varchar,
  integer,
  boolean,
  timestamp,
  text,
} from 'drizzle-orm/pg-core';

// Main Categories table schema
export const Categories = pgTable('categories', {
  id: serial('id').primaryKey(), // Unique identifier for each category
  name: varchar('name', { length: 255 }).notNull(), // Category name
  description: text('description'), // Category description (optional)
  image_url: varchar('image_url', { length: 255 }), // URL for the category image (optional)
  is_active: boolean('is_active').default(true), // Status of the category (active/inactive)
  created_at: timestamp('created_at').defaultNow(), // Date and time of creation
  updated_at: timestamp('updated_at').defaultNow(),
});

// Subcategories table schema
export const Subcategories = pgTable('subcategories', {
  id: serial('id').primaryKey(), // Unique identifier for each subcategory
  name: varchar('name', { length: 255 }).notNull(), // Subcategory name
  description: text('description'), // Subcategory description (optional)
  image_url: varchar('image_url', { length: 255 }), // URL for the subcategory image (optional)
  subCattitle: varchar('subCattitle', { length: 255 }).notNull(), // Subcategory title (e.g., 'Shirts', 'Salwar')
  category_id: integer('category_id') // Foreign key referencing the main category
    .notNull()
    .references(() => Categories.id), // Ensure a valid reference to the categories table
  is_active: boolean('is_active').default(true), // Status of the subcategory (active/inactive)
  created_at: timestamp('created_at').defaultNow(), // Date and time of creation
  updated_at: timestamp('updated_at').defaultNow(),
});

// Export the tables
export default {
  Categories,
  Subcategories,
};
