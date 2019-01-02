const mongoose = require('mongoose');
const db = require('../../index.js')

const listingSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    price: Number,
    squareFootage: Number,
    pricePerSquareFoot: Number,
    rooms: Number,
    beds: Number,
    baths: Number,
    houseType: String,
    neighborhood: String,
    streetAddress: String,
    stars: Number,
    realty: String,
    shortRealty: String,
    realtor: String
  });
  
let Listing = mongoose.model('Listing', listingSchema)
  
module.exports = Listing;