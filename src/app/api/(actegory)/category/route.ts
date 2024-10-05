/** @format */

/** @format */

import { db } from '@/config/db';
import mySchema from '@/models';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema for category validation
const categorySchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }), // Custom error message for 'name'
  description: z.string().min(1, { message: 'Description is required' }), // Custom error message for 'description'
  image_url: z.string().min(1, { message: 'Image URL is required' }), // Custom error message for 'image_url'
  is_active: z.boolean().default(true),
});

export async function GET() {
  try {
    const categories = await db.select().from(mySchema.Categories);
    return NextResponse.json(
      {
        categories,
        status: true,
      },
      { status: 200, statusText: 'OK' }
    );
  } catch (error: unknown) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      {
        status: false,
        error: 'Failed to fetch categories',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();

    // Validate the request body against the schema
    const validatedData = categorySchema.parse(requestBody);

    const newCategory = await db
      .insert(mySchema.Categories)
      .values({
        name: validatedData.name,
        description: validatedData.description,
        image_url: validatedData.image_url,
        is_active: validatedData.is_active,
      })
      .returning();

    return NextResponse.json(
      {
        category: newCategory,
        status: true,
        message: 'Category created successfully',
      },
      { status: 201, statusText: 'Created' }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          status: false,
          error: error.errors.map((err) => err.message).join(', '), // Collecting all validation error messages
        },
        { status: 400 }
      );
    }

    console.error('Error creating category:', error);
    return NextResponse.json(
      {
        status: false,
        error: 'Failed to create category',
      },
      { status: 500 }
    );
  }
}
