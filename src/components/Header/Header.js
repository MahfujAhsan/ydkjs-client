import React, { useState } from 'react';
import { MenuAlt1Icon, XCircleIcon, } from '@heroicons/react/solid';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-lime-200 max-w-7xl mx-auto rounded mt-2 shadow-lg'>
            <div onClick={() => setOpen(!open)} className='h-10 w-10 md:hidden mx-auto'>
                {open ? <XCircleIcon></XCircleIcon> : <MenuAlt1Icon></MenuAlt1Icon>}
            </div>
            <ul className={`w-full bg-lime-200 my-3 py-3 text-center z-10 text-xl font-bold font-mono grid grid-cols-1 md:flex justify-center md:static absolute duration-500 ease-in ${open ? 'top-8' : 'top-[-280px]'}`}>
                <li className='mx-8 px-4 py-2'>
                    <CustomLink to="/home">Home</CustomLink>
                </li>
                <li className='mx-8 px-4 py-2'>
                    <CustomLink to="/reviews">Reviews</CustomLink>
                </li>
                <li className='mx-8 px-4 py-2'>
                    <CustomLink to="/dashboard">Dashboard</CustomLink>
                </li>
                <li className='mx-8 px-4 py-2'>
                    <CustomLink to="/blogs">Blogs</CustomLink>
                </li>
                <li className='mx-8 px-4 py-2'>
                    <CustomLink to="/about">About</CustomLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;