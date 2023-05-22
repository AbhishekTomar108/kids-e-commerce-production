
import React, { useEffect, useState } from 'react'

export default function ProductCheckOut() {

  const [userDetail, setuserDetail] = useState({
    firstName:"",
    lastName:"",
    email:"",
    mobile:"",
    addressLine1:"",
    addressLine2:"",
    country:"",
    city:"",
    state:"",
    zipCode:""
  })

  const [productData, setproductData] = useState();
  const [amount, setAmount]  =useState(0);

  useEffect(()=>{
    const dataproduct = JSON.parse(localStorage.getItem('productCartData'))
    setproductData(dataproduct)
    console.log("product data ", productData);
    let total = 0;
    dataproduct.map(data=>{
        total = total + (data.productPrice*data.totalItem)
    })

    const finalTotal = Math.trunc(total);
    setAmount(finalTotal);
  },[])

  const submitOrder = async()=>{
    console.log('submit order data =', userDetail)
    try
    { const response = await fetch("http://localhost:5000/api/auth/adduseraddress", {
       method: 'POST', 
       
       headers: {
         'Content-Type': 'application/json',
         'auth-token': localStorage.getItem('KidsCommerce')
       },
       body: JSON.stringify({firstName:userDetail.firstName,lastName:userDetail.lastName,email:userDetail.email,mobile:userDetail.mobile,addressLine1:userDetail.addressLine1,addressLine2:userDetail.addressLine2,country:userDetail.country,city:userDetail.city,state:userDetail.state,zipCode:userDetail.zipCode}) 
        
     });
     const json = await response.json();
     console.log(json);
     if(json.success)
     {
       console.log('savedaddress  =',json.useraddress)
       alert('your order has placed')
      
     }
     else{
      
        console.log("error =",json.error)
     }}

     catch{
            console.log("sorry there is some error occured")
     }
  }
  
  return (
    <>
            {/* Breadcrumb Start */}
            <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb bg-light mb-30">
                <a className="breadcrumb-item text-dark" href="#">Home</a>
                <a className="breadcrumb-item text-dark" href="#">Shop</a>
                <span className="breadcrumb-item active">Checkout</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* Checkout Start */}
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Billing Address</span></h5>
              <div className="bg-light p-30 mb-5">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input className="form-control" type="text" placeholder="John" name="firstName"  value={userDetail.firstName} onChange={(e)=>setuserDetail({...userDetail,[e.target.name]:e.target.value})} />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input className="form-control" type="text" placeholder="Doe" name="lastName"   value={userDetail.lastName} onChange={(e)=>setuserDetail({...userDetail,[e.target.name]:e.target.value})}/>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input className="form-control" type="text" placeholder="example@email.com" name="email"   value={userDetail.email} onChange={(e)=>setuserDetail({...userDetail,[e.target.name]:e.target.value})} />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Mobile No</label>
                    <input className="form-control" type="text" placeholder="+123 456 789" name="mobile"   value={userDetail.mobile} onChange={(e)=>setuserDetail({...userDetail,[e.target.name]:e.target.value})} />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 1</label>
                    <input className="form-control" type="text" placeholder="123 Street" name="addressLine1"   value={userDetail.addressLine1} onChange={(e)=>setuserDetail({...userDetail,[e.target.name]:e.target.value})} />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 2</label>
                    <input className="form-control" type="text" placeholder="123 Street" name="addressLine2"   value={userDetail.addressLine2} onChange={(e)=>setuserDetail({...userDetail,[e.target.name]:e.target.value})} />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Country</label>
                    <select className="custom-select"  name="country"   value={userDetail.country} onChange={(e)=>setuserDetail({...userDetail,[e.target.name]:e.target.value})}>
                      <option selected>United States</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>City</label>
                    <input className="form-control" type="text" placeholder="New York" name="city"   value={userDetail.city} onChange={(e)=>setuserDetail({...userDetail,[e.target.name]:e.target.value})} />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>State</label>
                    <input className="form-control" type="text" placeholder="New York" name="state"   value={userDetail.state} onChange={(e)=>setuserDetail({...userDetail,[e.target.name]:e.target.value})} />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>ZIP Code</label>
                    <input className="form-control" type="text" placeholder={123} name="zipCode"   value={userDetail.zipCode} onChange={(e)=>setuserDetail({...userDetail,[e.target.name]:e.target.value})} />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="newaccount" />
                      <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="shipto" />
                      <label className="custom-control-label" htmlFor="shipto" data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse mb-5" id="shipping-address">
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Shipping Address</span></h5>
                <div className="bg-light p-30">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>First Name</label>
                      <input className="form-control" type="text" placeholder="John" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Last Name</label>
                      <input className="form-control" type="text" placeholder="Doe" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>E-mail</label>
                      <input className="form-control" type="text" placeholder="example@email.com" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Mobile No</label>
                      <input className="form-control" type="text" placeholder="+123 456 789" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Address Line 1</label>
                      <input className="form-control" type="text" placeholder="123 Street" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Address Line 2</label>
                      <input className="form-control" type="text" placeholder="123 Street" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Country</label>
                      <select className="custom-select">
                        <option selected>United States</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group">
                      <label>City</label>
                      <input className="form-control" type="text" placeholder="New York" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>State</label>
                      <input className="form-control" type="text" placeholder="New York" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>ZIP Code</label>
                      <input className="form-control" type="text" placeholder={123} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Order Total</span></h5>
              <div className="bg-light p-30 mb-5">
                <div className="border-bottom">
                  <h6 className="mb-3">Products</h6>
                 { productData && productData.map((data,index)=>{
                  return (
                    <div className="d-flex justify-content-between" key={index}>
                    <p>{data.productName}</p>
                    <p>{data.productPrice}</p>
                  </div>
                  )
                 })}
                 
                  
                </div>
                <div className="border-bottom pt-3 pb-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h6>Subtotal</h6>
                    <h6>{amount}</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="d-flex justify-content-between mt-2">
                    <h5>Total</h5>
                    <h5>{amount+10}</h5>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Payment</span></h5>
                <div className="bg-light p-30">
                  <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                      <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                      <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                      <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
                    </div>
                  </div>
                  <button className="btn btn-block btn-primary font-weight-bold py-3" onClick={submitOrder}>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Checkout End */}
    
    
    
    </>
  )
}