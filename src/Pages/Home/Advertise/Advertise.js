import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import AdvertiseProduct from './AdvertiseProduct';

const Advertise = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
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
    );
};

export default Advertise;