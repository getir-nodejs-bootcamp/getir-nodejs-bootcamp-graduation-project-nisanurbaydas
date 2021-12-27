const Record = require('../models/Record');


/*
get filtered data with aggregation
*/ 
const list = (data) => {
  /*
  find( {for filtering based on the aggregation}, {for seleccting the fields})
  */
  return Record.find({
    $expr: {
      $and: [
        { $gt: [{ $sum: '$counts' }, data.minCount] },
        { $lt: [{ $sum: '$counts' }, data.maxCount] },
        { $gt: ['$createdAt', new Date(data.startDate)] },
        { $lt: ['$createdAt', new Date(data.endDate)] },
      ],
    },
  }, {key:1, createdAt:1, totalCount: { $sum: '$counts' }, _id:0});
};

module.exports = {
  list,
};
