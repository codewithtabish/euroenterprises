/** @format */

import React from 'react';
import SingleMainProduct from './SingleMainProduct';
import { ProductInterface } from '@/types/productInterface';

const ProductList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`,
      {
        method: 'GET',
        cache: 'default', // You may adjust this based on your caching strategy
      }
    );

    // Check if the response is okay (status 200-299)
    if (!response || !response.status) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const { products } = data;

    // Check if products are available
    if (!products) {
      console.error('No products found');
      return <p>No products available</p>; // Render a message when no products are found
    }

    return (
      <div className='flex flex-row gap-4 items-center flex-wrap justify-center p-4'>
        {products.map((item: ProductInterface, index: number) => (
          <div key={index}>
            <SingleMainProduct product={item} />
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return <p>Error fetching products. Please try again later.</p>; // Render a message when there's an error
  }
};

export default ProductList;
