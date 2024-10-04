/** @format */
'use client';
import TrustedCompanies from '@/components/custom/TrustedCompanies';
import HeroSlider from '@/components/custom/HeroSlider';
import Header from '@/components/custom/Header';

// import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <div className='max-w-4xl mx-auto'>
        <TrustedCompanies />
      </div>
      <div></div>
    </div>
  );
}
