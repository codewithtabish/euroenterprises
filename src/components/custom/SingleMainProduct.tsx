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
import { ScaleIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ProductInterface } from '@/types/productInterface';

function SingleMainProduct({ product }: { product: ProductInterface }) {
  return (
    <Card className='w-[300px] cursor-pointer relative'>
      <CardContent className='p-0'>
        <Image
          src={product?.image_url || ' '}
          alt='my image'
          width={300}
          height={350}
          className='w-full max-h-[300px] object-fill rounded-md'
        />
      </CardContent>
      <CardHeader>
        <CardTitle>{product?.name}</CardTitle>
        <CardDescription>
          <span className='text-sm font-bold'>PKR {product?.material}</span>
          <span className='text-sm mt-1 font-bold block '>
            PKR {product?.price}
          </span>
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
