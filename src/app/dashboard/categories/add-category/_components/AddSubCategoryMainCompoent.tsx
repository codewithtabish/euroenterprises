/** @format */
'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Upload } from 'lucide-react'; // Importing cross and upload icons
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import CelebrationComponent from '@/app/dashboard/_components/CelebrationComponent';
import axios from 'axios';
import { useState } from 'react';
import AllCategoriesBox from './AllCategoriesBox';
import AllSubMaintitle from './AllSubMaintitle';

const AddSubCategoryMainCompoent = () => {
  const [subMainLastCategoryImage, setsubMainLastCategoryImage] = useState<
    string | null
  >(null);

  // State for form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [categoryStatus, setCategoryStatus] = useState<any>();
  const [catData, setcatData] = useState<any>();
  const [showCelebration, setShowCelebration] = useState<boolean>(false);
  const [categoryID, setCategoryID] = useState<any>();
  const [categorySubMainTitleID, setSubMainTtitleNameID] = useState<any>();
  const [categoriesLoaing, setcategoriesLoaing] = useState<boolean>(false);
  const { toast } = useToast();

  //   const subCategoryTitleSchema = z.object({
  //   category_id: z
  //     .number({ invalid_type_error: 'Category ID must be a number' })
  //     .positive({ message: 'Category ID must be a positive number' }), // Ensures the number is positive and non-zero
  //   subCatMainTitle: z
  //     .string()
  //     .min(1, { message: 'Subcategory title is required' }), // Ensures the string is not empty
  //   image_url: z
  //     .string()
  //     .url({ message: 'Invalid image URL' })
  //     .min(1, { message: 'Image URL is required' }), // Ensures the image URL is provided and valid
  //   subCatMaindescription: z
  //     .string()
  //     .min(1, { message: 'subCatMaindescription  is required' }),
  // });

  // Image Handling
  const handlesubMainLastCategoryImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setsubMainLastCategoryImage(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleRemovesubMainLastCategoryImage = () => {
    setsubMainLastCategoryImage(null); // Remove image
  };

  // Color Handling

  // Product Data Submission (Form Submission)
  const handleAddProduct = async (e: any) => {
    e.preventDefault();

    // Prepare the data object
    const categoryData = {
      category_id: categoryID?.id,
      subCatMainTitle: name,
      subCatMaindescription: description,
      image_url:
        'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28219632/2024/3/12/2f53aaab-40e1-4c5b-8148-6ad150e5f4341710256687634CampusSutraMenClassicOpaqueCheckedCasualShirt2.jpg', // Assuming this is mapped to image_url
      status: categoryStatus, // Assuming this is mapped to status
    };

    // Check for missing fields and display toast if any are missing
    if (!name || !description || !subMainLastCategoryImage || !categoryID) {
      return toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Please fill in all the fields.',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });
    }

    try {
      setcatData(categoryData);
      return;

      // Determine the correct base URL based on the environment
      const BASIC_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_MODE
        ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
        : process.env.NEXT_PUBLIC_BASE_URL;

      // Send the POST request using fetch
      const response = await fetch(`http://localhost:3000/api/category/sub`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData), // Send the category data as a JSON string
      });

      // Parse the response JSON
      const data = await response.json();
      console.log(data);

      // Handle success
      if (data && data.status) {
        setcatData(categoryData);
        setShowCelebration(true); // Assuming this is a UI effect
        toast({
          title: 'Category added successfully!',
          description: 'The category has been added.',
          action: <ToastAction altText='OK'>OK</ToastAction>,
        });
      } else {
        // Handle API error response
        toast({
          variant: 'destructive',
          title: 'Error adding category',
          description: data.error || 'Something went wrong. Please try again.',
          action: <ToastAction altText='Try again'>Try again</ToastAction>,
        });
      }
    } catch (error: any) {
      // Handle network or unexpected errors
      console.error('Error adding category:', error);
      toast({
        variant: 'destructive',
        title: 'Error adding category',
        description: 'Something went wrong. Please try again.',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });
    }
  };

  return (
    <div className='mx-auto grid max-w-[59rem] md:min-w-[59rem] flex-1 auto-rows-max gap-4'>
      {/* {JSON.stringify(catData)} */}
      <form>
        <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
          {/* Left Side: Product Details */}
          <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
            <Card>
              <CardHeader>
                <CardTitle>Add SubCategory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid gap-6'>
                  {/* Product Name */}
                  <div className='grid gap-3'>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                      id='name'
                      type='text'
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      placeholder='Enter product name'
                    />
                  </div>
                  {/* Description */}
                  <div className='grid gap-3'>
                    <Label htmlFor='description'>Description</Label>
                    <Textarea
                      required
                      id='description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder='Enter product description'
                      className='min-h-32'
                    />
                  </div>
                  <div className='grid gap-3'>
                    <AllCategoriesBox
                      setCategoryID={setCategoryID}
                      setcategoriesLoaing={setcategoriesLoaing}
                      categoriesLoaing={categoriesLoaing}
                    />
                  </div>
                  <div className='grid gap-3'>
                    <AllSubMaintitle
                      setSubMainTtitleNameID={setSubMainTtitleNameID}
                      setcategoriesLoaing={setcategoriesLoaing}
                      categoriesLoaing={categoriesLoaing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side: Image and Color Upload */}
          <div className='space-y-6'>
            {/* Primary Image Upload */}
            <Card>
              <CardHeader>
                <CardTitle>Primary Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  {subMainLastCategoryImage ? (
                    <div className='relative'>
                      <Image
                        height={120}
                        width={120}
                        src={subMainLastCategoryImage}
                        alt='Primary'
                        className='w-full h-auto object-cover rounded-lg cursor-pointer'
                      />
                      <button
                        type='button'
                        onClick={handleRemovesubMainLastCategoryImage}
                        className='absolute top-2 right-2 p-1  shadow-lg'
                      >
                        <X className='w-4 h-4 text-red-500' />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Label
                        htmlFor='subMainLastCategoryImage'
                        className='flex justify-center border border-dashed rounded-md p-4 cursor-pointer'
                      >
                        <Upload className='mr-2 cursor-pointer' />
                        Upload Primary Image
                      </Label>
                      <Input
                        required
                        id='subMainLastCategoryImage'
                        type='file'
                        accept='image/*'
                        onChange={handlesubMainLastCategoryImageChange}
                        className='hidden'
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Button
              type='submit'
              className='w-full'
              onClick={handleAddProduct}
            >
              Add SubComponents
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSubCategoryMainCompoent;
