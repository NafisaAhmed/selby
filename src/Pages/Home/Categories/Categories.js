import React, { useState } from 'react';
import bed from '../../../images/bed.jpg';
import dining from '../../../images/dining.jpg';
import living from '../../../images/living.jpg';
import Products from '../../Products/Products';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const categoryData = [
        {
            id: 1,
            category_id: '01',
            category_name: 'Bed Room',
            img: bed
        },
        {
            id: 2,
            category_id: '02',
            category_name: 'Dining Room',
            img: dining
        },
        {
            id: 3,
            category_id: '03',
            category_name: 'Living Room',
            img: living
        }
    ]
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Shop By Categories</h1>
            <div className='grid mt-16 gap-4 text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categoryData.map(category => <Category
                        key={category.id}
                        category={category}
                        setCategories={setCategories}
                    ></Category>)
                }
            </div>
            {/* {
                categories &&
                <Products
                    categories={categories}
                    setCategories={setCategories}
                ></Products>
            } */}
        </div>
    );
};

export default Categories;