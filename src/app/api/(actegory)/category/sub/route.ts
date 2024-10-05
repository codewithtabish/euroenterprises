/** @format */

import { db } from '@/config/db';
import mySchema from '@/models';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema for subcategory validation
const subcategorySchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  subCattitle: z.string().min(1, { message: 'Subcategory title is required' }),
  description: z.string().optional(), // Description can be optional
  image_url: z.string().url().optional(), // Image URL is optional but must be a valid URL
  category_id: z
    .number()
    .positive({ message: 'Category ID must be a positive number' }),
  is_active: z.boolean().optional().default(true), // Defaults to true if not provided
});

// Combined handler for GET and POST requests

/** @format */

export async function GET(request: NextRequest) {
  try {
    // Get the categoryID from the query parameters
    const { searchParams } = new URL(request.url);
    const categoryID = searchParams.get('categoryID');

    // If categoryID is missing, return a 400 error
    if (!categoryID) {
      return NextResponse.json(
        {
          status: false,
          message: 'categoryID is required in the query parameters.',
        },
        { status: 400 }
      );
    }

    // Fetch subcategories for the provided categoryID
    const subcategories = await db
      .select({
        subcategories: mySchema.Subcategories,
        category: mySchema.Categories,
      })
      .from(mySchema.Subcategories)
      .leftJoin(
        mySchema.Categories,
        eq(mySchema.Subcategories.category_id, mySchema.Categories.id)
      )
      .where(eq(mySchema.Subcategories.category_id, parseInt(categoryID, 10)));

    if (!subcategories.length) {
      return NextResponse.json(
        {
          status: false,
          message: 'No subcategories found for this category.',
        },
        { status: 404 }
      );
    }

    // Remove redundant subcategories nesting
    const formattedSubcategories = subcategories.map((item) => ({
      id: item.subcategories.id,
      name: item.subcategories.name,
      subCattitle: item.subcategories.subCattitle,
      description: item.subcategories.description,
      image_url: item.subcategories.image_url,
      is_active: item.subcategories.is_active,
      created_at: item.subcategories.created_at,
      updated_at: item.subcategories.updated_at,
    }));

    return NextResponse.json(
      {
        subcategories: formattedSubcategories,
        status: true,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error fetching subcategories:', error);
    return NextResponse.json(
      {
        status: false,
        error: 'Failed to fetch subcategories',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();

    // Validate the request body against the schema
    const validatedData = subcategorySchema.parse(requestBody);

    // Ensure the referenced category exists
    const categoryExists = await db
      .select()
      .from(mySchema.Categories)
      .where(eq(mySchema.Categories.id, validatedData.category_id))
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

    // Insert new subcategory into the database
    const newSubcategory = await db
      .insert(mySchema.Subcategories)
      .values({
        name: (validatedData.name as string) || '',
        subCattitle: (validatedData.subCattitle as string) || '',
        description: (validatedData.description as string) || '', // Default to an empty string if no description
        image_url: validatedData.image_url || null, // Allow null for optional image URL
        category_id: validatedData.category_id || 0,
        is_active: (validatedData.is_active as boolean) || true,
      })
      .returning(); // Return the newly inserted subcategory

    return NextResponse.json(
      {
        subcategory: newSubcategory,
        status: true,
        message: 'Subcategory created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          status: false,
          error: error.errors.map((err) => err.message).join(', '), // Collect validation errors
        },
        { status: 400 }
      );
    }

    console.error('Error creating subcategory:', error);
    return NextResponse.json(
      {
        status: false,
        error: 'Failed to create subcategory',
      },
      { status: 500 }
    );
  }
}
