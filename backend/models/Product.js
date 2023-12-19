const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Price: { type: Number, required: true },
  Stocks: { type: Number, required: true },
  CreatedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema, 'product');