var Product = require('../models/product');
var Cart = require('../models/cart');

// renders a homepage
const index = (req, res, next) => {
    console.log('all products loaded');

    Product.find(function (err, products) {
        if (err) {
            console.log(err);
            next(err);
        } else {

            res.render('index', { title: res.__("index.title"), response: res, products: products });
        }
    });
}

module.exports = {
    index
}