var Product = require('../models/product'); 
var Cart = require('../models/cart'); 

// renders a homepage
const homepageGet = (req, res, next) =>  {
    console.log('all products loaded'); 

    Product.find(function(err, products) {
        if (err) {
            console.log(err); 
            next(err);
        } else {
         
            res.render('allProducts', {title:res.__("allProducts.title"), response: res, products: products});
        }
    }); 
  }

 module.exports = {
     homepageGet
 }