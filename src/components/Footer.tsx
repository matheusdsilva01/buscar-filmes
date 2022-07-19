import React from "react";
import logo2 from '../assets/icons/logo-2.svg';

const Footer = () => {
    return (
        <footer className="bg-black-bright py-5 px-4 flex justify-between">
            <img src={logo2} alt="" />
            <h6 className="text-white hover:underline"><a href="https://linktr.ee/Matheusdsilva" target="_blank" rel="noopener noreferrer">Desenvolvedor</a></h6>
        </footer>
    )
}

export default Footer;