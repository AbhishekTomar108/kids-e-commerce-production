import React, { useEffect, useState, useContext } from "react";
import image1 from "../../images/img-1.png";
import { Link } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
// import image2 from "./image/MusicalTruck_460x.webp";
// import image3 from "./image/Walker__1__Square_460x.webp";
// import image from "./image/Collection_Page_Banner_-_Desktop-100.webp";

export default function ProductList(props) {
  const ContextValue = useContext(LoginContext);

  const [productdetails, setproductdetails] =useState();
  const [prouctTitle, setprouctTitle] =useState();
  const [prouctTitleDesc, setprouctTitleDesc] =useState();

  useEffect(()=>{

    fetchProductData();
  

  },[ContextValue.productname])

  const fetchProductData =async()=>{
  

    if(ContextValue.filterProduct===true)
    {
      let filterdata = JSON.parse(localStorage.getItem("filterproductData"));
      setproductdetails(filterdata);
      setprouctTitle(filterdata[0].title)
      setprouctTitleDesc(filterdata[0].description)
    }

    else{
     let data = await fetch('http://localhost:5000/api/product/products');
    let parsedData  = await data.json();


    if(localStorage.getItem( 'categoryStatus' ) ==="true"){
      console.log('category status ');
      let  filterdata  =parsedData.filter(data=>{
        return (data.category===localStorage.getItem( 'category'))
      })
      setproductdetails(filterdata);
        setprouctTitle(filterdata[0].category)
        setprouctTitleDesc(filterdata[0].description)
    }

    else if(localStorage.getItem( 'ageStatus' ) ==="true"){
      console.log('category status ');
      let  filterdata  =parsedData.filter(data=>{
        return (data.age===localStorage.getItem( 'age'))
      })
      console.log('filter ',filterdata)
      setproductdetails(filterdata);
        setprouctTitle(`${localStorage.getItem( 'age')} years`)
        setprouctTitleDesc(filterdata[0].description)
    }
else{
 let  filterdata  =parsedData.filter(data=>{
    return (data.product===localStorage.getItem( 'product'))
  })
  setproductdetails(filterdata);
    setprouctTitle(filterdata[0].title)
    setprouctTitleDesc(filterdata[0].description)
}
}

  

 
  }

  const showHideFilter =()=>{

    const FilterContainer = document.getElementsByClassName('filter-container')[0];

    if(FilterContainer.style.display==='none')
    {
      FilterContainer.style.display='block';
    }

    else{
      FilterContainer.style.display='none';
    }

  }
  return (
    <>
    
      <div>
        
              <div className="text">
        <h1 style={{ fontSize: "30px" }}>{prouctTitle && prouctTitle} Collection</h1>
       
        <p style={{ textAlign: "center" }}>
        {/* {prouctTitleDesc && prouctTitleDesc}  */}
        </p>
      </div>
        <div className="filter-text-container" onClick={showHideFilter}>
          <div className="filter-sign-container">
            <div className="sign-line"></div>
            <div className="sign-line"></div>
          </div>
      <div className="filer-text">Filter</div>
      </div>

      <div className="Active Product-list-card-container">

        {productdetails && productdetails.map((data,index)=>{

            return(
            <div className="card" key={index}>
          <h6 className="right-offer-h2">Offer</h6>
          <a href="/" target="_blank" rel="">
            <img src={data.image} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              
                {data.productname} ({data.age} years old)
          
              <br />
            
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                {data.rating.count} review
              
              <br />
              
                <span class="money">{data.price}</span>
             
            </p>
            <Link to='/productdetails' onClick={()=>{localStorage.setItem('productPrice',data.price); localStorage.setItem('productName',data.productname); localStorage.setItem('productImage',data.image)}}> <a className="btn btn-success cart-btn">
              Add To Cart
            </a></Link>
          </div>
        </div>
            )
        })}
        
        
      
        
     </div>
     </div>
    
    </>
  );
}