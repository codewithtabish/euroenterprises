/** @format */

import { Categories, Subcategories, SubCategoryTitles } from './categorySchema'; // Importing category and subcategory schemas
import { Products } from './productSchema'; // Importing product schema

// Exporting all schemas in a single object
const mySchema = {
  Categories,
  Subcategories,
  Products,
  SubCategoryTitles,
};

export default mySchema;
