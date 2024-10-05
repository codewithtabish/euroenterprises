/** @format */

import React from 'react';

const ProductList = async () => {
  const response = fetch('http://localhost:3000/api/product', {
    method: 'GET',
    cache: 'force-cache',
  });
  const data = await (await response).json();
  const { products } = data;
  return (
    <div>
      {products?.map((item: any, index: any) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
