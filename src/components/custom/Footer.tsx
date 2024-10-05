/** @format */

import Image from 'next/image';
import React from 'react';
import AppLogo from '../../../src/assests/logo2.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='container mx-auto max-w-6xl border-t-2 mt-10 dark:border-gray-700 border-gray-200 pb-10'>
      <footer className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
          <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
            <Link
              href={'/'}
              className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'
            >
              <Image
                alt='logo-footer image'
                width={200}
                height={200}
                src={AppLogo}
                className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              />
              <span className='ml-3 text-xl'>Shop with Us</span>
            </Link>
            <p className='mt-2 text-sm text-gray-500'>
              Your trusted partner for quality products and services.
            </p>
          </div>
          <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-500 tracking-widest text-sm mb-3'>
                PRODUCTS
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  <Link
                    href={'/electronics'}
                    className='text-gray-600 hover:text-gray-800'
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/'}
                    className='text-gray-600 hover:text-gray-800'
                  >
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/'}
                    className='text-gray-600 hover:text-gray-800'
                  >
                    Home Appliances
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/'}
                    className='text-gray-600 hover:text-gray-800'
                  >
                    Beauty & Health
                  </Link>
                </li>
              </nav>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-600 tracking-widest text-sm mb-3'>
                CUSTOMER SERVICE
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  <Link
                    href={'/'}
                    className='text-gray-600 hover:text-gray-800'
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/'}
                    className='text-gray-600 hover:text-gray-800'
                  >
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/'}
                    className='text-gray-600 hover:text-gray-800'
                  >
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/'}
                    className='text-gray-600 hover:text-gray-800'
                  >
                    Track Your Order
                  </Link>
                </li>
              </nav>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-600 tracking-widest text-sm mb-3'>
                CONTACT US
              </h2>
              <p className='text-gray-600'>Phone: ++923479000919s</p>
              <p className='text-gray-600'>
                Email: info@shop.codewithtabish.com
              </p>
            </div>
            <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-medium text-gray-600 tracking-widest text-sm mb-3'>
                FOLLOW US
              </h2>
              <span className='inline-flex'>
                <a className='text-gray-500 hover:text-gray-900'>
                  <svg
                    fill='currentColor'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                  </svg>
                </a>
                <a className='ml-3 text-gray-500 hover:text-gray-900'>
                  <svg
                    fill='currentColor'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                  </svg>
                </a>
                <a className='ml-3 text-gray-500 hover:text-gray-900 cursor-pointer'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='5'
                      ry='5'
                    ></rect>
                    <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className='dark:bg-gray-700 bg-gray-300'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-500 text-sm text-center sm:text-left'>
              © 2024 Shop with Us —
              <a
                href='https://codewithtabish.com'
                rel='noopener noreferrer'
                className='text-gray-600 ml-1 cursor-pointer '
                target='_blank'
              >
                codewithtabish.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
