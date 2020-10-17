import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className='bg-yellow-900 p-5'>
                <div className='text-4xl uppercase text-gray-100 font-semibold text-left ml-8'>
                    Nuestros Clientes Opinan...
                </div>
            <div className='flex flex-wrap justify-around'>
                <div className='max-w-xs bg-white shadow p-5 m-5'>
                    <FaQuoteLeft size={35} className='text-yellow-700 mb-3'/>
                    <div className='text-md text-yellow-800 text-justify'>
                        Uno de los mejores pasteles que he probado. Recomendado 100%.
                    </div>
                    <div className='text-md text-yellow-900 italic'>
                        -Una Señora
                    </div>
                    <FaQuoteRight size={35} className='text-yellow-700 mr-0 ml-auto'/>
                </div>
                <div className='max-w-xs bg-white shadow p-5 m-5'>
                    <FaQuoteLeft size={35} className='text-yellow-700 mb-3'/>
                    <div className='text-md text-yellow-800 text-justify'>
                        Uno de los mejores pasteles que he probado. Recomendado 100%.
                    </div>
                    <div className='text-md text-yellow-900 italic'>
                        -Una Señora
                    </div>
                    <FaQuoteRight size={35} className='text-yellow-700 mr-0 ml-auto'/>
                </div>
                <div className='max-w-xs bg-white shadow p-5 m-5'>
                    <FaQuoteLeft size={35} className='text-yellow-700 mb-3'/>
                    <div className='text-md text-yellow-800 text-justify'>
                        Uno de los mejores pasteles que he probado. Recomendado 100%.
                    </div>
                    <div className='text-md text-yellow-900 italic'>
                        -Una Señora
                    </div>
                    <FaQuoteRight size={35} className='text-yellow-700 mr-0 ml-auto'/>
                </div>
                <div className='max-w-xs bg-white shadow p-5 m-5'>
                    <FaQuoteLeft size={35} className='text-yellow-700 mb-3'/>
                    <div className='text-md text-yellow-800 text-justify'>
                        Uno de los mejores pasteles que he probado. Recomendado 100%.
                    </div>
                    <div className='text-md text-yellow-900 italic'>
                        -Una Señora
                    </div>
                    <FaQuoteRight size={35} className='text-yellow-700 mr-0 ml-auto'/>
                </div>
                <div className='max-w-xs bg-white shadow p-5 m-5'>
                    <FaQuoteLeft size={35} className='text-yellow-700 mb-3'/>
                    <div className='text-md text-yellow-800 text-justify'>
                        Uno de los mejores pasteles que he probado. Recomendado 100%.
                    </div>
                    <div className='text-md text-yellow-900 italic'>
                        -Una Señora
                    </div>
                    <FaQuoteRight size={35} className='text-yellow-700 mr-0 ml-auto'/>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
