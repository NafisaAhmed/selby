import React from 'react';
import Categories from './Categories/Categories';
import ExtraSection from './ExtraSection/ExtraSection';

const Home = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/t3RFQxn/shutterstock-1063513568-scaled.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">The easiest way to
                        <span className="text-teal-600"> buy & sell </span>used furniture
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        Traditionally, the use of furniture is linear. We buy it, we live with it—and then we dispose of it.
                        <br className="hidden md:inline lg:hidden" /> Instead of ending the lifecycle at one use, we've created a platform where furniture can continue to stay in circulation for years to come.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-teal-600 text-gray-50">Buy</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Sell</a>
                    </div>
                </div>
            </div>
            <Categories></Categories>
            <ExtraSection></ExtraSection>
        </section>
    );
};

export default Home;