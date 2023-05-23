import React, { useEffect, useState } from 'react'
import img1 from '../images/img-1.png'
import img2 from '../images/img-2.png'
import img3 from '../images/img-3.png'
import img4 from '../images/img-4.png'
import img5 from '../images/img-5.png'
import img6 from '../images/img-6.png'
import img7 from '../images/img-7.png'
import img8 from '../images/img-8.png'
import img9 from '../images/img-9.png'
import star from '../images/star.png'
import Swal from 'sweetalert2'





const Bestseller = () => {

  const [bestSellerData, setbestSellerData] = useState();
  useEffect(()=>{
    fetchProductData();
  },[])

  const fetchProductData = async()=>{
    const res  =await fetch('http://localhost:5000/api/product/products')

    const data = await res.json();
    setbestSellerData(data);
    // setAllProduct(data);

  }

  const setAllProduct = (data)=>{
    let productItem = [];
    console.log('hello from')

    for(let index=0; index<data.length; index=index+2){
      productItem.push( <div className="carousel-item active"/>)
      productItem.push( <div className="carousel-item active"/>)
      for(let j=index; j<index+2; j++){
        console.log('second loop =',data[j])
      }
    }
  }

  const quickViewProduct = (image,productname)=>{
   
    Swal.fire({
      title: productname,
      text: 'Modal with a custom image.',
      imageUrl: image,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirm:"add to cart"
    })
  }

  return (
    <div className='bestseller container'>
        <h2>Bestseller</h2>
        <span className='bestseller-span container'>Check our Bestseller Collection of Accessories and more</span>
        <div className='separator-image'></div>
        <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
             
            </div>
            <div className="col-6 text-right">
              <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i className="fa fa-arrow-left" />
              </a>
              <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i className="fa fa-arrow-right" />
              </a>
            </div>
            <div className="col-12">
              <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">

                
                    {bestSellerData &&<div className="carousel-item active">
                    <div className="row">
                    
                      {bestSellerData.slice(0,4).map((data,index)=>{
                        console.log('data =',data)
                      return(
                        <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className='image-add-to-cart-conatiner'>
                          <img className="img-fluid" alt="100%x280" src={data.image}/>
                         
                          <div className='add-to-cart-dropdown-container'>
                            <button className='quick-add-to-btn' onClick={()=>quickViewProduct(data.image, data.productname)}>Quick View</button>
                            <button className='quick-add-to-btn'>Add to Cart</button>
                          </div>
                          </div>
                        
                          <div className="card-body">
                            <span className="card-title">{data.productname}({data.age}years)</span>
                            
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>{data.price}</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          
                       
                        </div>

                      </div>
                      )
                      })}


                </div>
              </div>}



              {bestSellerData &&<div className="carousel-item">
                    <div className="row">
                    
                      {bestSellerData.slice(5,9).map((data,index)=>{
                        console.log('data =',data)
                      return(
                        <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className='image-add-to-cart-conatiner'>
                          <img className="img-fluid" alt="100%x280" src={data.image}/>
                          
                          <div className='add-to-cart-dropdown-container'>
                            <button className='quick-add-to-btn'>Quick View</button>
                            <button className='quick-add-to-btn'>Add to Cart</button>
                          </div>
                          </div>
                        
                          <div className="card-body">
                            <span className="card-title">{data.productname} ({data.age}years)</span>
                           
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>{data.price}</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          
                       
                        </div>

                      </div>
                      )
                      })}


                </div>
              </div>}

              {bestSellerData &&<div className="carousel-item">
                    <div className="row">
                    
                      {bestSellerData.slice(0,4).map((data,index)=>{
                        console.log('data =',data)
                      return(
                        <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className='image-add-to-cart-conatiner'>
                          <img className="img-fluid" alt="100%x280" src={data.image}/>
                         
                          <div className='add-to-cart-dropdown-container'>
                            <button className='quick-add-to-btn'>Quick View</button>
                            <button className='quick-add-to-btn'>Add to Cart</button>
                          </div>
                          </div>
                        
                          <div className="card-body">
                            <span className="card-title">{data.productname} ({data.age}years)</span>
              
                            <div className='review-section'>
                            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <span>26review</span>
                                </div>

                                <div className='price-section'>
                                    <span className='current-price'>{data.price}</span>
                                    <span className='previous-price'>9,499</span>
                                </div>
                          </div>
                          
                       
                        </div>

                      </div>
                      )
                      })}


                </div>
              </div>}

                  
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bestseller