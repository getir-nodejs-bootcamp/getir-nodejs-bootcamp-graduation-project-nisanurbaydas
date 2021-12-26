const config = require('./config');
const loaders = require('./loaders');
const errorHandler = require('./middlewares/errorHandler.js');

const { RecordRoutes } = require('./routes');

const express = require('express');

//environment
config();

//db connection
loaders();

const app = express();

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log('Server is up!');
  app.use('/records', RecordRoutes);

  app.use((req, res, next) => {
    const error = new Error('No such endpoint');
    error.status = 404;
    next(error);
  });

  app.use(errorHandler);
});
