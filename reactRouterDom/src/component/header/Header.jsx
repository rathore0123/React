import React from 'react'
import logo from '/images/977465.png'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className='bg-gray-400 h-[70px] w-screen flex justify-between items-center py-2 px-16'>
            <div className="left">
                <div className="logo">
                    <img className='w-36' src={logo} alt="logo" />
                </div>
            </div>
            <div className="right flex justify-center items-center gap-5">
                <ul className='font-semibold text-2xl text-white uppercase flex justify-center items-center gap-12'>
                    <li>
                        <NavLink to={'/htmlquiz'}
                            className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-white'} hover:text-red-950 transition-colors duration-500`}
                        >
                            Html Quiz
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/jokes'}
                            className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-white'} hover:text-red-950 transition-colors duration-500`}
                        >
                            Jokes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/jsquiz'}
                            className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-white'} hover:text-red-950 transition-colors duration-500`}
                        >
                            JS Quiz
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/quotes'}
                            className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-white'} hover:text-red-950 transition-colors duration-500`}
                        >
                            Quotes
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;