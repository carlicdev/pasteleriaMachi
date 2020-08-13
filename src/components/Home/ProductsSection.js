import React from 'react';
import { Link } from 'react-router-dom';


const ProductsSection = () => {
    return (
        <div className='container lg:px-10 mx-auto'>
            <div className='container mx-auto text-center my-6 py-5'>
            <p className='text-5xl text-yellow-600 font-bold'>NUESTROS <span className='text-yellow-700'>PRODUCTOS</span></p>
            <hr/>
            </div>
            <div className='grid md:grid-cols-4'>
                <div className='lg:col-span-2 col-span-4 my-5'>
                    <div className='flip-container'>
                        <div className='card'>
                            <div className='front'id='front-1'></div>
                            <div className='back' id='back-1'></div>
                        </div>
                    </div>
                </div>
                <div className='flex col-span-4 lg:col-span-2'>
                    <div className='lg:ml-5 my-5 self-center flex-1'>
                    <p className='text-4xl font-bold text-yellow-600 lg:text-left'>CHEESECAKE</p>
                    <p className='text-2xl  text-yellow-800 lg:text-left'>Aqui damos una pequeña descripción del pastel y la calidad de sus ingredietes.</p>
                    <button className='text-yellow-600 text-2xl px-5 py-2 mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white'>
                        <Link to='/productos'>
                            HACER PEDIDO
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-4'>
                <div className='lg:col-span-2 col-span-4 my-5'>
                    <div className='flip-container'>
                        <div className='card'>
                            <div className='front'id='front-2'></div>
                            <div className='back' id='back-2'></div>
                        </div>
                    </div>
                </div>
                <div className='flex col-span-4 lg:col-span-2 lg:order-first'>
                    <div className='lg:ml-5 my-5 self-center flex-1'>
                    <p className='text-4xl font-bold text-yellow-600 lg:text-left'>PASTEL DE CONEJITO</p>
                    <p className='text-2xl  text-yellow-800 lg:text-left'>Aqui damos una pequeña descripción del pastel y la calidad de sus ingredietes.</p>
                    <button className='text-yellow-600 text-2xl px-5 py-2 mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white'>
                        <Link to='/productos'>
                            HACER PEDIDO
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-4'>
                <div className='lg:col-span-2 col-span-4 my-5'>
                    <div className='flip-container'>
                        <div className='card'>
                            <div className='front'id='front-3'></div>
                            <div className='back' id='back-3'></div>
                        </div>
                    </div>
                </div>
                <div className='flex col-span-4 lg:col-span-2'>
                    <div className='lg:ml-5 my-5 self-center flex-1'>
                    <p className='text-4xl font-bold text-yellow-600 lg:text-left'>TARTA DE ALMENDRA</p>
                    <p className='text-2xl  text-yellow-800 lg:text-left'>Aqui damos una pequeña descripción del pastel y la calidad de sus ingredietes.</p>
                    <button className='text-yellow-600 text-2xl px-5 py-2 mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white'>
                        <Link to='/productos'>
                            HACER PEDIDO
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-4'>
                <div className='lg:col-span-2 col-span-4 my-5'>
                    <div className='flip-container'>
                        <div className='card'>
                            <div className='front'id='front-4'></div>
                            <div className='back' id='back-4'></div>
                        </div>
                    </div>
                </div>
                <div className='flex col-span-4 lg:col-span-2 lg:order-first'>
                    <div className='lg:ml-5 my-5 self-center flex-1'>
                    <p className='text-4xl font-bold text-yellow-600 lg:text-left'>PASTEL DE ZANAHORIA</p>
                    <p className='text-2xl  text-yellow-800 lg:text-left'>Aqui damos una pequeña descripción del pastel y la calidad de sus ingredietes.</p>
                    <button className='text-yellow-600 text-2xl px-5 py-2 mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white'>
                        <Link to='/productos'>
                            HACER PEDIDO
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-4'>
                <div className='lg:col-span-2 col-span-4 my-5'>
                    <div className='flip-container'>
                        <div className='card'>
                            <div className='front'id='front-5'></div>
                            <div className='back' id='back-5'></div>
                        </div>
                    </div>
                </div>
                <div className='flex col-span-4 lg:col-span-2'>
                    <div className='lg:ml-5 my-5 self-center flex-1'>
                    <p className='text-4xl font-bold text-yellow-600 lg:text-left'>PASTEL DE CHOCOLATE FUDGE</p>
                    <p className='text-2xl  text-yellow-800 lg:text-left'>Aqui damos una pequeña descripción del pastel y la calidad de sus ingredietes.</p>
                    <button className='text-yellow-600 text-2xl px-5 py-2 mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white'>
                        <Link to='/productos'>
                            HACER PEDIDO
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-4'>
                <div className='lg:col-span-2 col-span-4 my-5'>
                    <div className='flip-container'>
                        <div className='card'>
                            <div className='front'id='front-6'></div>
                            <div className='back' id='back-6'></div>
                        </div>
                    </div>
                </div>
                <div className='flex col-span-4 lg:col-span-2 lg:order-first'>
                    <div className='lg:ml-5 my-5 self-center flex-1'>
                    <p className='text-4xl font-bold text-yellow-600 lg:text-left'>PASTEL MIL HOJAS</p>
                    <p className='text-2xl  text-yellow-800 lg:text-left'>Aqui damos una pequeña descripción del pastel y la calidad de sus ingredietes.</p>
                    <button className='text-yellow-600 text-2xl px-5 py-2 mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white'>
                        <Link to='/productos'>
                            HACER PEDIDO
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsSection

