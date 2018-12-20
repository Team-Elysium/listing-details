const express = require('express');
const listingController = require('../server/controllers/listingController');
const router = express.Router();

router.get('/api/items/:id', listingController.retrieveOne);

module.exports = router;