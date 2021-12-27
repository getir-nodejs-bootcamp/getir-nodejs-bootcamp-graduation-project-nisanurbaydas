const Joi = require('joi').extend(require('@joi/date'));

const getFilteredRecords = Joi.object({
  startDate: Joi.date().format("YYYY-MM-DD").required(),
  endDate: Joi.date().format("YYYY-MM-DD").greater(Joi.ref("startDate")).required(),
  minCount: Joi.number().integer().options({ convert: false }).required(),
  maxCount: Joi.number().integer().options({ convert: false }).required(),
});

module.exports = {
  getFilteredRecords,
};
