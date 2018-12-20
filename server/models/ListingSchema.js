const mongoose = require('mongoose');

let listingSchema = mongoose.Schema({
    id: Number,
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
  
  // const selectAll = function(callback) {
  //   Item.find({}, (err, items) => {
  //     if (err) {
  //       callback(err, null)
  //     } else {
  //       callback(null, items);
  //     }
  //   });
  // };
  
  // module.exports.selectAll = selectAll;
  
  module.exports.Listing = Listing;