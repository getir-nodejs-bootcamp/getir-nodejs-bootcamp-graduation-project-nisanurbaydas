const Joi = require('joi').extend(require('@joi/date'));

const getFilteredRecords = Joi.object({
  startDate: Joi.date().format("YYYY-MM-DD"),
  endDate: Joi.date().format("YYYY-MM-DD"),
  minCount: Joi.number().integer().options({ convert: false }),
  maxCount: Joi.number().integer().options({ convert: false }),
});

module.exports = {
  getFilteredRecords,
};
