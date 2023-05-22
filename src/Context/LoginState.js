import React, { useState } from 'react'
import LoginContext from './LoginContext'

const LoginState = (props) => {

    const [user, setUser] = useState({
      name:"",
      email:"",
    });

  
    const [productname, setproductname] = useState();
    const [filterProduct, setfilterProduct] = useState(false)

  const updateFilterProduct = (value)=>{

    setfilterProduct(value)
  }

    const updateUser = (data)=>{
        setUser({...user, name:data.name, email:data.email});
    }

   

    const updateproductname = (data)=>{
      localStorage.setItem( 'product', data );
      setproductname(data);
    }

    const fetchuserDetails = async()=>{
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
     method: 'GET', 
     
     headers: {
       'Content-Type': 'application/json',
       'auth-token': localStorage.getItem('KidsCommerce')
     },
      
   });

   const json = await response.json();

   if(json.success){
      console.log('user = ',json.user);
      setUser({...user,name:json.user.name, email:json.user.email})
      localStorage.setItem('userStatus',true);
   }

   else{
      console.log('error = ',json.error); 
   }
  }

  return (
    <LoginContext.Provider value={{user, updateUser, productname, updateproductname, fetchuserDetails, filterProduct, updateFilterProduct}}>
    {props.children}
</LoginContext.Provider>
  )
}

export default LoginState