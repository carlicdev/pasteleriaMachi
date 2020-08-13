import React from 'react';
import img1 from '../../images/pastelFudge2.jpg'

const ContactForm = () => {
    return (
        <div className='md:wd-1/2 lg:w-1/3 mx-auto border border-gray-400 shadow-md'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='relative w-full'>
                    <img src={img1} alt='img' className='absolut inset-0'/>
                </div>
                <div className='container p-5'>
                    <form>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Nombre</label>
                            <input className='w-full border border-yellow-800 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Correo Electrónico</label>
                            <input className='w-full border border-yellow-800 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Mensaje</label>
                            <textarea rows='5' className='w-full border border-yellow-800 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                        </div>
                        <button className='text-yellow-600 text-xl px-5 pt-1  border border-yellow-600 hover:bg-yellow-600 hover:text-white'>
                            ENVIAR
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
