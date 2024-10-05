/** @format */

import { db } from '@/config/db';
import mySchema from '@/models';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();

    // Custom validation logic
    const errors = [];

    // Check required fields
    const requiredFields = [
      'name',
      'description',
      'price',
      'stock',
      'sku',
      'category_id',
      'subcategory_id',
      'brand',
      'model',
      'weight',
      'dimensions',
      'colors',
      'material',
      'warranty',
      'image_url',
      'additional_images',
      'is_active',
      'has_been_on_sale',
    ];

    requiredFields.forEach((field) => {
      if (
        requestBody[field] === undefined ||
        requestBody[field] === null ||
        requestBody[field] === ''
      ) {
        errors.push(`${field} is required`);
      }
    });

    // Validate price
    if (typeof requestBody.price !== 'number' || requestBody.price <= 0) {
      errors.push('Price must be a positive number');
    }

    // Validate stock
    if (typeof requestBody.stock !== 'number' || requestBody.stock < 0) {
      errors.push('Stock must be a non-negative integer');
    }

    // Validate category_id and subcategory_id
    if (
      typeof requestBody.category_id !== 'number' ||
      requestBody.category_id <= 0
    ) {
      errors.push('Category ID must be a positive number');
    }

    if (
      typeof requestBody.subcategory_id !== 'number' ||
      requestBody.subcategory_id <= 0
    ) {
      errors.push('Subcategory ID must be a positive number');
    }

    // If there are validation errors, return a response with the errors
    if (errors.length > 0) {
      return NextResponse.json(
        {
          status: false,
          error: 'Validation error',
          details: errors,
        },
        { status: 400 }
      );
    }

    // Check if the referenced category exists
    const categoryExists = await db
      .select()
      .from(mySchema.Categories)
      .where(eq(mySchema.Categories.id, requestBody.category_id))
      .limit(1);

    if (!categoryExists.length) {
      return NextResponse.json(
        {
          status: false,
          error: 'Invalid category ID. Category does not exist.',
        },
        { status: 400 }
      );
    }

    // Check if the referenced subcategory exists
    const subcategoryExists = await db
      .select()
      .from(mySchema.Subcategories)
      .where(eq(mySchema.Subcategories.id, requestBody.subcategory_id))
      .limit(1);

    if (!subcategoryExists.length) {
      return NextResponse.json(
        {
          status: false,
          error: 'Invalid subcategory ID. Subcategory does not exist.',
        },
        { status: 400 }
      );
    }

    // Insert the new product
    const newProduct = await db
      .insert(mySchema.Products)
      .values({
        name: requestBody.name,
        description: requestBody.description,
        price: requestBody.price,
        stock: requestBody.stock,
        sku: requestBody.sku,
        category_id: requestBody.category_id,
        subcategory_id: requestBody.subcategory_id,
        brand: requestBody.brand,
        model: requestBody.model,
        weight: requestBody.weight,
        dimensions: requestBody.dimensions,
        colors: requestBody.colors.join(','), // Assuming colors is an array
        material: requestBody.material,
        warranty: requestBody.warranty,
        image_url: requestBody.image_url,
        additional_images: requestBody.additional_images.join(','), // Assuming additional_images is an array
        is_active: requestBody.is_active,
        has_been_on_sale: requestBody.has_been_on_sale,
      })
      .returning();

    return NextResponse.json(
      {
        product: newProduct,
        status: true,
        message: 'Product created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      {
        status: false,
        error: 'Failed to create product due to an unknown error' + error,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const response = await db.select().from(mySchema.Products);
    return NextResponse.json(
      {
        status: true,
        products: response,
      },
      { status: 200, statusText: 'OK' }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        error,
      },
      { status: 500, statusText: 'failed' }
    );
  }
}
