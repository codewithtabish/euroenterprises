/** @format */
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
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

const AllCategoriesBox = ({ setCategoryID }: any) => {
  const [categories, setCategories] = useState<any>();
  const [categoriesLoaing, setcategoriesLoaing] = useState<boolean>(false);
  const [selectedCat, setSelectedCat] = useState<any>();

  useEffect(() => {
    fetchCategories();
    // return () => {};
  }, []);

  const fetchCategories = async () => {
    try {
      setcategoriesLoaing(true);
      const BASE_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_MODEL
        ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
        : process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${BASE_URL}/api/category`, {
        method: 'GET',
        cache: 'reload', // You may adjust this based on your caching strategy
      });

      const { categories }: { categories: any } = await response.json();
      setCategories(categories);
      setcategoriesLoaing(false);
    } catch (error: any) {
      setcategoriesLoaing(false);
    } finally {
      setcategoriesLoaing(false);
    }
  };
  if (categoriesLoaing) {
    return <div>THE CAT ARE LOADING</div>;
  }

  const handleCategoryChange = (e: any) => {
    const selectedCategory = categories?.find((cat: any) => cat.name === e);
    // setSelectedCat(selectedCategory); // Update selected category name
    setCategoryID(selectedCat?.id); // Pass the selected category ID
  };

  return (
    <div>
      <div>
        {/* {JSON.stringify(categories)} */}
        <Card x-chunk='dashboard-07-chunk-3'>
          <CardHeader>
            <CardTitle>Select Category </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-6'>
              <div className='grid gap-3'>
                <Label htmlFor='status'>Status</Label>
                <Select
                  onValueChange={(e) => {
                    const selectedCategory = categories?.find(
                      (cat: any) => cat.name === e
                    );
                    setCategoryID(selectedCategory?.id); // Pass the selected category ID
                  }}
                >
                  <SelectTrigger
                    id='status'
                    aria-label='Select status'
                  >
                    <SelectValue placeholder='Select status' />
                  </SelectTrigger>
                  <SelectContent>
                    {categories?.map((cat: any, index: any) => {
                      //   setselectedCat(cat);

                      return (
                        <SelectItem
                          //   onSelect={() => alert('this')}
                          value={cat?.name}
                        >
                          {cat?.name}
                        </SelectItem>
                      );
                    })}
                    {/* <SelectItem value='Active'>Active</SelectItem> */}
                    {/* <SelectItem value='Archived'>Archived</SelectItem> */}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AllCategoriesBox;
