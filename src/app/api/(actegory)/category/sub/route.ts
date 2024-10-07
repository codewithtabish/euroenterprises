/** @format */

import { db } from '@/config/db';
import mySchema from '@/models';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Define Zod schema for validation with custom error messages
const subCategorySchema = z.object({
  category_id: z
    .number({ invalid_type_error: 'Category ID must be a number' })
    .positive({ message: 'Category ID must be a positive number' }),
  category_title_id: z
    .number({ invalid_type_error: 'Category Title ID must be a number' })
    .positive({ message: 'Category Title ID must be a positive number' }),
  description: z.string().min(15, { message: 'Description is required' }), // Ensures description is provided
  subCatName: z.string().min(1, { message: 'Subcategory title is required' }), // Ensures the title is not empty
  image_url: z.string().url({ message: 'Invalid image URL' }), // Now required
  is_active: z.boolean({ message: 'is_active is required' }),
});

// GET Method - Fetch Subcategories by Category ID
// export async function GET(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const categoryID = searchParams.get('categoryID');

//     if (!categoryID) {
//       return NextResponse.json(
//         {
//           status: false,
//           message: 'categoryID is required in the query parameters.',
//         },
//         { status: 400 }
//       );
//     }

//     // Fetch subcategories based on categoryID
//     const subcategories = await db
//       .select()
//       .from(mySchema.Subcategories)
//       .where(eq(mySchema.Subcategories.category_id, parseInt(categoryID, 10)));

//     if (!subcategories.length) {
//       return NextResponse.json(
//         {
//           status: false,
//           message: 'No subcategories found for this category.',
//         },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ subcategories, status: true }, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching subcategories:', error);
//     return NextResponse.json(
//       { status: false, error: 'Failed to fetch subcategories' },
//       { status: 500 }
//     );
//   }
// }

