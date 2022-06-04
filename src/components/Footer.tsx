import React from "react";
import logo2 from '../assets/icons/logo-2.svg';

const Footer = () => {
    return (
        <footer className="bg-neutral-700 mt-6 py-5 px-4 flex justify-between">
            <img src={logo2} alt="" />
            <h6 className="text-zinc-100 hover:underline"><a href="https://linktr.ee/Matheusdsilva" target="_blank" rel="noopener noreferrer">Desenvolvedor</a></h6>
        </footer>
    )
}

export default Footer;