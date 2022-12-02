import React from 'react';
import { Link } from 'react-router-dom';


const AdvertiseProduct = ({ product }) => {
    const { img, product_name, category_id } = product;
    return (
        <div className='w-full'>
            <Link to={`category/${category_id}`}>
                <span>Ad</span>
                <div className='mr-16'>
                    <img className='w-28' src={img} alt="" />
                    <h1>{product_name}</h1>
                </div>
            </Link>
        </div>
    );
};

export default AdvertiseProduct;