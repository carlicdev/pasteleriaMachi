import React from 'react';
import { FaPinterest, FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa';
import Subscribe from '../Subscribe/Subscribe';

const Footer = () => {
    return (
        <div className='bg-white border border-top-gray-400 mt-5 p-5'>
            <div className='flex justify-center'>
                <FaPinterest className='text-yellow-800 mx-2'  size={35}/>
                <FaTwitter className='text-yellow-800 mx-2' size={35}/>
                <FaFacebook className='text-yellow-800 mx-2' size={35}/>
                <FaInstagram className='text-yellow-800 mx-2' size={35}/>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1'>
                <div className='col-span-1 text-justify p-5'>
                    <div className='font-semibold text-yellow-800'>Productos</div>
                    <ul>
                        <li className='text-yellow-900 text-sm '>Tarta de Almendras</li>
                        <li className='text-yellow-900 text-sm '>Pastel Mil Hojas</li>
                        <li className='text-yellow-900 text-sm '>Pastel de Zanahoria</li>
                        <li className='text-yellow-900 text-sm '>Crepe Cake de Conejito Turín</li>
                        <li className='text-yellow-900 text-sm '>Fudge de Chocolate</li>
                        <li className='text-yellow-900 text-sm '>Pastel de Queso Tipo Español</li>
                    </ul>
                </div>
                <div className='col-span-1 text-justify p-5'>
                    <div className='font-semibold text-yellow-800'>Mapa del Sitio</div>
                    <ul>
                        <li className='text-yellow-900 text-sm '>Home</li>
                        <li className='text-yellow-900 text-sm '>Productos</li>
                        <li className='text-yellow-900 text-sm '>Pedidos</li>
                        <li className='text-yellow-900 text-sm '>Testimonios</li>
                        <li className='text-yellow-900 text-sm '>Contacto</li>
                    </ul>
                </div>
                <div className='col-span-1 text-justify p-5'>
                <div className='font-semibold text-yellow-800'>Redes</div>
                    <ul>
                        <li className='text-yellow-900 text-sm '>Pinterest</li>
                        <li className='text-yellow-900 text-sm '>Facebook</li>
                        <li className='text-yellow-900 text-sm '>Twitter</li>
                        <li className='text-yellow-900 text-sm '>Instagram</li>
                        <li className='text-yellow-900 text-sm '>WhatsApp</li>
                    </ul>
                </div>
                <div className='col-span-1'>
                    <Subscribe />
                </div>
            </div>
        </div>
    )
}

export default Footer
