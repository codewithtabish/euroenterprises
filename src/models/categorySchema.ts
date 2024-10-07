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

// Categories table schema
export const Categories = pgTable('categories', {
  id: serial('id').primaryKey(), // Unique identifier for each category
  name: varchar('name', { length: 255 }).notNull(), // Category name
  description: text('description'), // Category description (optional)
  image_url: varchar('image_url', { length: 255 }), // URL for the category image (optional)
  status: varchar('status', { length: 50 }).default('draft').notNull(), // Status of the category: 'draft', 'active', 'archived'
  created_at: timestamp('created_at').defaultNow(), // Date and time of creation
  updated_at: timestamp('updated_at').defaultNow(), // Last update timestamp
});

// SubCategoryTitles table schema
export const SubCategoryTitles = pgTable('category_subtitles', {
  id: serial('id').primaryKey(), // Unique identifier for each subtitle
  category_id: integer('category_id')
    .references(() => Categories.id)
    .notNull(), // Foreign key to the Categories table
  subCatMainTitle: varchar('subtitle', { length: 255 }).notNull(), // Subtitle or subcategory name
  image_url: text('image_url'), // URL for the subcategory image (optional)
  subCatMaindescription: text('description'), // Optional description for the subtitle
  created_at: timestamp('created_at').defaultNow(), // Date and time of creation
  updated_at: timestamp('updated_at').defaultNow(), // Last update timestamp
});

// Subcategories table schema with cascading delete
export const Subcategories = pgTable('subcategories', {
  id: serial('id').primaryKey(), // Unique identifier for each subcategory
  description: text('description'), // Subcategory description (optional)
  image_url: text('image_url'), // URL for the subcategory image (optional)
  subCatName: varchar('subCattitle', { length: 255 }).notNull(), // Subcategory title (e.g., 'Shirts', 'Salwar')
  category_id: integer('category_id') // Foreign key referencing the main category
    .notNull()
    .references(() => Categories.id), // Ensure a valid reference to the categories table
  category_title_id: integer('category_title_id') // Foreign key referencing the SubCategoryTitles table
    .notNull()
    .references(() => SubCategoryTitles.id, { onDelete: 'cascade' }), // On delete cascade: If a SubCategoryTitle is deleted, its corresponding subcategories will be deleted
  is_active: boolean('is_active').default(true), // Status of the subcategory (active/inactive)
  created_at: timestamp('created_at').defaultNow(), // Date and time of creation
  updated_at: timestamp('updated_at').defaultNow(), // Last update timestamp
});

// Export the tables
export default {
  Categories,
  Subcategories,
  SubCategoryTitles,
};
