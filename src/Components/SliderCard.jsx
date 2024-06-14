import React from 'react';

const SliderCard = ({ active = false, content = '' }) => {
    return (
        <div className={`${active ? 'w-full md:w-8/12 lg:w-4/12' : 'w-full md:w-3/12 lg:w-2/12'} bg-red-700 rounded-xl p-6 text-white flex flex-shrink-0 flex-col gap-8`}>
            <div className="flex items-center justify-end">
                <div className="w-4 h-4 border rounded-full border-red-500"></div>
            </div>
            <p>{content}</p>
        </div>
    );
}

export default SliderCard;
