var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
       type: String,
       required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, { timestamps: true });

var Product = mongoose.model('Product', productSchema);

module.exports = Product;