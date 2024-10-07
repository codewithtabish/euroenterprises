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
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-2 flex flex-col justify-center',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]', // light styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]' // dark styles
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <Image
          className='rounded-full object-cover min-h-[40px] max-h-[40px]'
          width={40} // Changed to number type
          height={40} // Changed to number type
          alt={name}
          src={image_url} // Default image if image_url is missing
        />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name.length > 20 ? name.slice(0, 20) + '...' : name + ''}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40 line-clamp-2'>
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const TrustedCompanies = async () => {
  // Fetch categories data directly in the server component
  //   NEXT_PUBLIC_BASE_URL=https://shop.codewithtabish.com
  // NEXT_PUBLIC_DEVELOPMENT_BASE_URL=http://localhost:3000
  // NEXT_PUBLIC_DEVELOPMENT_MODEL=true

  const BASE_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_MODEL
    ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${BASE_URL}/api/category`, {
    method: 'GET',
    cache: 'reload', // You may adjust this based on your caching strategy
  });

  if (!response.ok) {
    console.error('Failed to fetch data:', response.statusText);
    return (
      <div className='text-center text-red-600'>
        Error loading categories. Please try again later.
      </div>
    ); // Display an error message if the fetch fails
  }

  const { categories }: { categories: CategoryInterface[] } =
    await response.json();

  const halfLength = Math.ceil(categories.length / 2); // Use ceil for odd-length arrays
  const firstRow = categories.slice(0, halfLength);
  const secondRow = categories.slice(halfLength);

  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      <Marquee
        pauseOnHover
        className='[--duration:20s]'
      >
        {firstRow.map((category) => (
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
        {secondRow.map((category) => (
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
};

export default TrustedCompanies;
