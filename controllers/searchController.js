var Product = require('../models/product');

// render search page with results from database
const search_results_get = (req, res, next) =>{
    var item = req.query.item;
    var regexItem = new RegExp(item, "i");
    console.log(item);

    // Product.find({ 'title' : "*"+item+"*"})
    Product.find({ 'title' : { $regex: regexItem}})
    .then((result) => {
        res.render('search', { title: 'Search', products: result });
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
    search_results_get
}