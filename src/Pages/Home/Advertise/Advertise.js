import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import AdvertiseProduct from './AdvertiseProduct';

const Advertise = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://selby-server.vercel.app/advertise')
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
    }, [])

    const { data: advertisedProducts = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(`https://selby-server.vercel.app/advertise/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className={`${advertisedProducts.length > 0 ? 'block' : 'hidden'}`}>
            <div className=" bg-teal-600 text-gray-50 ">
                <div className='container mx-auto'>
                    <h2 className="text-center text-6xl tracking-tighter font-bold mr-16">Save Up to
                        <br className="sm:hidden" /> 90%
                    </h2>

                    <div className='grid grid-cols-9'>
                        {
                            products.map(product => <AdvertiseProduct
                                key={product._id}
                                product={product}
                            ></AdvertiseProduct>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertise;