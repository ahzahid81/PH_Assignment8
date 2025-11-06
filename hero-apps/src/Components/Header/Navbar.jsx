import React from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css'
import logo from '../../assets/logo.png';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {

    const links = <>
        <NavLink to={'/'}><li><div className=' font-semibold'>Home</div></li></NavLink>
        <NavLink to={'/Apps'}><li><div className=' font-semibold'>Apps</div></li></NavLink>
        <NavLink to={'/Install'}><li><div className=' font-semibold'>Installation</div></li></NavLink>
    </>

    return (
        <div >
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'}><a className="btn btn-ghost font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"> <img className=' w-10 h-10' src={logo} alt="" /> HERO.IO</a></Link>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'https://github.com/ahzahid81'}><a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub></FaGithub> Contribute</a></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;