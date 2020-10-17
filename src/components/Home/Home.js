import React from 'react';
import Section from './Section';
import Cover from './Cover';
import ProductCard from '../Products/ProductCard';
import ProductsMobile from '../Products/ProductsMobile';
import Testimonial from '../Testimonial/Testimonial';

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
                <Testimonial />
            </div>
        </div>
    )
}

export default Home