// POST Method - Create a New Subcategory
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryID = searchParams.get('categoryID');

    if (!categoryID) {
      return NextResponse.json(
        {
          status: false,
          message: 'categoryID is required in the query parameters.',
        },
        { status: 400 }
      );
    }

    // Fetch subcategories based on categoryID and join with SubCategoryTitles
    const subcategoriesWithTitles = await db
      .select({
        subcategory: mySchema.Subcategories,
        title: mySchema.SubCategoryTitles.subCatMainTitle,
      })
      .from(mySchema.Subcategories)
      .innerJoin(
        mySchema.SubCategoryTitles,
        eq(
          mySchema.Subcategories.category_title_id,
          mySchema.SubCategoryTitles.id
        )
      )
      .where(eq(mySchema.Subcategories.category_id, parseInt(categoryID, 10)));

    if (!subcategoriesWithTitles.length) {
      return NextResponse.json(
        {
          status: false,
          message: 'No subcategories found for this category.',
        },
        { status: 404 }
      );
    }

    // Combine subcategory and title into a single object
    const combinedResponse = subcategoriesWithTitles.map((item) => ({
      ...item.subcategory, // Include all subcategory fields
      title: item.title, // Add title field
    }));

    // Fetch all titles related to this category
    const allTitles = await db
      .select({
        title: mySchema.SubCategoryTitles.subCatMainTitle,
      })
      .from(mySchema.SubCategoryTitles)
      .innerJoin(
        mySchema.Subcategories,
        eq(
          mySchema.SubCategoryTitles.id,
          mySchema.Subcategories.category_title_id
        )
      )
      .where(eq(mySchema.Subcategories.category_id, parseInt(categoryID, 10)));

    const titlesArray = allTitles.map((item) => item.title); // Extract title strings

    return NextResponse.json(
      {
        subcategories: combinedResponse, // Return the combined array
        titles: titlesArray, // Return array of titles
        status: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    return NextResponse.json(
      { status: false, error: 'Failed to fetch subcategories' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    console.log('Request Body:', requestBody);

    // Validate the request body
    const validatedData = subCategorySchema.parse(requestBody);

    // Check if the category and category title exist
    const [categoryExists, categoryTitleExists] = await Promise.all([
      db
        .select()
        .from(mySchema.Categories)
        .where(eq(mySchema.Categories.id, validatedData.category_id))
        .limit(1),
      db
        .select()
        .from(mySchema.SubCategoryTitles)
        .where(
          eq(mySchema.SubCategoryTitles.id, validatedData.category_title_id)
        )
        .limit(1),
    ]);

    if (!categoryExists.length) {
      return NextResponse.json(
        {
          status: false,
          message: 'Invalid category ID. Category does not exist.',
        },
        { status: 400 }
      );
    }

    if (!categoryTitleExists.length) {
      return NextResponse.json(
        {
          status: false,
          message: 'Invalid category title ID. Category title does not exist.',
        },
        { status: 400 }
      );
    }

    // Insert the new subcategory
    const newSubcategory = await db
      .insert(mySchema.Subcategories)
      .values({
        category_id: validatedData.category_id,
        category_title_id: validatedData.category_title_id,
        subCatName: validatedData.subCatName,
        image_url: validatedData.image_url, // Required field
        description: validatedData.description || null,
        is_active: validatedData.is_active,
      })
      .returning();

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

    console.error('Error creating subcategory:', error);
    return NextResponse.json(
      { status: false, error: 'Failed to create subcategory' },
      { status: 500 }
    );
  }
}

// PUT Method - Update Subcategory by ID
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { status: false, message: 'ID is required in the query parameters.' },
        { status: 400 }
      );
    }

    const requestBody = await request.json();
    console.log('Update Request Body:', requestBody);

    // Validate input data against the schema, allowing partial updates
    const validatedData = subCategorySchema.partial().parse(requestBody);

    // Check if the subcategory exists
    const subcategoryExists = await db
      .select()
      .from(mySchema.Subcategories)
      .where(eq(mySchema.Subcategories.id, parseInt(id, 10)))
      .limit(1);

    if (!subcategoryExists.length) {
      return NextResponse.json(
        { status: false, message: 'Subcategory not found.' },
        { status: 404 }
      );
    }

    // Check for missing fields
    const missingFields = [];
    const requiredFields = [
      'category_id',
      'category_title_id',
      'subCatName',
      'image_url',
      'description',
      'is_active',
    ];

    for (const field of requiredFields) {
      if (!(field in validatedData)) {
        missingFields.push(field);
      }
    }

    if (missingFields.length) {
      return NextResponse.json(
        {
          status: false,
          message: `Missing fields: ${missingFields.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Update the subcategory with provided fields
    await db
      .update(mySchema.Subcategories)
      .set({
        category_id: validatedData.category_id,
        category_title_id: validatedData.category_title_id,
        subCatName: validatedData.subCatName,
        image_url: validatedData.image_url,
        description: validatedData.description,
        is_active: validatedData.is_active,
      })
      .where(eq(mySchema.Subcategories.id, parseInt(id, 10)));

    return NextResponse.json(
      { status: true, message: 'Subcategory updated successfully.' },
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

    console.error('Error updating subcategory:', error);
    return NextResponse.json(
      { status: false, error: 'Failed to update subcategory' },
      { status: 500 }
    );
  }
}

// DELETE Method - Remove Subcategory by ID
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { status: false, message: 'ID is required in the query parameters.' },
        { status: 400 }
      );
    }

    // Check if the subcategory exists
    const subcategoryExists = await db
      .select()
      .from(mySchema.Subcategories)
      .where(eq(mySchema.Subcategories.id, parseInt(id, 10)))
      .limit(1);

    if (!subcategoryExists.length) {
      return NextResponse.json(
        { status: false, message: 'Subcategory not found.' },
        { status: 404 }
      );
    }

    // Delete the subcategory
    await db
      .delete(mySchema.Subcategories)
      .where(eq(mySchema.Subcategories.id, parseInt(id, 10)));

    return NextResponse.json(
      { status: true, message: 'Subcategory deleted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting subcategory:', error);
    return NextResponse.json(
      { status: false, error: 'Failed to delete subcategory' },
      { status: 500 }
    );
  }
}
