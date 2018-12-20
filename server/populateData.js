//READ BEFORE RUNNING THIS SCRIPT: 
//THIS FUNCTION IS FOR POPULATING THE DB WITH RANDOMLY GENERATED DATA
const fs = require('fs')
const mongoose = require('mongoose')
const db = require ('../index')
const {myData} = require ('./fakeData')
const app = require('./server')
const {Listing} = require('../index')











// explore function decorator option tomorrow
// this.realty.split(' ')[0].trim(','),

// var listingData;
// fs.readFile(data, 'utf-8', (err, data) => {
//     if (err) {
//         console.log('read file error');
//     } else {
//        listingData = JSON.parse(data);
//     //    console.log(listingData)
//     }
// });
// console.log(Object.keys(Listing.Listing));
// console.log(Listing);

// var insertAll = function() {
//     Listing.insertMany(myData, function(error, docs) {})
//         .then(console.log('yay'))
//         .catch(console.log('error'));
// }

// insertAll();