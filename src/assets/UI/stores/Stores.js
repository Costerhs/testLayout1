import React from 'react'
import './Stores.scss'
import apple from '../../img/appStore.svg';
import google from '../../img/googlePlay.svg'

function stores({ row }) {
  return (
    <div className={` ${row ? 'storesRow' : "stores"}`}>
      <a href='#'>
        <img src={apple} alt="apple" />
      </a>
      <a href='#'>
        <img src={google} alt="apple" />
      </a>
    </div>
  )
}

export default stores