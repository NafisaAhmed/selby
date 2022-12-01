import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/page.png'

const PageNotFound = () => {
    return (
        <div className='text-center'>
            <img className='w-1/2 mx-auto' src={img} alt="" />
            <Link to='/'><button className='btn bg-teal-600 text-gray-100'>Go to Home</button></Link>
        </div>
    );
};

export default PageNotFound;