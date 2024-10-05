/** @format */

// Interface for the Product schema
export interface ProductInterface {
  id: number; // Unique identifier for each product
  name: string; // Product name
  description: string; // Detailed product description
  price: number; // Product price (precision 10, scale 2)
  stock: number; // Available stock count (default: 0)
  sku: string; // Stock Keeping Unit for inventory management
  category_id: number; // Foreign key referencing the categories table
  subcategory_id: number; // Foreign key referencing the subcategories table
  brand?: string; // Brand name (optional)
  model?: string; // Model name (optional)
  weight?: number; // Product weight (precision 10, scale 2) (optional)
  dimensions?: string; // Dimensions of the product (optional)
  colors?: string[]; // Array of available product colors (optional)
  material?: string; // Material used in the product (optional)
  warranty?: string; // Warranty information (optional)
  image_url?: string; // URL of the primary product image (optional)
  additional_images?: string[]; // Array of additional image URLs (optional)
  is_active: boolean; // Status of the product (active/inactive) (default: true)
  has_been_on_sale: boolean; // Indicates if the product has been on sale (default: false)
  created_at: Date; // Date and time of creation
  updated_at: Date; // Date and time of last update
}
