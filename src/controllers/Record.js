const { list } = require('../services/Record');

const httpStatus = require('http-status');

const index = (req, res) => {
  list()
    .then((response) => {
      if (!response)
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: 'Something went wrong !' });
      res.status(httpStatus.OK).send(response);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

module.exports = {
  index,
};
