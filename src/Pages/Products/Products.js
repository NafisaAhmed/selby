import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import BookProducts from './BookProducts';

const Products = ({ categories, setCategories }) => {
    /* const { category_id } = categories;

    const { data: category = [] } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch(`http://localhost:5000/category/${category_id}`)
            .then(res => res.json())
    }) */
    const category = useLoaderData();
    const [productInfo, setProductInfo] = useState(null);
    console.log(category);
    return (
        <div>
            <h1 className='text-center text-3xl font-thin my-16'>See the used products you are looking for</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    category.map(product => <BookProducts
                        key={product._id}
                        product={product}
                        setProductInfo={setProductInfo}
                    ></BookProducts>)
                }
            </div>
            {
                productInfo &&
                <BookingModal
                    productInfo={productInfo}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;