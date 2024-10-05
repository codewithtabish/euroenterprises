/** @format */
import { cn } from '@/lib/utils';
import Marquee from '../ui/marquee';
import Image from 'next/image';

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james',
  },
];

const ReviewCard = ({
  name,
  description,
  image_url,
}: {
  name: string;
  description: string;
  image_url: string;
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
          alt=''
          src={image_url}
        />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{name}</p>
        </div>
      </div>
      {/* <blockquote className='mt-2 text-sm'>{body}</blockquote> */}
    </figure>
  );
};

async function TrustedCompanies() {
  const response = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`, {
    method: 'GET',
    cache: 'force-cache',
  });
  const data = await (await response).json();
  const { categories } = data;
  const firstRow = categories.slice(0, categories.length / 2);
  const secondRow = categories.slice(categories.length / 2);

  return (
    <div className='relative flex  w-full flex-col items-center justify-center overflow-hidden '>
      {/* {JSON.stringify(categories)} */}
      {/* <h1 className='text-3xl font-bold'>Categories</h1> */}
      <Marquee
        pauseOnHover
        className='[--duration:20s]'
      >
        {firstRow.map((category) => (
          <ReviewCard
            key={category.id}
            {...category}
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
            key={category.id}
            {...category}
          />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  );
}

export default TrustedCompanies;
