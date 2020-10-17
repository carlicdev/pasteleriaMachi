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
                        <button className='bg-yellow-900 text-white text-xl border border-yellow-900 rounded px-4 py-2 mt-5 font-semibold mr-5 shadow'>
                            Hacer Pedido
                        </button>
                        <button className='bg-opacity-25 bg-white text-xl border border-yellow-900 rounded px-4 py-2 mt-5 font-semibold text-yellow-900 shadow'>
                            Productos
                        </button>
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='text-6xl text-yellow-900 font-medium'>Pasteleria Machi</div>
                <div className='text-3xl text-yellow-600 font-semibold'>Empecemos por el postre</div>
                <div>
                    <button className='bg-yellow-900 text-white text-xl border border-yellow-900 rounded px-4 py-2 mt-5 font-semibold mr-5 shadow'>
                        Hacer Pedido
                    </button>
                    <button className='bg-opacity-25 bg-white text-xl border border-yellow-900 rounded px-4 py-2 mt-5 font-semibold text-yellow-900 shadow'>
                        Productos
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cover
