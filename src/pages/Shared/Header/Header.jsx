import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {BoltIcon, Bars3BottomLeftIcon, XMarkIcon,  } from '@heroicons/react/24/solid'

const Header = () => {
   
            

return (
    <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

     <div className=' relative flex items-center justify-between'>
        {/* logo section */}

        <Link to='/' className='inline-flex items-center'>
            <img className='h-12 w-12 rounded-full'  src="https://i.ibb.co/2PnTt4p/photo-1583394293214-28ded15ee548-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
             {/* <BoltIcon className='h-7 w-7 text-blue-500'></BoltIcon> */}
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'> <Link to='/' >Cafe Chinse Restaurant</Link>  </span>
        </Link>

        {/* NavLink Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/books'
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'active' : 'default')}
        >
          About us
        </NavLink>
      </li>
    </ul>

   {/* Mobile Navbar Section */}

   

{/* Mobile Section End */}

    </div>

    </div>
    
);
        
    
};

export default Header;