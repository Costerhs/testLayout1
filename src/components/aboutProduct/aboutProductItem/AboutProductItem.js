import React from 'react'
import './AboutProductItem.scss'
import Stores from '../../../assets/UI/stores/Stores'
import record from '../../../assets/img/record.svg'

function AboutProductItem({ data }) {
    // console.log(Stores)
    return (
        <div className={`product ${data.isRight ? 'productLeft' : null}`}>
            <div className="product__img">
                <img src={data.img} alt="phone" />
            </div>
            <div className="product__info">
                {data.beforeTitle ?
                    <div className='product__record'>
                        <div>
                            <img src={record} alt="" />
                        </div>
                        <p>{data.beforeTitle}</p>
                    </div>
                    :
                    null
                }
                <div className="product__title">
                    {data.title.map((el, index) => {
                        return <p key={index} className='product__title-text'>{el}</p>
                    })}
                </div>
                <div className="product__subtitle">
                    {data.text.map((el, index) => {
                        return <p key={index} className='product__text'>{el}</p>
                    })}
                </div>
                {data.component ? <data.component row={data.componentRow} /> : null}
            </div>


        </div>
    )
}

export default AboutProductItem