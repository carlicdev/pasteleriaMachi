import React, { useEffect, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import machiLogo from './../../images/machiLogo3.png';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowModal(true), 1000)
    }, []);

    return (
        <div>
            {
                showModal && (
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal'>
                        <div className='relative max-w-md lg:max-w-lg w-auto mx-auto bg-white'>
                            <div className='w-full flex'>
                                <button 
                                className='mt-1 text-gray-500 focus:outline-none ml-auto mr-2'
                                onClick={() => setShowModal(false)}
                                >
                                    <RiCloseLine size={35}/>
                                </button>
                            </div>
                                <div className='p-8 mb-2'>
                                    <div className='text-xl text-yellow-900 font-medium uppercase text-justify'>suscribete a nuestro boletín</div>
                                    <div className='text-gray-700 text-justify mt-2'>Recibe noticias sobre nuestros ultimos productos, ofertas especiales y mucho mas directamente en tu correo.</div>
                                    <div className='mt-5 flex'>
                                        <form className='w-full'>
                                            <div className='flex w-full border border-yellow-800'>
                                                <input 
                                                className='w-full ml-0 mr-auto focus:outline-none py-1 px-2 inline'
                                                placeholder='Correo Electrónico'
                                                type='text'
                                                />
                                                <button className='mr-0 ml-auto font-medium bg-yellow-800 hover:bg-yellow-900 px-2 py-2 focus:outline-none text-gray-100'>SUSCRIBIRME</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Modal
