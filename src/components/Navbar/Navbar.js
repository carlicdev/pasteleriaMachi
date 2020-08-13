import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import machiLogo from './../../images/machiLogo4.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-teal-100'>
            <div className='flex items-center justify-between px-5 py-4'>
                <div>
                    <Link to='/'>
                        <img src={machiLogo} alt='logo' className='h-10'/>
                    </Link>
                </div>
                <div>
                    <button onClick={() => setIsOpen(isOpen ? false : true) } type='button' className='text-yellow-600 text-3xl hover:text-yellow-500 focus:outline-none focus:text-yellow-500'>
                        {
                            isOpen ? <AiOutlineCloseCircle/> : <GiHamburgerMenu />
                        }
                    </button>
                </div>
            </div>
            {
                isOpen && (
                <div className='px-5 py-3 bg-teal-200'>
                    <a href='/productos' className='block py-1 text-yellow-600 font-semibold rounded hover:bg-teal-300'>PRODUCTOS</a>
                    <a href='/productos' className='block py-1 text-yellow-600 font-semibold rounded hover:bg-teal-300'>NOSOTROS</a>
                    <a href='/productos' className='block py-1 text-yellow-600 font-semibold rounded hover:bg-teal-300'>CONTACTO</a>
                </div>
                )
            }
        </div>
    )
}

export default Navbar;
