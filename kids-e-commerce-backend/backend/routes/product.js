const express = require("express");
const ProductCart = require("../models/ProductCart");
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var fetchuser = require('../middleware/fetchuser');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const JWT_SECRET = "mmm";
const allproducts = mongoose.model('allproducts', {});

//ROUTE-1 fetch all product data using Get

router.get("/products", async (req, res) => {

    try {
      const product = await allproducts.find({});
      console.log("running from fetch product =",product)
      return res.json(product);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send({"error":error.message});
    }
  });

// Route-2 add product correspond to user using post
router.post(

  "/addproduct",fetchuser,
  async (req, res) => {

    try {
      const { productName, totalItem, productPrice } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ "error": errors.array() });
      }
    
      let existingProductCart = await ProductCart.findOne({ user: req.user.id, productName: productName });
    
      if (existingProductCart) {
        existingProductCart.totalItem = totalItem;
        existingProductCart.productPrice = productPrice;
        const updatedProductCart = await existingProductCart.save();
        return res.json({ "success": true, "savedproductCart": updatedProductCart });
      }
    
      const productCart = new ProductCart({
        productName,
        totalItem,
        productPrice,
        user: req.user.id
      });
    
      const savedProductCart = await productCart.save();
      res.json({ "success": true, "savedproductCart": savedProductCart });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ "error": "Internal server error" });
    }
    
   
  }
);

//ROUTE-3 fetch all product data correspond to user using get

router.get('/fetchalluserproduct',fetchuser, async (req,res)=>
{

    try{
   const productCart  = await ProductCart.find({user:req.user.id})
   
   res.json({"success":true, productCart:productCart});
    }
    catch(error){
        console.error(error.message)
        res.send({"error":error.message})
    }
    // res.json([])
})

router.get('/products/product', async(req, res) => {
  const searchQuery = req.query; // Get the search query from the request parameters

  const productdata = await allproducts.find(searchQuery);  
      // return res.json(product);\
      console.log(searchQuery);
   console.log(productdata)
  res.json(productdata);
});



module.exports = router;