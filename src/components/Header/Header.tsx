import React from 'react';
import cabecalho from '../img/cabecalho.jpeg'; // Update the path to the correct image file
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="logo"></div>
            <img src={cabecalho} alt="cabecalho" className="cabecalhoImg" />
            <nav className='menu'>
                <ul>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;