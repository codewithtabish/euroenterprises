/** @format */
'use client';
import React, { useState } from 'react';
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
import AddSubCatMainTitle from './AddSubCatMainTitle';
import AddSubCategoryMainCompoent from './AddSubCategoryMainCompoent';

const AddCategoryCompoent = () => {
  // Image and Color States
  const [primaryImage, setPrimaryImage] = useState<string | null>(null);

  // State for form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [categoryStatus, setCategoryStatus] = useState<string>();
  // const [catData, setcatData] = useState<any>();
  const [showCelebration, setShowCelebration] = useState<boolean>(false);
  const { toast } = useToast();

  // Image Handling
  const handlePrimaryImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrimaryImage(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleRemovePrimaryImage = () => {
    setPrimaryImage(null); // Remove image
  };

  // Color Handling

  // Product Data Submission (Form Submission)
  const handleAddProduct = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare the data object
    const categoryData = {
      name,
      description,
      image_url:
        'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28219632/2024/3/12/2f53aaab-40e1-4c5b-8148-6ad150e5f4341710256687634CampusSutraMenClassicOpaqueCheckedCasualShirt2.jpg', // Assuming this is mapped to image_url
      status: categoryStatus, // Assuming this is mapped to status
    };

    // Check for missing fields and display toast if any are missing
    if (!name || !description || !primaryImage || !categoryStatus) {
      return toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Please fill in all the fields.',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });
    }

    try {
      // Determine the correct base URL based on the environment
      const BASE_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_MODEL
        ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
        : process.env.NEXT_PUBLIC_BASE_URL;
      // `https://online.euroenterprises.shop/api/product`,

      const response = await fetch(
        `https://online.euroenterprises.shop/api/category`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(categoryData), // Send the category data as a JSON string
        }
      );

      // Parse the response JSON
      const data = await response.json();
      console.log(data);

      // Handle success
      if (data && data.status) {
        // setcatData(categoryData);
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
    } catch (error: unknown) {
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
    <div className='max-w-6xl mx-auto'>
      <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 my-10'>
        <div className='mx-auto grid max-w-[59rem] md:min-w-[59rem] flex-1 auto-rows-max gap-4'>
          <form>
            <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
              {/* Left Side: Product Details */}
              <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
                <Card>
                  <CardHeader>
                    <CardTitle>Add Category</CardTitle>
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
                      <div>
                        <Card x-chunk='dashboard-07-chunk-3'>
                          <CardHeader>
                            <CardTitle>Category Status</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className='grid gap-6'>
                              <div className='grid gap-3'>
                                <Label htmlFor='status'>Status</Label>
                                <Select
                                  onValueChange={(e) => setCategoryStatus(e)}
                                >
                                  <SelectTrigger
                                    id='status'
                                    aria-label='Select status'
                                  >
                                    <SelectValue placeholder='Select status' />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value='Draft'>Draft</SelectItem>
                                    <SelectItem value='Active'>
                                      Active
                                    </SelectItem>
                                    <SelectItem value='Archived'>
                                      Archived
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
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
                      {primaryImage ? (
                        <div className='relative'>
                          <Image
                            height={120}
                            width={120}
                            src={primaryImage}
                            alt='Primary'
                            className='w-full h-auto object-cover rounded-lg cursor-pointer'
                          />
                          <button
                            type='button'
                            onClick={handleRemovePrimaryImage}
                            className='absolute top-2 right-2 p-1 bg-white rounded-full shadow-lg'
                          >
                            <X className='w-4 h-4 text-red-500' />
                          </button>
                        </div>
                      ) : (
                        <div>
                          <Label
                            htmlFor='primaryImage'
                            className='flex justify-center border border-dashed rounded-md p-4 cursor-pointer'
                          >
                            <Upload className='mr-2 cursor-pointer' />
                            Upload Primary Image
                          </Label>
                          <Input
                            required
                            id='primaryImage'
                            type='file'
                            accept='image/*'
                            onChange={handlePrimaryImageChange}
                            className='hidden'
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Button
                  type='submit'
                  className='w-full bg-primary'
                  onClick={handleAddProduct}
                >
                  Add Category
                </Button>
              </div>
            </div>
          </form>
        </div>
        <hr />
        <AddSubCatMainTitle />
        <hr />
        <AddSubCategoryMainCompoent />
      </main>
      {showCelebration && (
        <CelebrationComponent showCelebration={showCelebration} />
      )}
    </div>
  );
};

export default AddCategoryCompoent;
