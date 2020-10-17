import React from 'react';
import Section from './Section';
import Cover from './Cover';
import ProductCard from '../Products/ProductCard';
import ProductsMobile from '../Products/ProductsMobile';

const Home = () => {
    return (
        <div>
            <Cover />
            <div className='container mx-auto'>
                <Section />
                <div className='hidden lg:block'>
                    <ProductCard />
                </div>
                <div className='lg:hidden'>
                    <ProductsMobile />
                </div>
            </div>
        </div>
    )
}

export default Home
