const { list } = require('../services/Record');
const ApiError = './errors/ApiError';

const httpStatus = require('http-status');

const index = (req, res) => {
  //console.log(req.body);
  list(req.body)
    .then((response) => {
      if (!response)
        return next(
          new ApiError('Something went wrong', httpStatus.INTERNAL_SERVER_ERROR)
        );
      res.status(httpStatus.OK).send({
        code: 0,
        msg:"Success",
        records: response     
    });
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

module.exports = {
  index,
};
