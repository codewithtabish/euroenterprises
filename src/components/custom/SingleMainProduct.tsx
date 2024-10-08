/** @format */

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import {
  CarTaxiFront,
  CrosshairIcon,
  Minus,
  RemoveFormatting,
  ScaleIcon,
  ShoppingCart,
  ShoppingCartIcon,
  ShowerHead,
  Trash2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
// import { description } from '../../app/dashboard/categories/_components/CategoriesTable';

function SingleMainProduct({ product }: { product: any }) {
  return (
    <Card className='md:w-[250px] w-[300px] cursor-pointer relative'>
      <CardContent className='p-0'>
        <Image
          src={product?.image_url}
          alt='my image'
          width={300}
          height={350}
          className='w-full max-h-[250px] min-h-[250px] object-center rounded-md'
        />
      </CardContent>
      <CardHeader className='p-2'>
        <CardTitle className='text-sm font-bold'>{product?.name}</CardTitle>
        <CardDescription>
          <span className='block text-sm'>
            {product?.description?.length > 35
              ? product?.description.slice(0, 34) + '...'
              : product?.description}
          </span>
          <span className='text-sm font-bold'> {product?.material}</span>
          <div className='flex justify-between items-center mx-2'>
            <span className='text-sm mt-1 font-bold block text-orange-800'>
              PKR {product?.price}
            </span>
            <div>
              <ShoppingCart className='w-6 h-6' />
              <Minus />
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-between p-0'>
        {/* {/* <Button variant='outline'>Cancel</Button> */}
      </CardFooter>
      <div className='absolute left-0 top-1 '>
        {product?.has_been_on_sale && (
          <div className='m-3 absolute left-0 top-1 flex justify-center items-center '>
            <Badge>sale</Badge>
            {/* <span className='text-[10px] ml-2'>{'9 % discount'}</span> */}
          </div>
        )}
      </div>
    </Card>
  );
}

export default SingleMainProduct;
