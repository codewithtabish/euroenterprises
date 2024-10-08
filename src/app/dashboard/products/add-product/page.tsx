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
import { ChromePicker } from 'react-color'; // Importing ChromePicker from react-color
import Image from 'next/image';

const AddProductHomePage = () => {
  // Image and Color States
  const [primaryImage, setPrimaryImage] = useState<string | null>(null);
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>(['#ffffff']); // Default color white
  const [colorPickerVisible, setColorPickerVisible] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>('#ffffff');

  // State for form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [sku, setSku] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [weight, setWeight] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [material, setMaterial] = useState('');
  const [warranty, setWarranty] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

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

  const handleAdditionalImagesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setAdditionalImages((prevImages) => [...prevImages, ...newImages]); // Add new images to list
  };

  const handleRemoveImage = (imageToRemove: string) => {
    setAdditionalImages((prevImages) =>
      prevImages.filter((image) => image !== imageToRemove)
    );
  };

  // Color Handling
  const handleAddColor = () => {
    if (!colors.includes(currentColor)) {
      setColors((prevColors) => [...prevColors, currentColor]); // Add color
      setCurrentColor('#ffffff'); // Reset color picker
    }
    setColorPickerVisible(false); // Hide color picker
  };

  // Product Data Submission (Form Submission)
  const handleAddProduct = async () => {
    const productData = {
      name,
      description,
      price,
      stock,
      sku,
      brand,
      model,
      weight,
      dimensions,
      material,
      warranty,
      category,
      subcategory,
      colors,
      primaryImage,
      additionalImages,
    };

    // Logging the product data
    console.log(productData);

    // Simulate saving process or API call
    try {
      // Example: Make an API request to save the product
      // await saveProduct(productData);
      alert('Product saved successfully!');
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error saving product.');
    }
  };

  return (
    <div className='max-w-6xl mx-auto'>
      <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 my-10'>
        <div className='mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4'>
          <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
            {/* Left Side: Product Details */}
            <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
              <Card>
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
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
                    {/* Price */}
                    <div className='grid gap-3'>
                      <Label htmlFor='price'>Price</Label>
                      <Input
                        id='price'
                        required
                        type='number'
                        min='0'
                        step='0.01'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Enter product price'
                      />
                    </div>
                    {/* Stock */}
                    <div className='grid gap-3'>
                      <Label htmlFor='stock'>Stock</Label>
                      <Input
                        required
                        id='stock'
                        type='number'
                        min='0'
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        placeholder='Enter available stock'
                      />
                    </div>
                    {/* SKU */}
                    <div className='grid gap-3'>
                      <Label htmlFor='sku'>SKU</Label>
                      <Input
                        id='sku'
                        type='text'
                        required
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        placeholder='Enter SKU'
                      />
                    </div>
                    {/* Brand */}
                    <div className='grid gap-3'>
                      <Label htmlFor='brand'>Brand</Label>
                      <Input
                        id='brand'
                        required
                        type='text'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder='Enter brand'
                      />
                    </div>
                    {/* Model */}
                    <div className='grid gap-3'>
                      <Label htmlFor='model'>Model</Label>
                      <Input
                        id='model'
                        type='text'
                        value={model}
                        required
                        onChange={(e) => setModel(e.target.value)}
                        placeholder='Enter model'
                      />
                    </div>
                    {/* Weight */}
                    <div className='grid gap-3'>
                      <Label htmlFor='weight'>Weight (kg)</Label>
                      <Input
                        id='weight'
                        required
                        type='number'
                        step='0.01'
                        min={0}
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder='Enter weight'
                      />
                    </div>
                    {/* Dimensions */}
                    <div className='grid gap-3'>
                      <Label htmlFor='dimensions'>Dimensions</Label>
                      <Input
                        id='dimensions'
                        type='text'
                        required
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                        placeholder='Enter dimensions (LxWxH)'
                      />
                    </div>
                    {/* Material */}
                    <div className='grid gap-3'>
                      <Label htmlFor='material'>Material</Label>
                      <Input
                        required
                        id='material'
                        type='text'
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                        placeholder='Enter material'
                      />
                    </div>
                    {/* Warranty */}
                    <div className='grid gap-3'>
                      <Label htmlFor='warranty'>Warranty</Label>
                      <Input
                        id='warranty'
                        type='number'
                        min='0'
                        value={warranty}
                        required
                        onChange={(e) => setWarranty(e.target.value)}
                        placeholder='Enter warranty period'
                      />
                    </div>
                    {/* Category */}
                    <div className='grid gap-3'>
                      <Label htmlFor='category'>Category</Label>
                      <Select onValueChange={(value) => setCategory(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder='Select category' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='category1'>Category 1</SelectItem>
                          <SelectItem value='category2'>Category 2</SelectItem>
                          {/* Add more categories */}
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Subcategory */}
                    <div className='grid gap-3'>
                      <Label htmlFor='subcategory'>Subcategory</Label>
                      <Select onValueChange={(value) => setSubcategory(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder='Select subcategory' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='subcategory1'>
                            Subcategory 1
                          </SelectItem>
                          <SelectItem value='subcategory2'>
                            Subcategory 2
                          </SelectItem>
                          {/* Add more subcategories */}
                        </SelectContent>
                      </Select>
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

              {/* Additional Images Upload */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2'>
                    <Label
                      htmlFor='additionalImages'
                      className='flex justify-center border border-dashed rounded-md p-4'
                    >
                      <Upload className='mr-2 cursor-pointer' />
                      Upload Additional Images
                    </Label>
                    <Input
                      required
                      id='additionalImages'
                      type='file'
                      accept='image/*'
                      multiple
                      onChange={handleAdditionalImagesChange}
                      className='hidden'
                    />

                    <div className='grid grid-cols-3 gap-2 mt-2'>
                      {additionalImages.map((image, index) => (
                        <div
                          key={index}
                          className='relative'
                        >
                          <img
                            src={image}
                            alt={`Additional ${index + 1}`}
                            className='w-full h-auto object-cover rounded-lg min-h-[150px] max-h-[150px]'
                          />
                          <button
                            type='button'
                            onClick={() => handleRemoveImage(image)}
                            className='absolute top-2 right-2 p-1 bg-white rounded-full shadow-lg'
                          >
                            <X className='w-4 h-4 text-red-500' />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Color Picker */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Colors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    {/* Current Color Picker */}
                    {colorPickerVisible ? (
                      <div className='flex justify-center'>
                        <ChromePicker
                          color={currentColor}
                          onChangeComplete={(color) =>
                            setCurrentColor(color.hex)
                          }
                        />
                        <Button
                          className='ml-2'
                          onClick={handleAddColor}
                        >
                          Add Color
                        </Button>
                      </div>
                    ) : (
                      <Button
                        className='w-full'
                        onClick={() => setColorPickerVisible(true)}
                      >
                        Select Color
                      </Button>
                    )}

                    {/* Display Colors */}
                    <div className='flex flex-wrap gap-2'>
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className='w-10 h-10 rounded-full'
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                className='w-full bg-green-500 text-white'
                onClick={handleAddProduct}
              >
                Add Product
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProductHomePage;
