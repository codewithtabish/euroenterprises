/** @format */
import TrustedCompanies from '@/components/custom/TrustedCompanies';
import Image from 'next/image';
import HeroSlider from '@/components/custom/HeroSlider';

// import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <div className='max-w-4xl mx-auto'>
        <TrustedCompanies />
      </div>
      <div></div>
    </div>
  );
}
