/** @format */

import React from 'react';
import SingleMainProduct from './SingleMainProduct';
import { ProductInterface } from '@/types/productInterface';

const ProductList = async () => {
  const response = fetch(`http://localhost:3000/api/product`, {
    method: 'GET',
    cache: 'reload',
  });
  const data = await (await response).json();
  const { products } = data;
  return (
    <div className='flex flex-row gap-4  items-center  flex-wrap justify-center p-4 '>
      {products?.map((item: ProductInterface, index: number) => (
        <div key={index}>
          <SingleMainProduct product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
