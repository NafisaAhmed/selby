import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    let { data: buyers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://selby-server.vercel.app/users/buyer');
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = id => {
        fetch(`https://selby-server.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Buyer Deleted Succesfully');
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button onClick={() => handleDelete(buyer._id)} className='btn btn-xs'>Delete</button></td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;