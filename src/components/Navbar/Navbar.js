import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import machiLogo from './../../images/machiLogo4.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <div className='bg-white shadow sticky top-0'>
            <div className='container mx-auto'>
            <div className='flex items-center justify-between px-5 py-2'>
                <div>
                    <Link to='/'>
                        <img src={machiLogo} alt='logo' className='h-10 lg:h-16'/>
                    </Link>
                </div>
                <div className='hidden lg:block'>
                    <ul>
                        <li className='inline mx-5 text-xl text-gray-100 font-semibold bg-yellow-800 p-5 rounded'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='inline mx-5 text-xl text-yellow-600 font-semibold p-5 rounded'>
                            <Link to='/productos'>Productos</Link>
                        </li>
                        <li className='inline mx-5 text-xl text-yellow-600 font-semibold p-5 rounded'>
                            <Link to='/pedidos'>Pedidos</Link>
                        </li>
                        <li className='inline ml-5 mr-32 text-xl text-yellow-600 font-semibold p-5 rounded'>
                            <Link to='/contacto'>Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className='lg:hidden'>
                    <button onClick={() => setIsOpen(!isOpen) } type='button' className='text-yellow-600 text-3xl hover:text-yellow-500 focus:outline-none focus:text-yellow-500'>
                        {
                            isOpen ? <AiOutlineCloseCircle/> : <GiHamburgerMenu />
                        }
                    </button>
                </div>
            </div>
            </div>
            {
                isOpen && (
                <div className='px-5  py-3 bg-teal-200'>
                    <Link to='/productos' className='block py-1 text-yellow-600 font-semibold rounded hover:bg-teal-300' onClick={() => setIsOpen(!isOpen)} >PRODUCTOS</Link>
                    <Link to='/nosotros' className='block py-1 text-yellow-600 font-semibold rounded hover:bg-teal-300'onClick={() => setIsOpen(!isOpen)} >NOSOTROS</Link>
                    <Link to='/contacto' className='block py-1 text-yellow-600 font-semibold rounded hover:bg-teal-300'onClick={() => setIsOpen(!isOpen)} >CONTACTO</Link>
                </div>
                )
            }
        </div>
    )
}

export default Navbar;
