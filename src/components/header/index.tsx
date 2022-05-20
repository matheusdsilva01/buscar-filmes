import React from 'react';
import logo from '../../assets/icons/logo.svg';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-white'>
            <nav className='w-full flex justify-between p-[19px]'>
            <div className='logo'><Link to="/"><img src={logo} alt="" /></Link></div>
                <ul className='flex items-center text-2xl font-light'>
                    <li className=''>Home</li>
                    <li className='ml-6 flex items-center'>Busca recentes <ChevronDoubleDownIcon className='ml-1' width={24} height={24} /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;