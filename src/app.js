const path = require('path');
const fs = require('fs');

const config = require('./config');
const loaders = require('./loaders');
const errorHandler = require('./middlewares/errorHandler.js');

const { RecordRoutes } = require('./routes');

const morgan = require('morgan');
const express = require('express');

//environment
config();

//db connection
loaders();

const app = express();

app.use(express.json());

//create a write stream, in append mode
const accessLogStream = fs.createWriteStream(path.join(__dirname,"logs/network","access.log"), {flags: 'a'});
//setup logger
app.use(morgan("combined", {stream: accessLogStream}));

app.listen(process.env.APP_PORT, () => {
  console.log('Server is up!');
  app.use('/records', RecordRoutes);
  

  //error handle for ep that doesn't exist
  /*
  @params(req: Request Object, res: Response, next: callback function)
  */
  app.use((req, res, next) => {
    const error = new Error('No such endpoint');
    error.status = 404;
    next(error);
  });

  app.use(errorHandler);
});

module.exports = app;