import React from 'react'
import almendra from '../../images/tartaAlmendra.jpg';
import milhojas from '../../images/pastelMilhojas2.jpg';
import zanahoria from '../../images/pastelZanahoria3.jpg';
import conejito from '../../images/pastelConejito2.jpg';
import fudge from '../../images/pastelFudge2.jpg';
import cheesecake from '../../images/cheesecake.jpg';

const ProductCard = () => {
    return (
        <>
        <div className='grid grid-cols-2 bg-white shadow my-3'>
            <div className='col-span-1'>
                <img src={almendra} alt='' className='object-cover h-128 w-full' />
            </div>
            <div className='col-span-1 p-5'>
                <div className='text-right text-2xl font-semibold'>01</div>
                <h5 className='mt-5 text-4xl font-bold text-yellow-900' >TARTA DE ALMENDRA</h5>
                <div className='flex flex-wrap content-center'>
                    <div className='p-12 text-left'>
                        <p className='mt-2 uppercase font-medium text-yellow-900 text-justify mx-1'>Para los amantes de la almendra y los celíacos. Nuestra Tarta de <span className='font-semibold'>Almendras Tostadas</span> te dejara sin habla. Las <span className='font-semibold'>notas envinadas</span> únicas que deja la almendra tostada consumiran tu paladar.</p>
                        <p className='mt-2 uppercase text-yellow-900 text-justify mx-1'>Al ser <span className='font-semibold'>sin harina</span> es perfecto para una fiesta de Pesaj o personas intolerantes al glúten.</p>
                        <button className='rounded bg-yellow-900 text-gray-100 font-semibold  px-5 py-2 px-4  mt-5 focus:outline-none mr-0 ml-auto'>
                                HACER PEDIDO
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 bg-white shadow my-3'>
            <div className='col-span-1 p-5'>
                <div className='text-left text-2xl font-bold'>02</div>
                <h5 className='mt-2 text-4xl font-bold text-yellow-900' >PASTEL MIL HOJAS</h5>
                <div className='flex flex-wrap content-center'>
                    <div className='p-12 text-left'>
                        <p className='mt-2 uppercase text-yellow-900 text-justify mx-1'>No has probado un pastel Mil Hojas como el nuestro. Cada rebanada te ofrece una <span className='font-semibold'>mezcla perfecta</span> de lo crujiente y lo suave con una combinación de sabores de <span className='font-semibold'>vainilla y crema</span> que te encantarán y su <span className='font-semibold'>cubierta glaseada</span> con un toque de fudge de chocolate.</p>
                        <p className='mt-2 uppercase text-yellow-900 text-justify mx-1'>Sin duda querras empezar por el postre.</p>
                        <button className='rounded bg-yellow-900 text-gray-100 font-semibold  px-5 py-2 px-4  mt-5 focus:outline-none'>
                                HACER PEDIDO
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-span-1'>
                <img src={milhojas} alt='' className='object-cover h-128 w-full' />
            </div>
        </div>
        <div className='grid grid-cols-2 bg-white shadow my-3'>
            <div className='col-span-1'>
                <img src={zanahoria} alt='' className='object-cover h-128 w-full' />
            </div>
            <div className='col-span-1 p-5'>
                <div className='text-right text-2xl font-bold'>03</div>
                <h5 className='mt-2 text-4xl font-bold text-yellow-900' >PASTEL DE ZANAHORIA</h5>
                <div className='flex flex-wrap content-center'>
                    <div className='p-12 text-left'>
                        <p className='mt-2 uppercase text-yellow-900 text-justify mx-1'>Si eres de los amantes del pastel de zanahoria no te puedes perder el nuestro. Esta <span className='font-semibold'>receta secreta</span> ha sido favorita de muchos durante años.</p>
                        <p className='mt-2 uppercase text-yellow-900 text-justify mx-1'>Nuestro <span className='font-semibold'>frosting y relleno cremosito</span> mezclado con el pan con notas de <span className='font-semibold'>zanahoria, canela y nuez moscada</span> lo haran el favorito de tus invitados.</p>
                        <button className='rounded bg-yellow-900 text-gray-100 font-semibold  px-5 py-2 px-4  mt-5 focus:outline-none mr-0 ml-auto'>
                                HACER PEDIDO
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 bg-white shadow my-3'>
            <div className='col-span-1 p-5'>
                <div className='text-left text-2xl font-bold'>04</div>
                <h5 className='mt-2 text-4xl font-bold text-yellow-900' >CRÊPE CAKE DE CONEJITO TURÍN</h5>
                <div className='flex flex-wrap content-center'>
                    <div className='p-12 text-left'>
                        <p className='mt-2 uppercase text-yellow-900 text-justify mx-1'>Cada <span className='font-semibold'>crepa hecha al momento</span>, cubierta de <span className='font-semibold'>conejito turin</span>, cubierto de crepa, cubierto de conejito turín... hasta formar un delicioso crêpe cake en donde cada ingrediente se complementa e integra perfecto para lograr un producto <span className='font-semibold'>esponjosito</span> y especialmente <span className='font-semibold'>cremoso</span> en donde el chocolate es el rey.</p>
                        <button className='rounded bg-yellow-900 text-gray-100 font-semibold  px-5 py-2 px-4  mt-5 focus:outline-none'>
                                HACER PEDIDO
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-span-1'>
                <img src={conejito} alt='' className='object-cover h-128 w-full' />
            </div>
        </div>
        <div className='grid grid-cols-2 bg-white shadow my-3'>
            <div className='col-span-1'>
                <img src={fudge} alt='' className='object-cover h-128 w-full' />
            </div>
            <div className='col-span-1 p-5'>
                <div className='text-right text-2xl font-extrabold'>05</div>
                <h5 className='mt-2 text-4xl font-bold text-yellow-900' >FUDGE DE CHOCOLATE</h5>
                <div className='flex flex-wrap content-center'>
                    <div className='p-12 text-left'>
                        <p className='mt-2 uppercase text-yellow-900 text-justify mx-1'>El <span className='font-semibold'>favorito de nuestros clientes</span> por mas de 45 años. Deja que este pastel te envuelva con su carácter <span className='font-semibold'>cremoso y dulce</span> que lo hacen el invitado mas elegante para una ocasión especial.</p>
                        <p className='mt-2 uppercase text-yellow-900 text-justify mx-1'>Tres capas de pan de chocolate, bañado con nuestro <span className='font-semibold'>almibar receta secreta</span>, con fudge de chocolate en cada capa y cubierta de fudge de chocolate.</p>
                        <button className='rounded bg-yellow-900 text-gray-100 font-semibold  px-5 py-2 px-4  mt-5 focus:outline-none mr-0 ml-auto'>
                                HACER PEDIDO
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 bg-white shadow my-3'>
            <div className='col-span-1 p-5'>
                <div className='text-left text-2xl font-extrabold'>06</div>
                <h5 className='mt-2 text-4xl font-bold text-yellow-900' >PASTEL DE QUESO TIPO ESPAÑOL</h5>
                <div className='flex flex-wrap content-center'>
                    <div className='p-12 text-left'>
                        <p className='mt-2 uppercase text-yellow-900 text-justify mx-1'>Mas <span className='font-semibold'>esponjoso y cremoso</span>, simplemente se deshace en tu boca ofreciéndote un sabor inigualable de quesos que no vas a poder parar.</p>
                        <p className='mt-2 uppercase text-yellow-900 text-justify mx-1'>Algunos de nuestros clientes los prefieren solo, al no ser muy dulce y por su predominante sabor a queso, sin embargo, si agregas <span className='font-semibold'>salsa de frutos rojos</span> es una <span className='font-semibold'>combinación perfecta.</span> </p>
                        <button className='rounded bg-yellow-900 text-gray-100 font-semibold  px-5 py-2 px-4  mt-5 focus:outline-none'>
                                HACER PEDIDO
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-span-1 h-128'>
                <img src={cheesecake} alt='' className='object-cover h-128 w-full' />
            </div>
        </div>
        </>
    )
}

export default ProductCard
