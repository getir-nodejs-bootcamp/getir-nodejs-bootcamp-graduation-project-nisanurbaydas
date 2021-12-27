const { list } = require('../services/Record');

const httpStatus = require('http-status');

/*@params req:Request object, res: response*/

const index = (req, res) => {
  //console.log(req.body);
  list(req.body)
    .then((response) => {
      if (response.length === 0) {
        res.status(httpStatus.NOT_FOUND).send({
          code: 1,
          msg: 'There is no data matching your search criteria.',
        });
      } else {
        res.status(httpStatus.OK).send({
          code: 0,
          msg: 'Success',
          records: response,
        });
      }
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

module.exports = {
  index,
};

