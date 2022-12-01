import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AdvertisedProduct = () => {
    const [advertise, setAdvertise] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:5000/advertise/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setAdvertise(res.data);
            })

    }, [])
    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/advertise/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast('Advertised Product Deleted Succesfully');
                    navigate('/')
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
                        advertise.map(product => <tr key={product._id}>
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
                            <td>Advertised</td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdvertisedProduct;