/** @format */

// Interface for the Categories schema
export interface CategoryInterface {
  id: number; // Unique identifier for each category
  name: string; // Category name
  description?: string; // Category description (optional)
  image_url?: string; // URL for the category image (optional)
  is_active: boolean; // Status of the category (active/inactive) (default: true)
  created_at: Date; // Date and time of creation
  updated_at: Date; // Date and time of last update
}

// Interface for the Subcategories schema
export interface SubcategoryInterface {
  id: number; // Unique identifier for each subcategory
  name: string; // Subcategory name
  description?: string; // Subcategory description (optional)
  image_url?: string; // URL for the subcategory image (optional)
  subCattitle: string; // Subcategory title (e.g., 'Shirts', 'Salwar')
  category_id: number; // Foreign key referencing the main category
  is_active: boolean; // Status of the subcategory (active/inactive) (default: true)
  created_at: Date; // Date and time of creation
  updated_at: Date; // Date and time of last update
}
