import React from 'react';
import img1 from '../../images/pastelFudge2.jpg';
import logo from '../../images/machiLogo3.png'

const ContactForm = () => {
    return (
        <div className='bg-white  lg:my-24 lg:mx-10 lg:shadow xl:max-w-5xl xl:mx-auto'>
            <div className='flex'>
                <div className='lg:max-w-lg lg:w-1/2 mx-auto'>
                    <img src={img1} alt='img' className='lg:hidden'/>
                    <div className='p-10 text-left'>
                        <img src={logo} alt='Machi Logo' className='h-12 mx-auto mb-5'/>
                        <form>
                            <div className='mb-4'>
                                <label className='block text-yellow-600 text-sm font-bold mb-2' htmlFor='name'>NOMBRE</label>
                                <input className='w-full border border-yellow-600 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-yellow-600 text-sm font-bold mb-2' htmlFor='name'>CORREO ELECTRÓNICO</label>
                                <input className='w-full border border-yellow-600 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-yellow-600 text-sm font-bold mb-2' htmlFor='name'>MENSAJE</label>
                                <textarea rows='5' className='w-full border border-yellow-600 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                            </div>
                            <div className='flex'>
                            <button className='rounded shadow text-gray-100 ml-auto mr-0 font-semibold px-5 py-2  bg-yellow-800 hover:bg-yellow-900 '>
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
