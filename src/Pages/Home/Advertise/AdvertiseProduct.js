import React from 'react';
import { Link } from 'react-router-dom';


const AdvertiseProduct = ({ product }) => {
    const { img, product_name } = product;
    return (
        <div className='w-full'>
            <span>Ad</span>
            <div className='mr-16'>
                <img className='w-28' src={img} alt="" />
                <h1>{product_name}</h1>
            </div>

        </div>
    );
};

export default AdvertiseProduct;