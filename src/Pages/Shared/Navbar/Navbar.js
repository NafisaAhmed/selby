import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../images/image.ico';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/dashboard">DASHBOARD</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex flex-col">

            <div className="ml-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 py-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='w-10 ml-10' src={icon} alt="" />
                <Link to="/" className="normal-case text-2xl text-cyan-500 font-bold ml-2">Sel<span className='text-rose-400'>By</span></Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {/* <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label> */}

            <div className="divider mb-0"></div>
        </div>
    );
};

export default Navbar;