import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className='bg-black shadow-[0_1px_5px] shadow-slate-700 text-white'>
            <nav className='w-full flex justify-between p-[19px]'>
            <div className='logo'><Link to="/"><img src={logo} alt="" /></Link></div>
                <ul className='flex items-center text-2xl font-light'>
                    <li className='cursor-pointer hover:underline' 
                    onClick={() => navigate('/')}>Home</li>
                    <li className='cursor-pointer ml-6 flex items-center hover:underline'>Busca recentes <ChevronDoubleDownIcon className='ml-1' width={24} height={24} /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;