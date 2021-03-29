var Cart = require('../models/cart');


// render shoppingcart page
var index = (req, res, next) => {
    if (!req.session.cart) {
        console.log("no cart here");
        return res.render('shoppingCart', { title: res.__("shoppingCart.title"), response: res, products: null });
    }
    var cart = new Cart(req.session.cart);
    console.log("trying to render the cart now");
    console.log(cart.generateArray());
    res.render('shoppingCart', { title: res.__("shoppingCart.title"), response: res, products: cart.generateArray(), totalPrice: cart.totalPrice });
}

module.exports = {
    index
}