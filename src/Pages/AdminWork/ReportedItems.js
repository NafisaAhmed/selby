import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedItems = () => {
    let { data: reports = [], refetch } = useQuery({
        queryKey: ['reportedproducts'],
        queryFn: async () => {
            const res = await fetch('https://selby-server.vercel.app/reportedproducts');
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = id => {
        fetch(`https://selby-server.vercel.app/reportedproducts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Report Deleted Succesfully');
                    refetch();
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Seller Name</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.map((report) => <tr key={report._id}>

                                <th>
                                    <label>
                                        <button onClick={() =>
                                            handleDelete(report._id)} className="btn btn-ghost btn-xs">X</button>
                                    </label>
                                </th>
                                <td>{report.product_name}</td>
                                <td>{report.buyer}</td>
                                <td>{report.email}</td>
                                <td>{report.seller}</td>
                                <td>{report.report}</td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;