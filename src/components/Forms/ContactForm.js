import React from 'react';
import img1 from '../../images/pastelFudge2.jpg';
import logo from '../../images/machiLogoM.jpg'

const ContactForm = () => {
    return (
        <div className='bg-gray-100 border border-gray-400 rounded lg:my-24 lg:mx-10 lg:shadow-xl xl:max-w-5xl xl:mx-auto'>
            <div className='flex'>
                <div className='lg:max-w-lg lg:w-1/2 mx-auto'>
                    <img src={img1} alt='img' className='lg:hidden'/>
                    <div className='p-10 text-left'>
                        <img src={logo} alt='Machi Logo' className='h-24 mx-auto'/>
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
                            <div className='flex'>
                            <button className='rounded shadow-md ml-auto mr-0 text-yellow-600 text-xl px-5 pt-1  border border-yellow-600 hover:bg-yellow-600 hover:text-white'>
                                ENVIAR
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='hidden lg:block lg:w-1/2 lg:relative lg:order-first'>
                    <img src={img1} alt='img' className='absolute inset-0 h-full w-full object-cover object-center'/>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
