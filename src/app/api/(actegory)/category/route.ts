/** @format */

import { db } from '@/config/db';
import mySchema from '@/models';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Custom status validation: Only 'Active', 'Archived', or 'Draft' allowed
const validStatuses = ['Active', 'Archived', 'Draft'] as const; // Enum-like string literals

// Schema for category validation with customized messages for missing fields
const categorySchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }), // Custom error message for 'name'
  description: z.string().min(1, { message: 'Description is required' }), // Custom error message for 'description'
  image_url: z
    .string()
    .url({ message: 'Image URL must be a valid URL' })
    .min(1, { message: 'Image URL is required' }), // Custom error message for 'image_url'
  status: z.enum(validStatuses, {
    errorMap: () => ({
      message: 'Invalid status value. Allowed: Active, Archived, Draft',
    }),
  }), // Validate only 'Active', 'Archived', 'Draft'
});

// Handle POST requests - Create a new category
export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    console.log('THE CATEGORY REQUEST IS ->', requestBody);
    const validatedData = categorySchema.parse(requestBody);

    const newCategory = await db
      .insert(mySchema.Categories)
      .values({
        name: validatedData.name,
        description: validatedData.description,
        image_url: validatedData.image_url,
        status: validatedData.status,
      })
      .returning({
        id: mySchema.Categories.id,
      });

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
      const errorMessages = error.errors.map((err) => {
        return `${err.path.join('.')} - ${err.message}`;
      });

      return NextResponse.json(
        {
          status: false,
          error: errorMessages.join(', '),
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

// Handle GET requests - Fetch all categories
export async function GET() {
  try {
    const categories = await db.select().from(mySchema.Categories);
    return NextResponse.json(
      {
        status: true,
        categories,
      },
      { status: 200 }
    );
  } catch (error) {
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

// Handle PUT requests - Update a category by ID
export async function PUT(request: NextRequest) {
  try {
    const { categoryID, ...updateData } = await request.json(); // Extract `id` and the rest of the update data
    if (!categoryID) {
      return NextResponse.json(
        {
          status: false,
          error: 'Category ID is required',
        },
        { status: 400, statusText: 'failed' }
      );
    }

    // Validate the data (allow partial updates using `.partial()`)
    const validatedData = categorySchema.partial().parse(updateData);

    // Update the category with the given `id`
    const updatedCategory = await db
      .update(mySchema.Categories)
      .set(validatedData)
      .where(eq(categoryID, mySchema.Categories.id))
      .returning({
        id: mySchema.Categories.id,
      });

    if (updatedCategory.length === 0) {
      return NextResponse.json(
        {
          status: false,
          message: 'Category not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: true,
        category: updatedCategory[0].id,
        message: 'Category updated successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(
        (err) => `${err.path.join('.')} - ${err.message}`
      );
      return NextResponse.json(
        {
          status: false,
          error: errorMessages.join(', '),
        },
        { status: 400 }
      );
    }

    console.error('Error updating category:', error);
    return NextResponse.json(
      {
        status: false,
        error: 'Failed to update category',
      },
      { status: 500 }
    );
  }
}

// Handle DELETE requests - Delete a category by ID
export async function DELETE(request: NextRequest) {
  try {
    const { categoryID } = await request.json(); // Extract the `id` from the request
    if (!categoryID) {
      return NextResponse.json(
        {
          status: false,
          message: 'Category ID is required',
        },
        { status: 400, statusText: 'not found' }
      );
    }

    // Delete the category with the given `id`
    const deletedCategory = await db

      .delete(mySchema.Categories)
      .where(eq(categoryID, mySchema.Categories.id))
      .returning();

    if (deletedCategory.length === 0) {
      return NextResponse.json(
        {
          status: false,
          message: 'Category not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: true,
        message: 'Category deleted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      {
        status: false,
        error: 'Failed to delete category',
      },
      { status: 500 }
    );
  }
}
