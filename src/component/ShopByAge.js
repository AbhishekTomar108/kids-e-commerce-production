import React from 'react'
import zeroToOne from '../images/0-1years.webp'
import oneToTwo from '../images/1-2years.jpg'
import twoToThree from '../images/2-4years.webp'
import fourPlus from '../images/4+years.jpg'
import separator from '../images/separator.webp'

const ShopByAge = () => {
  return (
    <div className='shop-by-age-container'>
     <h2>Shop By Age</h2>
     <span>Choose Products according to Age of Kid</span>
     <div className='separator-image'></div>
     <div className='age-image-container d-flex flex-row justify-content-around'>
        <div className='each-img-block'><img src={zeroToOne}></img></div>
        <div className='each-img-block'><img src={oneToTwo}></img></div>
        <div className='each-img-block'><img src={twoToThree}></img></div>
        <div className='each-img-block'><img src={fourPlus}></img></div>

     </div>
    </div>
  )
}

export default ShopByAge