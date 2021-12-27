const { index } = require('../controllers/Record');
const validate = require('../middlewares/validate');
const {getFilteredRecords} = require('../validations/Record')

const express = require("express");


const router = express.Router();
 
router.post("/",validate(getFilteredRecords,"body"), index);

module.exports = router;