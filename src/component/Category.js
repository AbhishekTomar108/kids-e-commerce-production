import React from 'react'
import i1 from "../images/Categorey-Banner-1-desktop.webp"
import i2 from "../images/Categorey-Banner-2-desktop.webp"
import i3 from "../images/Categorey-Banner-3-desktop.webp"
import i4 from "../images/Categorey-Banner-4-desktop.webp"
export default function Category() {
  return (
    <>
   
    <div style={{width:"100vw", textAlign:"center"}} className="container">
    <h2>Top Category</h2>
   

    <div className='separator-image'></div>
    <div className="Category-container">
<img className='image' src={i1} alt="" />
<img className='image' src={i2} alt="" />
<img className='image' src={i3} alt="" />
<img className='image' src={i4} alt="" />
</div>


    </div>
    
    
    
    </>
  )
}