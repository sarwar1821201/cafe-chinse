
import { Link, NavLink } from 'react-router-dom';
import {BoltIcon, Bars3BottomLeftIcon, XMarkIcon,  } from '@heroicons/react/24/solid'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
   
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const {user, logOut } =useContext(AuthContext)

    const handleLogout= () =>{

      logOut()
      .then( (result) => {} )
      .catch( error => {
         console.log (error)
      } )

    }

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
          to='/blog'
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
   {
      user ? (  <div className="flex gap-2 items-center ">
      <img
        className="h-12 w-12 lg:h-20 lg:w-20 rounded-full "
        src={user.photoURL ? user.photoURL : ""}
       
      />
       <button onClick={handleLogout}  className="btn bg-yellow-700" >Logout</button>
      
    </div> ) :  <Link to='/login' > <button className="btn bg-yellow-700" >Login</button> </Link>  
  }
      
  

      <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomLeftIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      {/* <BoltIcon className='h-6 w-6 text-blue-500' /> */}
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                       Cafe Chinse Restaurant
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>

{/* Mobile Section End */}

    </div>

    

    </div>
    
);
        
    
};

export default Header;