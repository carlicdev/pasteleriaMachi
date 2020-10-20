import React from 'react';
import { RiMoreLine, RiMore2Line } from 'react-icons/ri';

const Section = () => {
    return (
        <div className='container p-8 mx-auto my-8 bg-yellow-900 main-gradient shadow'>
            <div className='grid grid-cols-2'>
                <div className='col-span-1 p-5 text-justify'>
                    <div className='text-5xl font-semibold text-gray-200 uppercase'>Nosotros</div>
                    <RiMoreLine className='text-yellow-900' size={75}/>
                    <div className='pr-12'>
                        <div className='mt-1 text-gray-100'>Con más de 45 años de historia en el mercado, volvemos renovados, ofreciendo únicamente nuestros productos prime, mismos que representan
                        en cada bocado el compromiso que tenemos contigo de garantizarte un pastel de la mas alta cocina y los que han sido favoritos de nuestros clientes por mucho tiempo.</div>
                        <div className='text-gray-100 mt-3'>Estamos comprometidos con ofrecerte un sabor inigualable en cada pastel que llegue a tu mesa haciéndolo el invitado más importante.</div>
                        <div className='text-gray-100 mt-3'>Que lo disfrutes!</div>
                    </div>
                </div>
                <div className='col-span-1 cover-2'>
                    <RiMore2Line className='text-yellow-900 mr-0 ml-auto' size={75}/>
                </div>
            </div>
        </div>
    )
}

export default Section
