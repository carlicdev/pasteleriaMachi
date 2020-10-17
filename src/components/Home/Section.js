import React from 'react';

const Section = () => {
    return (
        <div className='container p-5 mx-auto my-8 bg-white shadow'>
            <p className='text-5xl text-yellow-800 font-bold'>NOSOTROS</p>
            < hr/>
            <div className='my-5 mx-auto text-justify'>
                <p className='text-xl text-yellow-800'>Con más de 45 años de historia en el mercado, volvemos renovados, ofreciendo únicamente nuestros productos prime, mismos que representan
                    en cada bocado el compromiso que tenemos contigo de garantizarte un pastel de la mas alta cocina y los que han sido favoritos de nuestros clientes por mucho tiempo.
                </p>
            </div>
            <div className='my-5 mx-auto text-justify'>
            <p className='text-xl text-yellow-800'>Estamos comprometidos con ofrecerte un sabor inigualable en cada pastel que llegue a tu mesa haciéndolo el invitado más importante.</p>
            </div>
            <div className='my-5 mx-auto text-justify'>
            <p className='text-xl text-yellow-800'>Que lo disfrutes!</p>
            </div>
        </div>
    )
}

export default Section
