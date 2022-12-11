import React from 'react'
import './WhiteStores.scss'
import apple from '../../img/appPay.svg';
import google from '../../img/googlePay.svg'

function WhiteStore() {
    return (
        <div className='whiteStore'>
            <a href='#'>
                <img src={apple} alt="apple" />
            </a>
            <a href='#'>
                <img src={google} alt="apple" />
            </a>
        </div>
    )
}

export default WhiteStore