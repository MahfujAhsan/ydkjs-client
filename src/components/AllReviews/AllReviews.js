import React, { useEffect, useState } from 'react';
import UseUsers from '../hooks/UseUsers';
import Reviews from '../Reviews/Reviews';

const AllReviews = () => {
    const [users, setUsers] = UseUsers();
    return (
        <div className='w-3/4 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-24 my-12'>
                {
                    users.map(user => <Reviews key={user._id} user={user}></Reviews>)
                }
            </div>
        </div>
    );
};

export default AllReviews;