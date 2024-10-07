/** @format */

import { db } from '@/config/db';
import mySchema from '@/models';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Zod schema for validation
// Define Zod schema for validation with custom error messages
const subCategoryTitleSchema = z.object({
  category_id: z
    .number({ invalid_type_error: 'Category ID must be a number' })
    .positive({ message: 'Category ID must be a positive number' }), // Ensures the number is positive and non-zero
  subCatMainTitle: z
    .string()
    .min(1, { message: 'Subcategory title is required' }), // Ensures the string is not empty
  image_url: z
    .string()
    .url({ message: 'Invalid image URL' })
    .min(1, { message: 'Image URL is required' }), // Ensures the image URL is provided and valid
  subCatMaindescription: z
    .string()
    .min(1, { message: 'subCatMaindescription  is required' }),
});

// GET Method - Fetch Subcategory Titles by Category ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryID = searchParams.get('categoryID');

    if (!categoryID) {
      return NextResponse.json(
        { status: false, message: 'categoryID is required.' },
        { status: 400 }
      );
    }

    const subCategoryTitles = await db
      .select()
      .from(mySchema.SubCategoryTitles)
      .where(
        eq(mySchema.SubCategoryTitles.category_id, parseInt(categoryID, 10))
      );

    if (!subCategoryTitles.length) {
      return NextResponse.json(
        { status: false, message: 'No subcategory titles found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { subCategoryTitles, status: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching subcategory titles:', error);
    return NextResponse.json(
      { status: false, error: 'Failed to fetch subcategory titles' },
      { status: 500 }
    );
  }
}

// POST Method - Create a New Subcategory Title
export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const validatedData = subCategoryTitleSchema.parse(requestBody);

    const categoryExists = await db
      .select()
      .from(mySchema.Categories)
      .where(eq(mySchema.Categories.id, validatedData.category_id))
      .limit(1);

    if (!categoryExists.length) {
      return NextResponse.json(
        { status: false, error: 'Invalid category ID.' },
        { status: 400 }
      );
    }

    const newSubCategoryTitle = await db
      .insert(mySchema.SubCategoryTitles)
      .values({
        category_id: validatedData.category_id,
        subCatMainTitle: validatedData.subCatMainTitle,
        image_url: validatedData.image_url || null,
        subCatMaindescription: validatedData.subCatMaindescription || null,
      })
      .returning();

    return NextResponse.json(
      {
        subCategoryTitle: newSubCategoryTitle,
        status: true,
        message: 'Created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(
        (err) => `${err.path.join('.')} - ${err.message}`
      );
      return NextResponse.json(
        { status: false, error: errorMessages.join(', ') },
        { status: 400 }
      );
    }

    console.error('Error creating subcategory title:', error);
    return NextResponse.json(
      { status: false, error: 'Failed to create subcategory title' },
      { status: 500 }
    );
  }
}

// PUT Method - Update a Subcategory Title by ID
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const subCategoryMainTitleID = searchParams.get('subCategoryMainTitleID');

    if (!subCategoryMainTitleID) {
      return NextResponse.json(
        { status: false, message: 'subCategoryMainTitle id is required.' },
        { status: 400 }
      );
    }

    const requestBody = await request.json();
    const validatedData = subCategoryTitleSchema.partial().parse(requestBody);

    const subCategoryTitleExists = await db
      .select()
      .from(mySchema.SubCategoryTitles)
      .where(
        eq(mySchema.SubCategoryTitles.id, parseInt(subCategoryMainTitleID, 10))
      )
      .limit(1);

    if (!subCategoryTitleExists.length) {
      return NextResponse.json(
        { status: false, message: 'Subcategory title not found.' },
        { status: 404 }
      );
    }

    await db
      .update(mySchema.SubCategoryTitles)
      .set({
        category_id: validatedData.category_id,
        subCatMainTitle: validatedData.subCatMainTitle,
        image_url: validatedData.image_url,
        subCatMaindescription: validatedData.subCatMaindescription,
      })
      .where(
        eq(mySchema.SubCategoryTitles.id, parseInt(subCategoryMainTitleID, 10))
      );

    return NextResponse.json(
      { status: true, message: 'Updated successfully.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(
        (err) => `${err.path.join('.')} - ${err.message}`
      );
      return NextResponse.json(
        { status: false, error: errorMessages.join(', ') },
        { status: 400 }
      );
    }

    console.error('Error updating subcategory title:', error);
    return NextResponse.json(
      { status: false, error: 'Failed to update subcategory title' },
      { status: 500 }
    );
  }
}

// DELETE Method - Remove a Subcategory Title by ID
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('subCategoryMainTitleID');

    if (!id) {
      return NextResponse.json(
        { status: false, message: 'ID is required.' },
        { status: 400 }
      );
    }

    const subCategoryTitleExists = await db
      .select()
      .from(mySchema.SubCategoryTitles)
      .where(eq(mySchema.SubCategoryTitles.id, parseInt(id, 10)))
      .limit(1);

    if (!subCategoryTitleExists.length) {
      return NextResponse.json(
        { status: false, message: 'Subcategory title not found.' },
        { status: 404 }
      );
    }

    await db
      .delete(mySchema.SubCategoryTitles)
      .where(eq(mySchema.SubCategoryTitles.id, parseInt(id, 10)));

    return NextResponse.json(
      { status: true, message: 'Deleted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting subcategory title:', error);
    return NextResponse.json(
      { status: false, error: 'Failed to delete subcategory title' },
      { status: 500 }
    );
  }
}
