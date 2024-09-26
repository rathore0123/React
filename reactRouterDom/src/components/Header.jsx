import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div>
                <nav className='flex justify-between items-center px-16 py-2 bg-violet-500'>
                    <div className="logo">
                        <h1 className='text-white font-bold text-3xl'>FunZone</h1>
                    </div>
                    <div className='flex justify-center items-center px-4 gap-5'>
                        <li className='list-none'>
                            <NavLink to={'/quiz'}
                            className={({isActive})=>`text-white font-bold text-xl hover:text-gray-700 
                            transition-all duration-500 ${isActive ? 'text-blue-400' : ''}`}
                            >
                                Quiz App
                            </NavLink>
                        </li>
                        <li className='list-none'>
                            <NavLink to={'/calculator'}
                            className={({isActive})=>`text-white font-bold text-xl hover:text-gray-700 
                            transition-all duration-500 ${isActive ? 'text-blue-400' : ''}`}
                            >
                                Calculator
                            </NavLink>
                        </li>
                        <li className='list-none'>
                            <NavLink to={'/countdown'}
                            className={({isActive})=>`text-white font-bold text-xl hover:text-gray-700 
                            transition-all duration-500 ${isActive ? 'text-blue-400' : ''}`}
                            >
                                Countdown Timer
                            </NavLink>
                        </li>
                        <li className='list-none'>
                            <NavLink to={'/weather'}
                            className={({isActive})=>`text-white font-bold text-xl hover:text-gray-700 
                            transition-all duration-500 ${isActive ? 'text-blue-400' : ''}`}
                            >
                                Weather App
                            </NavLink>
                        </li>
                    </div>
                </nav>
            </div>
        </>
    )
}