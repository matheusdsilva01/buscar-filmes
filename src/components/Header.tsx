import { Bars3Icon, ChevronDoubleDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';

const Header = () => {
    const [query, setQuery] = useState("");
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className='bg-black shadow-[0_1px_5px] shadow-slate-700 text-white sticky top-0 z-40 lg:relative'>
            <nav className='w-full flex items-center justify-between px-3 py-5 lg:p-[19px]'>
                <div className='logo w-44 lg:w-full'><Link to="/"><img src={logo} alt="logo site" /></Link></div>
                <ul className='DESKTOP-MENU items-center text-2xl gap-6 font-light hidden lg:flex'>
                    <li>
                        <form action="submit"
                            onSubmit={(e) => {
                                e.preventDefault()
                                navigate(`film/${query}`)
                            }}>
                            <label htmlFor="input" className='bg-search-icon bg-no-repeat bg-bottom cursor-pointer'>
                                <input
                                    id='input'
                                    name='input'
                                    className="max-w-[250px] py-1 text-[16px] font-light w-10 opacity-0 bg-black-bright text-white rounded-sm font-merri outline-none border-1 border-transparent focus:border-white focus:w-auto focus:px-9 focus:opacity-100 bg-search-icon bg-no-repeat bg-[center_left_5px]"
                                    type="text"
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Busca..." />
                            </label>
                        </form>
                    </li>
                    <li className='cursor-pointer hover:underline'
                        onClick={() => navigate('/')}>Home</li>
                    <li className='cursor-pointer flex items-center hover:underline'>Busca recentes <ChevronDoubleDownIcon className='ml-1' width={24} height={24} /></li>
                </ul>
                <section className='MOBILE-MENU flex lg:hidden'>
                    <div className='' >
                        {isNavOpen ? <XMarkIcon className='w-8' onClick={() => setIsNavOpen(false)} /> : <Bars3Icon className='w-8' onClick={() => setIsNavOpen(prev => !prev)}/> }
                    </div>
                    <div className={isNavOpen ? 'block absolute top-16 right-0 bg-black w-full h-screen z-50' : 'hidden'}>
                        sdnaklsndlksa
                    </div>
                </section>
            </nav>
        </header>
    )
}

export default Header;