import React from 'react';

const ExtraSection = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-3xl font-bold my-16'>How to shop on SelBy</h1>
            <div className="relative flex items-center justify-center w-full text-gray-900">
                <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                    <div className="relative flex-shrink-0 w-full sm:w-auto">
                        <div className='object-cover object-center h-96 aspect-square bg-white text-center py-20'>
                            <h1 className='text-8xl text-red-400 font-serif'>1</h1>
                            <h2 className='font-bold font-mono text-xl'>Browse Our Category</h2>
                            <p className='font-thin mt-5'>Select a category and see the products <br /> you want according to your suitable price <br /> range and choice</p>
                        </div>
                    </div>
                    <div className="relative flex-shrink-0 w-full sm:w-auto">
                        <div className='object-cover object-center h-96 aspect-square bg-white text-center py-20'>
                            <h1 className='text-8xl text-red-400 font-serif'>2</h1>
                            <h2 className='font-bold font-mono text-xl'>Request to purchase</h2>
                            <p className='font-thin mt-5'>Find the one? Amazing—reserve <br /> your dream item before someone else does!</p>
                        </div>
                    </div>
                    <div className="relative flex-shrink-0 w-full sm:w-auto">
                        <div className='object-cover object-center h-96 aspect-square bg-white text-center py-20'>
                            <h1 className='text-8xl text-red-400 font-serif'>3</h1>
                            <h2 className='font-bold font-mono text-xl'>Schedule & enjoy!</h2>
                            <p className='font-thin mt-5'>Find a time that works for <br /> you, and we'll handle the rest</p>
                        </div>
                    </div>
                    <div className="relative flex-shrink-0 w-full sm:w-auto">
                        <div className='object-cover object-center h-96 aspect-square bg-white text-center py-20'>
                            <h1 className='text-8xl text-red-400 font-serif'>4</h1>
                            <h2 className='font-bold font-mono text-xl'>Browse Our Category</h2>
                            <p className='font-thin mt-5'>Select a category and see the products <br /> you want according to your suitable price <br /> range and choice</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ExtraSection;