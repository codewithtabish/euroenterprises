/** @format */
'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ArrowDownAZ } from 'lucide-react';

export default function HeaderSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex flex-row gap-2 items-center'>
          <Button variant='outline'>
            All Categories
            <ArrowDownAZ className='w-6 h-6 ml-3' />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-64'>
        {/* Clothing Category */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Clothing</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            {/* Column 1 - Pants */}
            <div>
              <h3 className='font-semibold'>Pants</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Jeans
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Cargo Pants
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Sweatpants
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Chinos
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Shorts
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Leggings
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Capris
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Overalls
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Trousers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Palazzo Pants
              </DropdownMenuItem>
            </div>

            {/* Column 2 - Tops */}
            <div>
              <h3 className='font-semibold'>Tops</h3>
              <DropdownMenuItem className='cursor-pointer'>
                T-Shirts
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Polo Shirts
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Hoodies
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Sweaters
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Jackets
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Tank Tops
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Blouses
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Cardigans
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Camisoles
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Bodysuits
              </DropdownMenuItem>
            </div>

            {/* Column 3 - Outerwear */}
            <div>
              <h3 className='font-semibold'>Outerwear</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Coats
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Parkas
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Denim Jackets
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Windbreakers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Trench Coats
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Rain Jackets
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Leather Jackets
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Faux Fur Coats
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Blazers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Peacoats
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Babies & Kids Category */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Babies & Kids</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            {/* Column 1 - Kids' Clothing */}
            <div>
              <h3 className='font-semibold'>Kids' Clothing</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Onesies
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Toddler Dresses
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Boys' Shirts
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Girls' Skirts
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Jumpsuits
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Swimwear
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Sleepwear
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Socks
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Baby Hats
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Accessories
              </DropdownMenuItem>
            </div>

            {/* Column 2 - Feeding */}
            <div>
              <h3 className='font-semibold'>Feeding</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Baby Food Mills
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Cups
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Bottles
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Utensils
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Pacifiers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                High Chairs
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Feeding Bibs
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Baby Plates
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Sippy Cups
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Nursing Covers
              </DropdownMenuItem>
            </div>

            {/* Column 3 - Toys */}
            <div>
              <h3 className='font-semibold'>Toys</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Action Figures
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Building Blocks
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Board Games
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Stuffed Animals
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Outdoor Toys
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Puzzles
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Dolls
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Musical Instruments
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Arts & Crafts Supplies
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Educational Games
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Electronics Category */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Electronics</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            {/* Column 1 - Mobile Devices */}
            <div>
              <h3 className='font-semibold'>Mobile Devices</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Smartphones
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Tablets
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Smartwatches
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Fitness Trackers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Accessories
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Screen Protectors
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Phone Cases
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Chargers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Headphones
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Portable Speakers
              </DropdownMenuItem>
            </div>

            {/* Column 2 - Laptops */}
            <div>
              <h3 className='font-semibold'>Laptops</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Gaming Laptops
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Ultrabooks
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Chromebooks
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Laptop Bags
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                External Hard Drives
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Webcams
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Docking Stations
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Keyboards
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Mice
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Monitors
              </DropdownMenuItem>
            </div>

            {/* Column 3 - Audio/Video */}
            <div>
              <h3 className='font-semibold'>Audio/Video</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Televisions
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Streaming Devices
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Soundbars
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Home Theater Systems
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Projectors
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Cameras
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Camcorders
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Microphones
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                DJ Equipment
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Headphones
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Sports & Outdoors Category */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Sports & Outdoors</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            {/* Column 1 - Fitness Equipment */}
            <div>
              <h3 className='font-semibold'>Fitness Equipment</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Treadmills
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Dumbbells
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Resistance Bands
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Yoga Mats
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Exercise Balls
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Kettlebells
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Jump Ropes
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Rowing Machines
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Stationary Bikes
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Foam Rollers
              </DropdownMenuItem>
            </div>

            {/* Column 2 - Outdoor Gear */}
            <div>
              <h3 className='font-semibold'>Outdoor Gear</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Tents
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Backpacks
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Camping Gear
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Hiking Shoes
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Sleeping Bags
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Coolers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Flashlights
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Binoculars
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Fishing Gear
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Surfboards
              </DropdownMenuItem>
            </div>

            {/* Column 3 - Sports Equipment */}
            <div>
              <h3 className='font-semibold'>Sports Equipment</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Bicycles
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Skateboards
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Golf Clubs
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Tennis Rackets
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Soccer Balls
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Basketballs
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Baseballs
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Fitness Trackers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Protective Gear
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Sports Apparel
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Jewelry & Watches</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-2 gap-4 p-4'>
            <div>
              <h3 className='font-semibold'>Jewelry</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Necklaces
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Bracelets
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Earrings
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Rings
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Brooches
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Watches</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Smartwatches
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Luxury Watches
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Casual Watches
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Fitness Watches
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Beauty & Health</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            <div>
              <h3 className='font-semibold'>Beauty Products</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Skincare
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Makeup
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Fragrances
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Hair Care
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Nail Care
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Health Products</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Vitamins
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Supplements
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Fitness Gear
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Wellness Tools
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Personal Care</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Oral Care
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Body Care
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Foot Care
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                First Aid Supplies
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Luggage & Bags</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            <div>
              <h3 className='font-semibold'>Luggage</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Suitcases
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Travel Bags
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Garment Bags
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Backpacks</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Daypacks
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Laptop Backpacks
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Hiking Backpacks
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Handbags & Wallets</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Shoulder Bags
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Clutches
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Wallets
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Home & Garden</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            <div>
              <h3 className='font-semibold'>Furniture</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Sofas
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Tables
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Chairs
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Beds
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Garden Supplies</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Planters
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Garden Tools
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Outdoor Furniture
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Barbecues
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Home Decor</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Wall Art
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Rugs
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Curtains
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Bedding
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Toys & Games</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            <div>
              <h3 className='font-semibold'>Action Figures</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Superheroes
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Cartoon Characters
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Collectibles
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Board Games</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Family Games
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Strategy Games
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Card Games
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Educational Toys</h3>
              <DropdownMenuItem className='cursor-pointer'>
                STEM Toys
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Puzzle Games
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Art Supplies
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Pet Supplies</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            <div>
              <h3 className='font-semibold'>Dog Supplies</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Dog Food
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Toys
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Grooming Supplies
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Collars & Leashes
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Cat Supplies</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Cat Food
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Litter
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Scratching Posts
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Cat Trees
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Small Animal Supplies</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Cages
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Bedding
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Food
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Automotive</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            <div>
              <h3 className='font-semibold'>Car Parts</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Engines
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Brakes
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Suspension
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Lighting
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Car Accessories</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Seat Covers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Floor Mats
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                GPS & Navigation
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Dash Cams
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Motorcycle Gear</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Helmets
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Jackets
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Gloves
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Books</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            <div>
              <h3 className='font-semibold'>Fiction</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Novels
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Short Stories
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Fantasy
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Non-Fiction</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Biographies
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Self-Help
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                History
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Educational</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Textbooks
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Study Guides
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Workbooks
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Furniture</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            <div>
              <h3 className='font-semibold'>Living Room</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Sofas
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Coffee Tables
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Bookshelves
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Bedroom</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Beds
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Dressers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Nightstands
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Office</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Desks
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Chairs
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Filing Cabinets
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Furniture</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className='grid grid-cols-3 gap-4 p-4'>
            <div>
              <h3 className='font-semibold'>Living Room</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Sofas
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Coffee Tables
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Bookshelves
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Bedroom</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Beds
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Dressers
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Nightstands
              </DropdownMenuItem>
            </div>
            <div>
              <h3 className='font-semibold'>Office</h3>
              <DropdownMenuItem className='cursor-pointer'>
                Desks
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Chairs
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                Filing Cabinets
              </DropdownMenuItem>
            </div>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
