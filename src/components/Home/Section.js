import React from 'react';
import { RiCake3Line, RiCake2Line } from 'react-icons/ri';
import { FaCookie } from 'react-icons/fa';

const Section = () => {
    return (
        <div className='container p-5 mx-auto my-8'>
            <p className='text-5xl text-yellow-600 font-bold'>NOSOTROS</p>
            < hr/>
            <div className='my-5 mx-auto'>
                <p className='text-2xl text-yellow-800'>Con más de 45 años de historia en el mercado, volvemos renovados, ofreciendo únicamente nuestros productos prime, mismos que representan
                    en cada bocado el compromiso que tenemos contigo de garantizarte un pastel de la mas alta cocina y los que han sido favoritos de nuestros clientes por mucho tiempo.
                </p>
            </div>
            <div className='my-5 mx-auto'>
            <p className='text-2xl text-yellow-800'>Estamos comprometidos con ofrecerte un sabor inigualable en cada pastel que llegue a tu mesa haciéndolo el invitado más importante.</p>
            </div>
            <div className='my-5 mx-auto'>
            <p className='text-2xl text-yellow-800'>Que lo disfrutes!</p>
            </div>
        </div>
    )
}

export default Section
