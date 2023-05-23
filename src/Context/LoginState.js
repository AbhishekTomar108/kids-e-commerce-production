import React, { useState } from 'react'
import LoginContext from './LoginContext'

const LoginState = (props) => {

    const [user, setUser] = useState({
      name:"",
      email:"",
    });

  
    const [productname, setproductname] = useState();
    const [filterProduct, setfilterProduct] = useState(false)
    const [category, setcategory] = useState(false)

  const updateFilterProduct = (value)=>{

    setfilterProduct(value)
  }

    const updateUser = (data)=>{
        setUser({...user, name:data.name, email:data.email});
    }

   

    const updateproductname = (data)=>{
      localStorage.setItem( 'product', data );
      setproductname(data);
      localStorage.setItem( 'categoryStatus', false );
      localStorage.setItem( 'ageStatus', false );
    }

    const updateCategory = (data)=>{
      localStorage.setItem( 'category', data );
      localStorage.setItem( 'categoryStatus', true );
      setcategory(data);
    }
    const updateAge = (data)=>{
      localStorage.setItem( 'age', data );
      localStorage.setItem( 'ageStatus', true );
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
    <LoginContext.Provider value={{user, updateUser, productname, updateproductname, fetchuserDetails, filterProduct, updateFilterProduct, category, updateCategory, updateAge}}>
    {props.children}
</LoginContext.Provider>
  )
}

export default LoginState