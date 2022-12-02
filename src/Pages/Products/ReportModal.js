import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const ReportModal = ({ productInfo }) => {
    const { product_name, seller_info } = productInfo;
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const handleReporting = data => {


        console.log(data);
        const reportedProduct = {
            product_name,
            report: data.report,
            seller: seller_info.seller_name,
            buyer: user.displayName,
            email: user.email
        }
        fetch('http://localhost:5000/reportedproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Reported to Admin');

                }
                else {
                    toast.error(data.message);
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Report to Admin</h3>
                    <form onSubmit={handleSubmit(handleReporting)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Please provide specific problem</span></label>
                            <input type='text' className="input input-bordered w-full max-w-xs"
                                {...register("report", {
                                    required: true

                                })} />



                        </div>
                        <div className='text-center'>
                            <input className='btn btn-primary w-1/2 text-white mt-5' value='Submit' type="submit" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ReportModal;