import React from 'react'
import Sidebar from './Sidebar'

const Body = () => {
    return (
        <div className='w-full mt-3 flex md:flex-row flex-col justify-around'>
            <div className='w-[95%] md:w-[25%] mb-20 flex flex-col p-5  rounded-md border-r-2'>
                <Sidebar />
            </div>
            <div className='w-[95%] md:w-[75%] h-fit p-5 shadow-sm rounded-md '>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsum.</p>
            </div>
        </div>
    )
}

export default Body