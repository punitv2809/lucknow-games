import React from 'react'

const Card = ({ icon, heading, content }) => {
    return (
        <div className='capitalize flex flex-col col-span-12 md:col-span-4 gap-4 p-12 border rounded-2xl'>
            <div className="size-16 rounded-full text-white flex items-center justify-center bg-red-500">
                {icon}
            </div>
            <p className='text-red-700 font-bold'>{heading}</p>
            <p className='text-sm text-black/75'>{content}</p>
        </div>
    )
}

export default Card
