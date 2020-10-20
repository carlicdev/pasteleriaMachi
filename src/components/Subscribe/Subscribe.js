import React, { useState } from 'react'

const Subscribe = () => {
    const [email, setEmail] = useState('');
    return (
        <div className='max-w-sm p-5 text-center mx-auto shadow'>
            <div className='text-yellow-900 mt-3 text-sm text-justify'>
                Suscribete a nuestro boletín y obten cupones de descuento, conoce nuevos productos y enterate de las ultimas promociones
            </div>
            <form>
                <input 
                    type='text'
                    placeholder='Correo Electrónico'
                    className='w-full mt-3 rounded border border-yellow-800 text-gray-800 focus:outline-none focus:shadow-outline py-1 px-2 bg-gray-100'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className='bg-orange-800 text-gray-100 rounded w-full py-2 mt-3 font-semibold shadow'>SUSCRIBIRSE</button>
            </form>
        </div>
    )
}

export default Subscribe
