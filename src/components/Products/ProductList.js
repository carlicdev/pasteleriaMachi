import React from 'react';
import ProductCard from './ProductCard';
import ProductsMobile from './ProductsMobile';

const ProductList = () => {
    return (
        <div className='container mx-auto'>
            <div className='hidden lg:block'>
                <ProductCard />
            </div>
            <div className='lg:hidden'>
                <ProductsMobile />
            </div>
        </div>
    )
}

export default ProductList;
