import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const BannerSection = () => {
    return (
        <div>
              <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
        {/* Text Content */}
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <div>
              <p className='badge'>On Sale!</p>
            </div>
            <h4 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            "Welcome to our cafe – <br className='hidden md:block' /> Where Tradition Meets Innovation in {' '}
              <span className='inline-block text-blue-400'>Chinese Culinary Delights!"</span>
            </h4>
            <p className='text-base text-gray-700 md:text-lg'>
            Ladies and gentlemen, a warm welcome to Cafe Chinse! Tonight, we invite you to embark on a culinary journey where passion meets plate. Our chefs have crafted an exquisite menu, and our team is dedicated to ensuring your experience is nothing short of exceptional. Thank you for choosing us – indulge, savor, and enjoy the moments we create together. Welcome to a feast for the senses!
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            <div to='/' className='btn md:w-auto md:mr-4'>
              <div className='inline-flex items-center justify-center w-full h-full'>
                <p className='mr-3'>Visit Our Cafe</p>
                {/* <ShoppingCartIcon className='w-5 text-gray-100' /> */}
              </div>
            </div>
            <div
              
              className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
            >
              Learn More
            </div>
          </div>
        </div>
        </div>

        </div>
    );
};

export default BannerSection;