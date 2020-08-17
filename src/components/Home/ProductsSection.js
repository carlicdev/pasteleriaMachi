import React from 'react';
import img1 from '../../images/cheesecake3.jpg';
import img2 from '../../images/pastelConejito.jpg';
import img3 from '../../images/pastelZanahoria4.jpg';
import img4 from '../../images/pastelFudge2.jpg';
import img5 from '../../images/tartaAlmendra.jpg';
import img6 from '../../images/pastelMilhojas3.jpg';

const ProductsSection = () => {
    return (
        <div className='bg-white'>
            <div className='mt-10'>
                <h2 className='text-5xl font-bold text-yellow-600'>NUESTROS <span className='text-yellow-800'>PRODUCTOS</span></h2>
                <hr/>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2 text-justify'>
                    <img className='h-auto w-full object-cover object-center lg:hidden shadow' src={img1} alt='Pastel de Queso' />
                    <h5 className='mt-6 text-3xl lg:text-3xl font-bold text-yellow-500' >PASTEL DE QUESO TIPO ESPAÑOL</h5>
                    <p className='mt-2 text-xl lg:text-xl text-yellow-800'>Mas esponjoso y cremoso, simplemente se deshace en tu boca ofreciéndote un sabor inigualable de quesos que no vas a poder parar.</p>
                    <p className='mt-2 text-xl lg:text-xl text-yellow-800'>Algunos de nuestros clientes los prefieren solo, al no ser muy dulce y por su predominante sabor a queso, sin embargo, si agregas salsa de frutos rojos es una combinación perfecta. </p>
                    <button className='rounded shadow-md  text-yellow-800 font-semibold text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:block lg:w-1/2  lg:relative lg:order-first'>
                    <img className='absolute  inset-0 h-full w-full object-cover object-center shadow-md' src={img1} alt='Pastel de queso' />
                </div>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2 text-justify'>
                    <img className='h-auto w-full object-cover object-center lg:hidden shadow' src={img2} alt='Cheesecake' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >CRÊPE CAKE DE CONEJITO TURÍN</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-orange-800'>Cada crepa hecha al momento, cubierta de conejito turin, cubierto de crepa, cubierto de conejito turín... hasta formar un delicioso crêpe cake en donde cada ingrediente se omplementa e integra perfecto para lograr un producto esponjosito y especialmente cremoso en donde el chocolate es el rey.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:inline-block lg:w-1/2  lg:relative'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center shadow-md' src={img2} alt='Pastel de Conejito' />
                </div>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2 text-justify'>
                    <img className='h-auto w-full object-cover object-center lg:hidden shadow' src={img3} alt='Pastel de Conejito' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >PASTEL DE ZANAHORIA</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Si eres de los amantes del pastel de zanahoria no te puedes perder el nuestro. Esta receta secreta ha sido favorita de muchos durante años.</p>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Nuestro frosting y relleno cremosito mezclado con el pan con notas de zanahoria, canela y nuez moscada lo haran el favorito de tus invitados.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:block lg:w-1/2  lg:relative lg:order-first'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center shadow-md' src={img3} alt='Cheesecake' />
                </div>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2 text-justify'>
                    <img className='h-auto w-full object-cover object-center lg:hidden shadow' src={img4} alt='Cheesecake' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >FUDGE DE CHOCOLATE</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>El favorito de nuestros clientes por mas de 45 años. Deja que este pastel te envuelva con su carácter cremoso y dulce que lo hacen el invitado mas elegante para una ocasión especial.</p>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Tres capas de pan de chocolate, bañado con nuestro almibar receta secreta, con fudge de chocolate en cada capa y cubierta de fudge de chocolate.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:inline-block lg:w-1/2  lg:relative'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center shadow-md' src={img4} alt='Pastel de Conejito' />
                </div>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2 text-justify'>
                    <img className='h-auto w-full object-cover object-center lg:hidden shadow' src={img5} alt='Pastel de Conejito' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >TARTA DE ALMENDRAS TOSTADAS</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Para los amantes de la almendra y los celíacos. Nuestra Tarta de Almendras Tostadas te dejara sin habla. Las notas envinadas únicas que deja la almendra tostada consumiran tu paladar.</p>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Al ser sin harina es perfecto para una fiesta de Pesaj o personas intolerantes al glúten.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:block lg:w-1/2  lg:relative lg:order-first'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center shadow-md' src={img5} alt='Cheesecake' />
                </div>
            </div>
            <div className='flex mt-10 lg:mx-12'>
                <div className='px-1 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:py-48 lg:px-24 lg:w-1/2 text-justify'>
                    <img className='h-auto w-full object-cover object-center lg:hidden shadow' src={img6} alt='Cheesecake' />
                    <h5 className='mt-6 text-3xl lg:text-4xl font-bold text-yellow-500' >MIL HOJAS</h5>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>No has probado un pastel Mil Hojas como el nuestro. Cada rebanada te ofrece una mezcla perfecta de lo crujiente y lo suave con una combinación de sabores de vainilla y crema que te encantarán y su cubierta glaseada con un toque de fudge de chocolate.</p>
                    <p className='mt-2 text-xl lg:text-2xl text-yellow-800'>Sin duda querras empezar por el postre.</p>
                    <button className='rounded shadow-md  text-yellow-600 text-xl px-5 pt-1  mt-5 border border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none'>
                        HACER PEDIDO
                    </button>
                </div>
                <div className='hidden lg:inline-block lg:w-1/2  lg:relative'>
                    <img className='absolute inset-0 h-full w-full object-cover object-center shadow-md' src={img6} alt='Pastel de Conejito' />
                </div>
            </div>
        </div>
    )
}

export default ProductsSection

