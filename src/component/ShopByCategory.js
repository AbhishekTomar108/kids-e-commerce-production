import React, {useContext} from 'react'
import LoginContext from '../Context/LoginContext'
import { Link } from "react-router-dom";


export default function ShopByCategory() {
  const ContextValue = useContext(LoginContext);
  return (
    <>
   
    <div style={{width:"100vw", textAlign:"center"}} className="container">
    <h2>Shop By Category</h2>
    <span className='bestseller-span container'>Explore the Collection based on the Category</span>

    <div className='separator-image'></div>
    <div className="shop-by-Category-container">
     <Link to='categories'><div className='accessories' onClick={()=>ContextValue.updateCategory("Accessory")}>Accessories</div></Link>
     <Link to='categories'><div className='toys' onClick={()=>ContextValue.updateCategory("Toy")}>Toys</div></Link>
     <Link to='categories'><div className='diapers' onClick={()=>ContextValue.updateCategory("Diaper")}>Diapers</div></Link>
     <Link to='categories'><div className='cot' onClick={()=>ContextValue.updateCategory("Cot")}>Cots</div></Link>
     <Link to='categories'><div className='jacket' onClick={()=>ContextValue.updateCategory("Jacket")}>Jackets</div></Link>
     <Link to='categories'><div className='stroller' onClick={()=>ContextValue.updateCategory("Accessory")}>Stroller</div></Link>
</div>


    </div>
    
    
    
    </>
  )
}