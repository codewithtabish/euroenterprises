/** @format */
import TrustedCompanies from '@/components/custom/TrustedCompanies';
import HeroSlider from '@/components/custom/HeroSlider';
import Header from '@/components/custom/Header';
import Image from 'next/image';
import ProductList from '@/components/custom/ProductList';
import NarrowImage from '../../src/assests/narrow-one.webp';
import NarrowImageTwo from '../../src/assests/narrow-2.png';
import AppBanner from '../../src/assests/app-banner-2.jpg';

// import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />

      <HeroSlider />
      <div className='flex justify-center items-center flex-row gap-4 max-w-6xl mx-auto my-5'>
        <div className='flex-1'>
          <Image
            src={NarrowImage}
            alt='data'
            width={200}
            height={300}
            className='w-full mx-auto object-cover max-h-[100px] '
          />
        </div>
        <div className='flex-1'>
          <Image
            src={NarrowImageTwo}
            alt='data'
            width={200}
            height={300}
            className='w-full mx-auto object-cover max-h-[100px]'
          />
        </div>
      </div>
      <div className=' md:my-10 py-4'>
        <TrustedCompanies />
      </div>

      <div className='  md:py-10 py-5 md:px-0 px-1'>
        <ProductList />
      </div>
      <div className='w-1/2 mx-auto'>
        <Image
          src={AppBanner}
          alt='data'
          width={200}
          height={300}
          className='w-full mx-auto object-cover max-h-[150px]'
        />
      </div>
    </div>
  );
}
