import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    return (
        <header className='bg-black shadow-[0_1px_5px] shadow-slate-700 text-white'>
            <nav className='w-full flex justify-between p-[19px]'>
                <div className='logo'><Link to="/"><img src={logo} alt="" /></Link></div>
                <ul className='flex items-center text-2xl font-light'>
                    <li>
                        <div className="bg-gradient-to-b to-transparent w-full flex items-center flex-col">
                            <form action="submit"
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    navigate(`film/${query}`)
                                }}>
                                <p onClick={() => inputRef.current?.focus()}>Lupa</p>
                                <input
                                    className="max-w-[250px] py-1 px-9 text-[16px] font-light bg-black-bright text-white rounded-sm font-merri outline-none border-1 border-transparent hidden focus:border-white focus:flex"
                                    type="text"
                                    onChange={(e) => setQuery(e.target.value)}
                                    ref={inputRef}
                                    placeholder="Busca..." />
                            </form>
                        </div>
                    </li>
                    <li className='cursor-pointer hover:underline'
                        onClick={() => navigate('/')}>Home</li>
                    <li className='cursor-pointer ml-6 flex items-center hover:underline'>Busca recentes <ChevronDoubleDownIcon className='ml-1' width={24} height={24} /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;