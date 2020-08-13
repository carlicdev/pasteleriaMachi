import React from 'react';
import Section from './Section';
import ProductsSection from './ProductsSection';
import machiLogo from './../../images/machiLogo2.png';

const Home = () => {
    return (
        <div>
            <div className='container-fluid cover flex'>
                <div className='container'>
                    <img src={machiLogo} alt='logo' />
                </div>
            </div>
            <div className='parallax flex items-center'>
                <div className='container flex-1 mx-auto p-2'>
                    <p className='text-6xl text-teal-100 font-bold'>
                        Empecemos por el postre!
                    </p>
                </div>
            </div>
            <Section />
            <div className='parallax2'></div>
            <ProductsSection />
        </div>
    )
}

export default Home
