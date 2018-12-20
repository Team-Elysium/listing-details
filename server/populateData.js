//READ BEFORE RUNNING THIS SCRIPT: 
//THIS FUNCTION IS FOR POPULATING THE DB WITH RANDOMLY GENERATED DATA

const mongoose = require('mongoose');
const Listing = require('./models/ListingSchema.js');
const faker = require('faker');

let dataArray = [];

function generateData() {
  for (let i = 0; i < 100; i++) {
    // console.log(i);
    let item = {};
    item.id = i;
    
    if (i < 25) {
      item.squareFootage = faker.random.number({
        min: 350,
        max: 600
      });

      item.pricePerSquareFoot = faker.random.number({
        min: 600,
        max: 2000
      });

      item.rooms = faker.random.number({
        min: 1,
        max: 2
      });

      item.beds = faker.random.number({
          min: 1,
          max: 2
      });

      item.baths = faker.random.number({
          min: 1,
          max: 2
      });
    }

    if (i >= 25 && i < 50) {
      item.squareFootage = faker.random.number({
        min: 450,
        max: 900
      });

      item.pricePerSquareFoot = faker.random.number({
        min: 850,
        max: 2000
      });

      item.rooms = faker.random.number({
        min: 2,
        max: 5
      });

      item.beds = faker.random.number({
          min: 1,
          max: 2
      });

      item.baths = faker.random.number({
          min: 1,
          max: 2
      });
    }

    if (i >= 50 && i < 75) {
      item.squareFootage = faker.random.number({
        min: 1000,
        max: 2500,
      });

      item.pricePerSquareFoot = faker.random.number({
        min: 850,
        max: 2500
      });

      item.rooms = faker.random.number({
        min: 5,
        max: 8
      });

      item.beds = faker.random.number({
          min: 2,
          max: 4
      });

      item.baths = faker.random.number({
          min: 2,
          max: 4
      });
    }

    if (i >= 75 && i < 100) {
      item.squareFootage = faker.random.number({
        min: 2000,
        max: 6000
      });

      item.pricePerSquareFoot = faker.random.number({
        min: 1500,
        max: 2600
      });

      item.rooms = faker.random.number({
        min: 7,
        max: 12
      });

      item.beds = faker.random.number({
          min: 3,
          max: 6
      });

      item.baths = faker.random.number({
          min: 3,
          max: 5
      });
    }

    let num1 = faker.random.number({
      max:4
    });

    let num2 = faker.random.number({
      max:5
    });

    const houseType = [
      'Condo',
      'Co-op',
      'House',
      'Townhouse'
    ];

    const neighborhood = [
      'Brooklyn',
      'Manhattan',
      'Queens',
      'Staten Island',
      'Bronx'
    ];

    item.houseType = houseType[num1];
    item.neighborhood = neighborhood[num2];
    item.streetAddress = faker.address.streetAddress();
    item.stars = faker.random.number({
      min: 0,
      max: 30
    });
    item.realty = faker.company.companyName();
    item.shortRealty = faker.company.companySuffix();
    item.realtor = faker.name.findName();

  dataArray.push(item);
  }
}

generateData();

for (var i = 0; i < dataArray.length; i++) {
  let data = dataArray[i];
  const listing = new Listing({
    id: data.id,
    squareFootage: data.squareFootage,
    pricePerSquareFoot: data.pricePerSquareFoot,
    rooms: data.rooms,
    beds: data.beds,
    baths: data.baths,
    houseType: data.houseType,
    neighborhood: data.neighborhood,
    streetAddress: data.streetAddress,
    stars: data.stars,
    realty: data.realty,
    shortRealty: data.shortRealty,
    realtor: data.realtor
  });
      //console.log(listing);
      listing.save(err => {
        // console.log('bye')
        if (err) {
          console.log(err);
        }
      });
}



// class FakerDataGenerator {
//   constructor() {
//     this.data = [];
//   }

//   generateData() {
    

//       const listing = new Listing(item);
//       //console.log(listing);
//       listing.save(err => {
//         // console.log('bye')
//         if (err) {
//           console.log(err);
//         }
//       });
      
//     }

    // Promise.all(this.data)
    // .then((results) => {
    //   console.log('sample item', results[0].stars);
    //   console.log(results + 'saved in database')
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    // return this.data;
//   }
// }
// const myListing = new FakerDataGenerator();
// myListing.generateData();

//drop db before seed

// Listing.remove({}).exec((err, results) => {
//   if (err) {
//     console.log(err);
//   } 
//   const myListing = new FakerDataGenerator();
//   myListing.generateData();
// });

