import React from 'react';
import img1 from '../../images/cheesecake3.jpg';
import img2 from '../../images/pastelConejito.jpg';
import img3 from '../../images/pastelZanahoria4.jpg';
import img4 from '../../images/pastelFudge2.jpg';
import img5 from '../../images/tartaAlmendra.jpg';
import img6 from '../../images/pastelMilhojas3.jpg';

const ProductsSection = () => {
    return (
        <div className='bg-gray-100'>
            <div className='mt-10'>
                <h2 className='text-5xl font-bold text-yellow-600'>NUESTROS <span className='text-yellow-800'>PRODUCTOS</span></h2>
                <hr/>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2'>
                    <img className='h-auto w-full object-cover object-center lg:hidden' src={img1} alt='Pastel de Conejito' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >CHEESECAKE</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Aqui decimos algo sobre este pastel en particular. Ingredientes y/o metodo de preparación.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:block lg:w-1/2  lg:relative lg:order-first'>
                    <img className='absolute  inset-0 h-full w-full object-cover object-center' src={img1} alt='Cheesecake' />
                </div>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2'>
                    <img className='h-auto w-full object-cover object-center lg:hidden' src={img2} alt='Cheesecake' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >PASTEL DE CONEJITO</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Aqui decimos algo sobre este pastel en particular. Ingredientes y/o metodo de preparación.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:inline-block lg:w-1/2  lg:relative'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center' src={img2} alt='Pastel de Conejito' />
                </div>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2'>
                    <img className='h-auto w-full object-cover object-center lg:hidden' src={img3} alt='Pastel de Conejito' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >PASTEL DE ZANAHORIA</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Aqui decimos algo sobre este pastel en particular. Ingredientes y/o metodo de preparación.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:block lg:w-1/2  lg:relative lg:order-first'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center' src={img3} alt='Cheesecake' />
                </div>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2'>
                    <img className='h-auto w-full object-cover object-center lg:hidden' src={img4} alt='Cheesecake' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >PASTEL DE CHOCOLATE FUDGE</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Aqui decimos algo sobre este pastel en particular. Ingredientes y/o metodo de preparación.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:inline-block lg:w-1/2  lg:relative'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center' src={img4} alt='Pastel de Conejito' />
                </div>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2'>
                    <img className='h-auto w-full object-cover object-center lg:hidden' src={img5} alt='Pastel de Conejito' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >TARTA DE ALMENDRA</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Aqui decimos algo sobre este pastel en particular. Ingredientes y/o metodo de preparación.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:block lg:w-1/2  lg:relative lg:order-first'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center' src={img5} alt='Cheesecake' />
                </div>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2'>
                    <img className='h-auto w-full object-cover object-center lg:hidden' src={img6} alt='Cheesecake' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >PASTEL MIL HOJAS</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Aqui decimos algo sobre este pastel en particular. Ingredientes y/o metodo de preparación.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:inline-block lg:w-1/2  lg:relative'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center' src={img6} alt='Pastel de Conejito' />
                </div>
            </div>
        </div>
    )
}

export default ProductsSection

