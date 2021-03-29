var Product = require('../models/product');

//add Product to the Database
const addProduct = (req, res, next) => {
  var titel = req.query.titel;
  var price = req.query.price;
  var description = req.query.description;
  var product = new Product({
    title: titel,
    price: price,
    description: description
  });

  product.save()
    .then((result) => {
      res.send(result)
        .catch((err) => {
          console.log(err);
        });
    });
}

module.exports = {
  addProduct
}
