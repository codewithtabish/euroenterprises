/** @format */
import TrustedCompanies from '@/components/custom/TrustedCompanies';
import HeroSlider from '@/components/custom/HeroSlider';
import Header from '@/components/custom/Header';
import Image from 'next/image';
import ProductList from '@/components/custom/ProductList';

// import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <div className=' my-10'>
        <TrustedCompanies />
      </div>
      <div>
        <ProductList />
      </div>
      {/* <div>
        <Image
          src={
            'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28178564/2024/6/5/ac2cdc5f-be4f-4c92-8baa-4b04b86d571b1717572994244-Sonata-Unisex-Watch-Gift-Set-7021717572993972-1.jpg'
          }
          alt='data'
          width={200}
          height={300}
        />
      </div> */}
    </div>
  );
}
