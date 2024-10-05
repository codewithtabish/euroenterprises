/** @format */
'use client';
import {
  BriefcaseBusiness,
  CircleUser,
  Heart,
  Menu,
  Package2,
  Search,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ModeToggle } from './ModeToggle';
import LOGO from '../../assests/headerlogo.svg';
import Image from 'next/image';
import HeaderSelector from './CategorySelector';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

const Header = () => {
  const { isLoaded, isSignedIn, user: authUser } = useUser();

  return (
    <div>
      <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
        <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
          <Link
            href='#'
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
          >
            <Image
              src={LOGO}
              alt='app logo'
              className='h-8 w-8'
            />
            <Package2 className='h-6 w-6' />
            <span className='sr-only'>Acme Inc</span>
          </Link>
          <Link
            href='#'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Dashboard
          </Link>
          <Link
            href='#'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Orders
          </Link>
          <Link
            href='#'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Products
          </Link>
          <Link
            href='#'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Customers
          </Link>
          <Link
            href='#'
            className='text-foreground transition-colors hover:text-foreground'
          >
            Settings
          </Link>
          <Link href={'#'}>
            <HeaderSelector />
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='shrink-0 md:hidden'
            >
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <nav className='grid gap-6 text-lg font-medium'>
              <Link
                href='#'
                className='flex items-center gap-2 text-lg font-semibold'
              >
                <Package2 className='h-6 w-6' />
                <span className='sr-only'>Acme Inc</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                Dashboard
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                Orders
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                Products
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                Customers
              </Link>
              <Link
                href='#'
                className='hover:text-foreground'
              >
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
          <form className='ml-auto flex-1 sm:flex-initial'>
            <div className='relative'>
              <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search products...'
                className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
              />
            </div>
          </form>
          <ModeToggle />
          <div className='sm:flex sm:gap-4 items-center'>
            {!isLoaded ? (
              <div className='w-6 h-6 animate-spin transition-all rounded-md duration-500 spinner  border-gray-800 dark:border-gray-50 border-2'></div>
            ) : authUser ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label='Dashboard'
                    labelIcon={<BriefcaseBusiness size={15} />}
                    href='/dashboard'
                  />
                  <UserButton.Link
                    label='Create Story'
                    labelIcon={<Heart size={15} />}
                    href='/create-story'
                  />
                  <UserButton.Link
                    label='Create Blog'
                    labelIcon={<Heart size={15} />}
                    href='/create-blog'
                  />
                  <UserButton.Link
                    label='Buy Coins'
                    labelIcon={<Heart size={15} />}
                    href='/buy-coins'
                  />
                  <UserButton.Action label='manageAccount' />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <Button className='dark:text-white'>
                <SignInButton
                  signUpForceRedirectUrl={'/'}
                  signUpFallbackRedirectUrl={'/'}
                />
              </Button>
            )}
          </div>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='secondary'
                size='icon'
                className='rounded-full'
              >
                <CircleUser className='h-5 w-5' />
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
