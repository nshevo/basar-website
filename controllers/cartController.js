
var Product = require('../models/product');
var Cart = require('../models/cart');

const addItem = (req, res, next) => {

    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    console.log('you are here');


    Product.findById(productId, function (err, product) {

        if (err) {
            console.log(err);
            return res.redirect('/');
        }
        console.log('hier sollte die produkt-id stehen');
        console.log(productId);
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/allproducts');

    });
}


module.exports = {
    addItem
}
