import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import BookProducts from './BookProducts';
import ReportModal from './ReportModal';


const Products = () => {

    const category = useLoaderData();
    const [productInfo, setProductInfo] = useState(null);
    //console.log(category);
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
            {
                productInfo &&
                <ReportModal
                    productInfo={productInfo}
                ></ReportModal>
            }
        </div>
    );
};

export default Products;