import React from 'react'
import './Cashback.scss'
import partnersData from '../../assets/data/partnersData'

function Cashback() {
    return (
        <div className='cash'>
            <div className="container">
                <div className="cash__text">
                    <div className="cash__title">and cashback!</div>
                    <div className="cash__subtitle">
                        It saves a little bit of money while you’re shopping,
                        but in many cases it takes ages to get anything out of it. We gave it a thought and made cashback way more friendly. Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase. It's like you haggled some cash, despite you didn't have to.
                        Just don't forget to use in-app cashback link.
                    </div>
                </div>
                <div className="cash__btn">
                    <button>Show more partners</button>
                </div>
                <div className="cash__partners">
                    {partnersData.map((el, index) => {
                        return <img src={el} key={index} alt='a' />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cashback