import React from 'react';
import errorImg from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='w-3/4 mx-auto h-[80vh] mt-6'>
            <h1 className='text-4xl md:text-6xl font-mono font-bold text-center text-red-600 uppercase'>Error: 404</h1>
            <h1 className='text-3xl md:text-4xl font-mono font-bold text-center mt-3 md:mt-6'>Page Not Found</h1>
            <img className='w-[200] mx-auto mt-[-30px]' src={errorImg} alt="" />
        </div>
    );
};

export default NotFound;