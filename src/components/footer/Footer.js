import React from 'react'
import "./Footer.scss";
import footerData from '../../assets/data/footerData';
import zen from '../../assets/img/zen.svg';
import pci from '../../assets/img/pci.svg';

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__items">
                    {footerData.map((el, index) => {
                        return <div className='footer__item'>
                            <div className="footer__title">
                                {el.title}
                            </div>
                            <div className="footer__text">
                                {el.text ? el.text.map((text, index) => {
                                    return <p className='footer__subtitle'>
                                        {text}
                                    </p>
                                }) : null}
                                {el.img ? <img src={el.img} alt='as' /> : null}
                            </div>
                        </div>
                    })}
                </div>
                <div className="footer__end">
                    <div className="footer__logo">
                        <img src={zen} alt="sdf" />
                    </div>
                    <div className="footer__about">
                        <p>ZEN.COM is a licensed financial institution under
                            the supervision of the Central Bank of Lithuania
                            approved by European Banking Authority for 31 countries.
                            Registration number of the company 304749651, VAT ID
                            LT100011714916. License of electronic money institutions
                            number LB000457. Share capital 2.185.000,00 EUR.
                            Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.
                        </p>
                        <div>
                            <img src={pci} alt="fds" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer