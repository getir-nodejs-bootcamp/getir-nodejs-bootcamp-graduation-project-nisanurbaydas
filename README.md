# Getir Node.js Bootcamp Graduation Project
A RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.

## Getting Started
Clone the repo:

```
git clone https://github.com/nisanurbaydas/getir-nodejs-bootcamp-graduation-project-nisanurbaydas.git
cd getir-nodejs-bootcamp-graduation-project-nisanurbaydas
```
Install the dependencies:

```
npm install
```
To start project:
```
npm start
```
To run test:
```
npm run test
```
## Project Structure
```
src\
 |--config\         # configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--loaders\    # Db connection
 |--logs\           # Log files
 |--middlewares\     # Custom express middleware (Error handling and Validations)
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--test\          # Testing frameworks
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 ```
## API Documentation
### API Endpoints
List of available routes:
````
POST /records - my records
````
 Request Parameters:
 |  Parameters | Type  | Description   |
| ------------ | ------------ | ------------ |
|  startDate |  String | Should be in YYYY-MM-DD format  |
|  endDate | String  | Should be in YYYY-MM-DD format  |
|  minCount | Number  | Minimum count for filtering  |
|  maxCount |  Number |  Maximum count for filtering |

## Validation
Request data is validated using Joi. Check the documentation for more details on how to write Joi validation schemas.

The validation schemas are defined in the src/validations directory and are used in the routes by providing them as parameters to the validate middleware.

## Logging
Write logs to logs/network/access.log with morgan. In app.js:

```
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

const accessLogStream = fs.createWriteStream(path.join(__dirname,"logs/network","access.log"), {flags: 'a'});
app.use(morgan("combined", {stream: accessLogStream}));

```
### Deploy edilen proje linki
https://github.com/nisanurbaydas/getir-nodejs-bootcamp-graduation-project-nisanurbaydas
https://getir-graduation-case.herokuapp.com/records
