const Listing = require('../../database/models/ListingSchema');

  const retrieveOne = (req, res, next) => {
    const {id} = req.params;
    Listing.find({ id: id })
      .exec((err, data) => {
        if (err) {
          res.send(err);
        } else if (data) {
          res.send(data);
        }
      })
      // .then(data => {
      //   if (!data.length) {
      //     next();
      //   } else {
      //     res.json(data);
      //   }
      // })
      // .catch(next);
  }

module.exports.retrieveOne = retrieveOne;

