import React from 'react'
import './AboutProduct.scss'
import AboutProductItem from './aboutProductItem/AboutProductItem';

function AboutProduct({data}) {
    return (
        <div className='products'>
            <div className="container">
                {data.phones.map((el, index) => {
                    return <AboutProductItem key={index} data={el}/>
                })}
            </div>
        </div>
    )
}

export default AboutProduct