const mongoose = require('mongoose')
const uriString = process.env.MONGODB_URI || 'mongodb://localhost/listing-details';
mongoose.connect(uriString);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));
db.once("open", (callback) => {
  console.log('Connection succeeded');
});
