const Mongoose = require('mongoose');

const db = Mongoose.connection;

db.once('open', () => {
  console.log('MongoDB connection is successful.');
});

const connectDB = async () => {
  Mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectDB,
};
