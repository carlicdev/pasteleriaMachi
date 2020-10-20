import React from 'react'

const Cover = () => {
    return (
        <div className='flex cover justify-center items-center bg-gray-100 min-h-screen min-w-full'>
            <div className='lg:grid grid-cols-2 hidden'>
                <div className='col-span-1'></div>
                <div className='col-span-1 text-left'>
                    <div className='text-6xl text-yellow-900 font-medium'>Pasteleria Machi</div>
                    <div className='text-3xl text-yellow-600 font-semibold'>Empecemos por el postre</div>
                    <div>
                        <button className='btn-gradient hover:bg-yellow-900 text-white text-xl rounded px-4 py-2 mt-5 font-semibold mr-5 shadow'>
                            Hacer Pedido
                        </button>
                        <button className='bg-white hover:bg-yellow-800 hover:text-gray-100 text-xl border border-yellow-900 rounded px-4 py-2 mt-5 font-semibold text-yellow-900 shadow'>
                            Productos
                        </button>
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='text-6xl text-yellow-900 font-medium'>Pasteleria Machi</div>
                <div className='text-3xl text-yellow-600 font-semibold'>Empecemos por el postre</div>
                <div>
                    <button className='btn-gradient hover:bg-yellow-900 text-white text-xl rounded px-4 py-2 mt-5 font-semibold mr-5 shadow focus:outline-none'>
                        Hacer Pedido
                    </button>
                    <button className='bg-opacity-25 bg-white text-xl border border-yellow-900 rounded px-4 py-2 mt-5 font-semibold text-yellow-900 shadow focus:outline-none'>
                        Productos
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cover
