const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  location: { lat: String, lng: String },
  description: { type: String },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  kitchen: { type: Number },
  swimpool: { type: String },
  balcony: { type: Number },
  image: [{ type: Number }],
});

module.exports = mongoose.model('Apartment', postSchema);
