const Mongoose = require('mongoose');

const RecordSchema = new Mongoose.Schema(
  {
    key: String,
    value: String,
    createdAt: Date,
    counts: [Number],
  }
);

module.exports = Mongoose.model('record', RecordSchema);