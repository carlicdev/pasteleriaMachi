import React from 'react';
import { Link } from 'react-router-dom';
import machiLogo from './../../images/machiLogo4.png'

const Navbar = () => {
    return (
        <div className='flex bg-teal-100 p-4 justify-center navbar sticky top-0'>
            <li className='mr-6 list-none ml-0 mr-10'>
                <Link to='/'>
                    <img src={machiLogo} alt='logo' className='w-16 h-10'/>
                </Link>
            </li>
            <li className='mr-6 list-none mt-2'>
                <Link to='/productos'>
                    <p className='text-yellow-600'>PRODUCTOS</p>
                </Link>
            </li>
            <li className='mr-6 list-none mt-2'>
                <Link to='/about'>
                    <p className='text-yellow-600'>NOSOTROS</p>
                </Link>
            </li>
            <li className='mr-6 list-none mt-2'>
                <Link to='/contacto'>
                    <p className='text-yellow-600'>CONTACTO</p>
                </Link>
            </li>         
        </div>
    )
}

export default Navbar;
