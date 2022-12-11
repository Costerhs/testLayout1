import React, { useState } from 'react'
import "./Header.scss";
import logo from '../../assets/img/GroupIcon.svg';
import burgerIcon from '../../assets/img/burgerIcon.svg';
import close from '../../assets/img/close.svg';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='header'>
            <div className="container">
                <div className='header__left'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='links'>
                        <a href='#' className="link">Personal</a>
                        <a href='#' className="link">Business</a>
                    </div>
                </div>

                <div className='header__right'>
                    <ul className="header__nav">
                        <li> <a href='#' className='link'>Zenefits</a></li>
                        <li> <a href='#' className='link'>Features</a></li>
                        <li> <a href='#' className='link'>Pricing</a></li>
                    </ul>
                    <button className="header__btn">Get App</button>
                </div>

                <div className="header__door" onClick={() => setOpenMenu(!openMenu)}>
                    <img src={openMenu ? close : burgerIcon} alt="icon" />
                </div>

                <div className={`header__menu ${openMenu ? 'header__menu--active' : 'header__menu--passive'} `}>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='links'>
                        <a href='#' className="link">Personal</a>
                        <a href='#' className="link">Business</a>
                    </div>
                    <ul className="header__nav">
                        <li> <a href='#' className='link'>Zenefits</a></li>
                        <li> <a href='#' className='link'>Features</a></li>
                        <li> <a href='#' className='link'>Pricing</a></li>
                    </ul>
                    <button className="header__btn">Get App</button>
                </div>
            </div>
        </div>
    )
}

export default Header