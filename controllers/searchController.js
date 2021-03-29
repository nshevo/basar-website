var Product = require('../models/product');
const ITEMS_PER_PAGE = 20;
var itemsAmount = 0;
var pagesAmount = 0;

// render search page with results from database
const searchResultsGet = (req, res, next) => {
    var item = req.query.item;
    var page = req.query.page;

    //handling of special characters
    item = item.replace(/\.|\*/g, '');
    if (item == ' ' || item == '') {
        item = item.replace(' ', '\/s');
        item = item.replace('', '\/s');
    }

    var regexItem = new RegExp(item, "i");

    // count pages
    Product.find({ 'title': { $regex: regexItem } })
        .sort({ createdAt: -1 })
        .then((result) => {
            itemsAmount = result.length;
            pagesAmount = Math.ceil(itemsAmount / ITEMS_PER_PAGE);
            console.log('Items amount: ' + itemsAmount);
            console.log('Pages amount: ' + pagesAmount);

            //process the result and render the page
            Product.find({ 'title': { $regex: regexItem } })
                .sort({ createdAt: -1 })
                .limit(ITEMS_PER_PAGE)
                .skip(ITEMS_PER_PAGE * (page - 1))
                .then((result) => {
                    if (page == undefined || page < 1) {
                        page = 1;
                    }
                    console.log('Requested page ' + page);
                    res.render('search', { title: res.__("search.title"), response: res, products: result, pageNr: page, pageMax: pagesAmount });
                })
                .catch((err) => {
                    console.log(err);
                });
        });


}

module.exports = {
    searchResultsGet,
    itemsAmount,
    pagesAmount
}