const mongoose = require('mongoose')
const uriString = process.env.MONGODB_URI || 'mongodb://localhost/listing-details';
mongoose.connect(uriString);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));
db.once("open", (callback) => {
  console.log('Connection succeeded');
})

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
  shortRealtor: null,
  realtor: String
});

let Listing = mongoose.model('Listing', listingSchema)

const selectAll = function(callback) {
  Item.find({}, (err, items) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;