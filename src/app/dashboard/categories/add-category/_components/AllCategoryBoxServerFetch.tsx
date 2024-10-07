/** @format */

import React from 'react';
import AllCategoriesBox from './AllCategoriesBox';
import { CategoryInterface } from '@/types/categoryInterface';

const AllCategoryBoxServerFetch = async () => {
  //   const BASE_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_MODEL
  //     ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
  //     : process.env.NEXT_PUBLIC_BASE_URL;
  //   const response = await fetch(`${BASE_URL}/api/category`, {
  //     method: 'GET',
  //     cache: 'no-cache', // You may adjust this based on your caching strategy
  //   });

  //   if (!response.ok) {
  //     console.error('Failed to fetch data:', response.statusText);

  //     return (
  //       <div className='text-center text-red-600'>
  //         Error loading categories. Please try again later.
  //       </div>
  //     ); // Display an error message if the fetch fails
  //   }

  //   const { categories }: { categories: any } = await response.json();
  //   console.log('The categories here in server is ', categories);

  return <div>{/* <AllCategoriesBox categories={categories} /> */}</div>;
};

export default AllCategoryBoxServerFetch;
