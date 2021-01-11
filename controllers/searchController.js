var Product = require('../models/product');

// render search page with results from database
const search_results_get = (req, res, next) =>{
    var item = req.query.item;

    //handling of special characters
    item = item.replace(/\.|\*/g, '');
    if(item == ' ' || item == ''){
        item = item.replace(' ', '\/s');
        item = item.replace('', '\/s');
    }

    var regexItem = new RegExp(item, "i");
    Product.find({ 'title' : { $regex: regexItem}}).sort({createdAt: -1})
    .then((result) => {
        //res.send(result);
        var itemsAmount = result.length;
        var pagesAmount = Math.ceil(itemsAmount/10);
        console.log(pagesAmount);
        res.render('search', { title: 'Search', products: result });
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
    search_results_get
}