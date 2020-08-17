import React from 'react';
import Section from './Section';
import ProductsSection from './ProductsSection';
import machiLogo from './../../images/machiLogo5.png';

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center bg-gray-100 min-h-screen min-w-full'>
                <div className=''>
                    <img src={machiLogo} alt='logo' />
                </div>
            </div>
            <div className='hidden lg:block parallax min-h-screen flex items-center p-6'>
                <div className='container flex-1 mx-auto p-2'>
                    <p className='text-6xl text-teal-100 font-bold'>
                        Empecemos por el postre!
                    </p>
                </div>
            </div>
            <Section />
            <div className='hidden lg:block parallax2 min-h-screen'></div>
            <ProductsSection />
        </div>
    )
}

export default Home
