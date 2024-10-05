/** @format */
import { cn } from '@/lib/utils';
import Marquee from '../ui/marquee';
import Image from 'next/image';
import { CategoryInterface } from '@/types/categoryInterface';

const ReviewCard = ({
  name,
  description = 'No description available', // Fallback if description is undefined
  image_url = '/default-image.jpg', // Fallback if image_url is undefined
}: {
  name: string;
  description?: string; // Make description optional
  image_url?: string; // Make image_url optional
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-2 justify-center  flex flex-col',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <Image
          className='rounded-full'
          width='45'
          height='46'
          alt={name}
          src={image_url} // Default image if image_url is missing
        />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

async function TrustedCompanies() {
  const response = await fetch(`http://localhost:3000/api/category`, {
    method: 'GET',
    cache: 'no-cache',
  }).catch(() => null);

  if (!response) {
    // Handle the error, like returning an empty state or logging
    console.error('Failed to fetch data');
    return;
  }

  const data = await response.json();
  const { categories } = data;

  const firstRow = categories.slice(0, categories.length / 2);
  const secondRow = categories.slice(categories.length / 2);

  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      {/* <h1 className='text-3xl font-bold'>Categories</h1> */}
      <Marquee
        pauseOnHover
        className='[--duration:20s]'
      >
        {firstRow.map((category: CategoryInterface) => (
          <ReviewCard
            key={category?.id}
            name={category.name}
            description={category.description}
            image_url={category.image_url}
          />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className='[--duration:20s]'
      >
        {secondRow.map((category: CategoryInterface) => (
          <ReviewCard
            key={category?.id}
            name={category.name}
            description={category.description}
            image_url={category.image_url}
          />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  );
}

export default TrustedCompanies;
