import React, {useContext, useEffect, useState} from 'react'
import headerLogo from '../images/header-logo.png'
import cart from '../images/cart.png'
import search from '../images/search.png'
import user from '../images/user.png'
import cross from '../images/cross.png'
import { Link } from "react-router-dom";
import LoginContext from '../Context/LoginContext'
import downArrow from '../images/down-arrow.png'


const Header = () => {
    const ContextValue = useContext(LoginContext);
    const [previousIndex, setpreviousIndex] = useState(0);
    const [searchitem, setSearchItem] = useState('')
    const [filterData, setfilterData]  = useState();

    useEffect(()=>{

   if(searchitem!==""){
    fetch(`http://localhost:5000/api/product/products/`).then(res=>res.json()).then(data=> {const filteredDtata = data.filter(element=>{ return (element.productname.toLowerCase().includes(searchitem,0) || element.category.toLowerCase().includes(searchitem,0))})
    ContextValue.updateFilterProduct(true)
    setfilterData(filteredDtata)
    localStorage.setItem('filterproductData', JSON.stringify(filteredDtata));
})
   }

    },[ContextValue.productname, searchitem])


    const showProduct = (index)=>{
        const currentProductList = document.getElementsByClassName('dropdown-product-list')[index];
        const previousProductList = document.getElementsByClassName('dropdown-product-list')[previousIndex];

        previousProductList.style.visibility= 'hidden';
        currentProductList.style.visibility= 'visible';
        
        setpreviousIndex(index);
    }
    const hideProduct = ()=>{
        const currentProductList = document.getElementsByClassName('dropdown-product-list')[previousIndex];

        currentProductList.style.visibility= 'hidden';

        
    }

    const ShowHideCategories = ()=>{
        const Categories = document.getElementsByClassName('categories-container')[0];
        console.log('Categories input =',Categories)
        console.log('Categories input =',Categories.style)
        console.log('Categories input =',Categories.style.display)
        if(Categories.style.display === "block")
        {
            Categories.style.display = "none";
        }
        else{
            Categories.style.display = "block";
        }
       
    }

    const removeSearch = ()=>{
        console.log('remove search running')
        if(filterData!==null){
            console.log('if running')
            setfilterData(null)
            ContextValue.updateFilterProduct(false)
            // setSearchItem('')
           
        }
    }

    const showSearchBar = ()=>{
        console.log('seacrh input running')
        const searchInput = document.getElementsByClassName('search_input_div_input')[0]
        console.log('style input =',searchInput)
        console.log('style input =',searchInput.style)
        console.log('style input =',searchInput.style.display)

        const computedStyle = window.getComputedStyle(searchInput);
        console.log('computedStyle =',computedStyle.display)

        if(computedStyle.display==="none"){

            console.log('if seacrh input running')

            searchInput.style.display="block"
        }
    }

  return (
    <div className='header'>
        <div className='header-container'>
            <div className='search-hamburger-container'>
                <div className='hamburger-container' onClick={ShowHideCategories}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            {/* <div className='search-container'>
                <div className='search-input'>
                <img src={search}/>
                <input type='text' placeholder='Search' onChange={e=>setSearchItem(e.target.value)}></input>
                </div>
            </div> */}

            <section className='search_section'>
            <div className='  search_input_div'>
                <div className=' search_input_div_input'><input
                    type='text'
                    placeholder='Search...'
                    autoComplete='off'
                    value={searchitem}
                    onChange={e=>setSearchItem(e.target.value)}
                />

                </div>
                {/* <div className='search_icon ' onClick={showSearchBar}> */}
                <img className='search-cross-icon' onClick={filterData?removeSearch:showSearchBar} src={filterData?cross:search}/>
                  
                {/* </div> */}
            </div>
            <div className='search_result' >
           {filterData && filterData.map((data,index)=>{
            return (
                    
                <Link to='categories'><a target='_blank' className='search_suggestion_line' key={index}>
                    {data.productname}
                </a></Link>
         
            )
           }) }
              </div>
        </section>
            </div>

            <div className='header-img'>
               <Link to='/'> <img src={headerLogo}/></Link>
            </div>

            <div className='account-cart-container'>
                <ul>
              
                <Link to={ localStorage.getItem('username')?"user":'account'}> <li><span>{ localStorage.getItem('username')? localStorage.getItem('username'):"Account"}</span>
                    <img className='user-img icon' src={user}/>
    
                    </li></Link>
                    <Link to='usercart'><li id='cart'><span>Cart</span> <img className='icon' src={cart}/></li></Link>
                </ul>
            </div>
        </div>

        <div className='categories-container' onMouseLeave={hideProduct}>
            <hr></hr>
            <img className='cross' onClick={ShowHideCategories} src={cross}/>
            <div className='categories'>
            <div className='top-cotegories hover-product-list y-gap' onMouseOver={()=>showProduct(0)} >Accessories <img src={downArrow} className='down-arrow'/>
            <div className='accesory-list-container dropdown-product-list' onMouseOver={()=>showProduct(0)}>
               <ul>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("used breast pump")}>Used Breast Pump</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby bed with net")}>Baby Bed with net</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby cradle automatic swing")}>baby cradle automatic swing</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("mothertouch walker")}>mothertouch walker</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("babyhug car seat")}>babyhug car seat</li></Link>
                <li>cradle swing</li>
                <li>electric cradle</li>
                <li>electric baby swing</li>
                <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby bassinet")}>baby bassinet</li></Link>
                <li>baby palna</li>
                <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby bouncer and rocker")}>baby bouncer and rocker</li></Link>
                <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby booster chair")}>baby booster chair</li></Link>
                </ul> 
            </div>
               
                </div>

                <div className='top-age hover-product-list y-gap' onMouseOver={()=>showProduct(1)}>Toys  <img src={downArrow} className='down-arrow'/>
                <div className='toys-list-container dropdown-product-list' onMouseOver={()=>showProduct(1)}>
               <ul>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("prongo Educational Toys")}>prongo	Educational</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("car bed for kids")}>car bed for kids</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby house toy")}>baby house toy</li></Link>
                </ul> 
            </div>
                
                </div>
                <div className='top-age hover-product-list y-gap' onMouseOver={()=>showProduct(2)}>  Diapers  <img src={downArrow} className='down-arrow'/>
                <div className='diapers-list-container dropdown-product-list' onMouseOver={()=>showProduct(2)}>
               <ul>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("xxxl diapers")}>xxxl diapers</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("mamy poko pants xxxl")}>mamy poko pants xxxl</li></Link>
                </ul> 
            </div>
                </div>

                 <div className='y-gap hover-product-list' onMouseOver={()=>showProduct(3)}>Cot  <img src={downArrow} className='down-arrow'/>
                 <div className='diapers-list-container dropdown-product-list' onMouseOver={()=>showProduct(3)}>
               <ul>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("wooden baby cot")}>wooden baby cot</li></Link>
                
                </ul> 
            </div>
                 </div>
                <div className='y-gap hover-product-list' onMouseOver={()=>showProduct(4)}>Jacket  <img src={downArrow} className='down-arrow'/>
                <div className='diapers-list-container dropdown-product-list' onMouseOver={()=>showProduct(4)}>
               <ul>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby girl jacket")}>baby girl jacket</li></Link>
                
                </ul>
                </div>
                </div>
                <div className='y-gap hover-product-list' onMouseOver={()=>showProduct(5)}>Stroller <img src={downArrow} className='down-arrow'/>
                <div className='diapers-list-container dropdown-product-list' onMouseOver={()=>showProduct(5)}>
               <ul>
                <li>baby stroller under 1000</li>
                <Link to='categories'><li onClick={()=>ContextValue.updateproductname("babyhug stroller")}>babyhug stroller</li></Link>
                
                </ul>
                </div>
                </div>
                <div className='y-gap'><Link to='giftsForAll'>Gifts for all ages</Link></div>
                <div className='y-gap'><Link to='parenting'>Parenting</Link></div>
                <div className='y-gap'><Link to='/'>Rewards</Link></div>
            </div>

           

            <hr></hr>

            

          
        </div>
    </div>
  )
}

export default Header