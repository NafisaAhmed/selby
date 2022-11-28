import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { img, category_name } = category;
    return (
        <Link>
            <div className="avatar">
                <div className="w-72 rounded-full">
                    <img src={img} alt='' />
                </div>
            </div>
            <h1 className='font-semibold text-xl my-10'>{category_name}</h1>
        </Link>
    );
};

export default Category;