//Read before running script: 
//This function is for populating the database
const fs = require('fs')
const mongoose = require('mongoose')
const db = require ('./index')
const data = require ('./fakeData')

// function decorator
// this.realty.split(' ')[0].trim(','),