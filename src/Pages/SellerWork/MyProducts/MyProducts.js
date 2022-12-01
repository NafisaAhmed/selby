import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    const [disable, setDisable] = useState(false);
    const handleAdvertise = product => {
        console.log(product);
        const advertiseProduct = {
            category_name: product.category_name,
            product_name: product.product_name,
            category_id: product.category_id,
            img: product.img,
            location: product.location,
            resale_price: product.resale_price,
            original_price: product.original_price,
            years_use: product.years_use,
            posting_time: product.posting_time,
            email: user.email,
            seller_info: {
                seller_name: user.displayName,
                phone_num: products.phone_num
            },
            condition_type: product.condition_type,
            description: product.description,
            purchase_year: product.purchase_year
        }
        console.log('advertiseProducts', advertiseProduct);
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertiseProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast('Product Advertised');
                    setDisable(true);
                }
                else {
                    toast.error(data.message);
                }
            })
            .catch(err => console.error(err));
    }
    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast('Product Deleted Succesfully');
                    refetch();
                }
            });
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Product</th>
                        <th>Resale Price</th>
                        <th>Condition</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id}>
                            <th>
                                <label>
                                    <button onClick={() =>
                                        handleDeleteProduct(product._id)} className="btn btn-ghost btn-xs">X</button>
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-2">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{product.product_name}</div>
                                        <div className="text-sm opacity-50">{product.category_name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {product.resale_price}
                                <br />
                                <span className="badge badge-ghost badge-sm">Original Price: {product.original_price}</span>
                            </td>
                            <td>{product.condition_type}</td>
                            <td>Available</td>
                            <th>
                                <button onClick={() => handleAdvertise(product)} disabled={disable} className="btn btn-ghost btn-xs">advertise</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;