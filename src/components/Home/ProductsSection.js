import React from 'react';
import img1 from '../../images/cheesecake3.jpg';
import img2 from '../../images/pastelConejito.jpg';

const ProductsSection = () => {
    return (
        <div className='bg-gray-100'>
            <div className='flex lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2'>
                    <img className='h-auto w-full object-cover object-center lg:hidden' src={img1} alt='Pastel de Conejito' />
                    <h5 className='mt-6 text-3xl font-bold text-yellow-500' >CHEESECAKE</h5>
                    <p className='mt-2 text-xl text-yellow-800'>Aqui decimos algo sobre este pastel en particular. Ingredientes y/o metodo de preparación.</p>
                    <button className='mt-2 px-4 pt-1 text-base text-yellow-500 border border-yellow-500 focus:outline-none focus:shadow-outline rounded'>
                        COMPRAR
                    </button>
                </div>
                <div className='hidden lg:block lg:w-1/2  lg:relative lg:order-first'>
                    <img className='absolute z-40 hover:z-1 inset-0 h-full w-full object-cover object-center' src={img1} alt='Cheesecake' />
                    <img className='absolute  z-10 inset-0 h-full w-full object-cover object-center' src={img2} alt='Pastel de Conejito' />
                </div>
            </div>
            <div className='flex lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2'>
                    <img className='h-auto w-full object-cover object-center lg:hidden' src={img2} alt='Cheesecake' />
                    <h5 className='mt-6 text-3xl font-bold text-yellow-500' >PASTEL DE CONEJITO</h5>
                    <p className='mt-2 text-xl text-yellow-800'>Aqui decimos algo sobre este pastel en particular. Ingredientes y/o metodo de preparación.</p>
                    <button className='mt-2 px-4 pt-1 text-base text-yellow-500 lg:hover:text-4xl border border-yellow-500 focus:outline-none focus:shadow-otline rounded'>
                        COMPRAR
                    </button>
                </div>
                <div className='hidden lg:inline-block lg:w-1/2  lg:relative'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center' src={img2} alt='Pastel de Conejito' />
                </div>
            </div>
        </div>
    )
}

export default ProductsSection

