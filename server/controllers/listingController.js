const Listing = require('../../database/models/ListingSchema');

const retrieveOne = (req, res, next) => {
  const { id } = req.params;
  Listing.find({ id: id })
    .exec((err, data) => {
      if (err) {
        res.send(err);
      } else if (data) {
        res.send(data);
      }
    });
}

module.exports.retrieveOne = retrieveOne;

