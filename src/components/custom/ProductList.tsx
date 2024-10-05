/** @format */

import React from 'react';
import SingleMainProduct from './SingleMainProduct';

const ProductList = async () => {
  const response = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product`, {
    method: 'GET',
    cache: 'no-cache',
  });
  const data = await (await response).json();
  const { products } = data;
  return (
    <div className='flex flex-row gap-4  items-center  flex-wrap justify-center p-4 '>
      {products?.map((item: any, index: any) => (
        <div key={index}>
          <SingleMainProduct product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
