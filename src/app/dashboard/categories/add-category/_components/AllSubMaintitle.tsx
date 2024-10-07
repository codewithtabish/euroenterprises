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

const AllSubMaintitle = ({ setSubMainTtitleNameID }: any) => {
  const [categories, setCategories] = useState<any>();
  const [categoriesLoaing, setcategoriesLoaing] = useState<boolean>(false);

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
      const response = await fetch(
        'http://localhost:3000/api/category/cat-sub-main?categoryID=8',
        // `${BASE_URL}/api/cat-sub-main?categoryID=8`,
        {
          method: 'GET',
          cache: 'reload', // You may adjust this based on your caching strategy
        }
      );

      const { subCategoryTitles }: { subCategoryTitles: any } =
        await response.json();
      setCategories(subCategoryTitles);
      console.log('THE SUB MAIN TITLES ARE ', subCategoryTitles);
      setcategoriesLoaing(false);
    } catch (error: any) {
      setcategoriesLoaing(false);
    } finally {
      setcategoriesLoaing(false);
    }
  };
  if (categoriesLoaing) {
    return <div>THE subtitle ARE LOADING</div>;
  }

  return (
    <div>
      <div>
        {/* {JSON.stringify(categories)} */}
        <Card x-chunk='dashboard-07-chunk-3'>
          <CardHeader>
            <CardTitle>Select Category Title </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-6'>
              <div className='grid gap-3'>
                <Label htmlFor='status'>Status</Label>
                <Select onValueChange={(e) => setSubMainTtitleNameID(e)}>
                  <SelectTrigger
                    id='status'
                    aria-label='Select status'
                  >
                    <SelectValue placeholder='Select Main Title' />
                  </SelectTrigger>
                  <SelectContent>
                    {categories?.map((cat: any, index: any) => {
                      return (
                        <SelectItem value={cat?.subCatMainTitle}>
                          {cat?.subCatMainTitle}
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

export default AllSubMaintitle;
