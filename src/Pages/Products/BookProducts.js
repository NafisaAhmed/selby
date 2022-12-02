import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaCheckCircle, FaEllipsisH } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const BookProducts = ({ product, setProductInfo }) => {
    const { product_name, condition_type, img, description, original_price, resale_price, location, posting_time, purchase_year, years_use, seller_info, status } = product;
    const { user } = useContext(AuthContext);

    return (
        <div className="card w-full bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-96" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex'>
                    <h2 className="card-title text-teal-800 font-semithin">{product_name}</h2>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle ml-44">
                            <FaEllipsisH></FaEllipsisH>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><label htmlFor="report-modal" className='font-bold' onClick={() => setProductInfo(product)}>Report to Admin</label></li>
                        </ul>
                    </div>
                </div>
                <p className='font-thin'>{description}</p>
                <div className='flex'>
                    <h1 className='mr-6'>Original Price: {original_price}</h1>
                    <h1>Resale Price: {resale_price}</h1>
                </div>
                <h1>Condition- <span className='text-yellow-700'>{condition_type}</span></h1>
                <div className='flex'>
                    <h1 className='mr-5'>Purchase Year: {purchase_year}</h1>
                    <h1>{years_use > 1 ? `${years_use} years used` : `${years_use} year used`}</h1>
                </div>
                <div className='flex'>
                    <p className='mt-1'>{status ? <FaCheckCircle className='text-blue-700'></FaCheckCircle> : ""}</p>
                    <h1>{seller_info.seller_name} posted in {posting_time} from {location}</h1>
                </div>
                <h1>Contact: <span className='text-green-700'>{seller_info.phone_num}</span></h1>
                <div className="card-actions">
                    <label htmlFor='booking-modal' className="btn btn-primary" onClick={() => setProductInfo(product)}>Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default BookProducts;