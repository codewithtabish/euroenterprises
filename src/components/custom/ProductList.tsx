/** @format */

import React from 'react';
import SingleMainProduct from './SingleMainProduct';
import { ProductInterface } from '@/types/productInterface';

const ProductList = async () => {
  // try {
  //   const BASE_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_MODEL
  //     ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
  //     : process.env.NEXT_PUBLIC_BASE_URL;
  //   const response = await fetch(
  //     `https://shop.codewithtabish.com/api/product`,
  //     {
  //       method: 'GET',
  //       cache: 'force-cache', // You may adjust this based on your caching strategy
  //     }
  //   );

  //   // Check if the response is okay (status 200-299)
  //   if (!response || !response.status) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   const { products } = data;

  //   // Check if products are available
  //   if (!products) {
  //     console.error('No products found');
  //     return <p>No products available</p>; // Render a message when no products are found
  //   }
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod
      molestias, est iste reprehenderit autem nihil voluptatem nam officia velit
      a exercitationem culpa pariatur, ea quis asperiores id hic libero?
    </div>
  );

  //   return (
  //     <div className='flex flex-row gap-4 items-center flex-wrap justify-center p-4'>
  //       {products.map((item: ProductInterface, index: number) => (
  //         <div key={index}>
  //           <SingleMainProduct product={item} />
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  // catch (error) {
  //   console.error('Failed to fetch products:', error);
  //   return <p>Error fetching products. Please try again later.</p>; // Render a message when there's an error
  // }
};

export default ProductList;
