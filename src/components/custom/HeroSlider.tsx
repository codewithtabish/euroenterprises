/** @format */
'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ImageOne from '../../assests/five.jpg';
import ImageTwo from '../../assests/six.jpg';
// import ImageTwo from './assests/banner-2.webp';
import Image from 'next/image';

export default function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const images = [ImageOne, ImageTwo];

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full overflow-x-hidden max-h-[300px] overflow-y-hidden '
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardContent className=' '>
                  <Image
                    src={item}
                    alt='image image'
                    width={400}
                    height={200}
                    className='w-full max-h-[400px] object-fill rounded-lg'
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
