import React from 'react';

const Reviews = (props) => {
    const { name, img, reviewTxt, ratings } = props.user;
    return (
        <div>
            <div className='text-center border border-black p-4 rounded-lg'>
                <img className='w-24 h-24 mx-auto rounded-full' src={img} alt="" />
                <h2 className='text-xl font-bold font-mono my-2'>{name}</h2>
                <p className='leading-8 font-serif'><span className='text-2xl text-yellow-600'>❝</span> {reviewTxt} <span className='text-2xl text-yellow-600'>❞</span></p>
                <p className='mt-5 font-mono text-xl font-bold'>Ratings: <span className='text-4xl text-yellow-600'>{ratings}</span> stars</p>
            </div>
        </div>
    );
};

export default Reviews;