const { index } = require('../controllers/Record');

const express = require("express");


const router = express.Router();

router.get("/", index);

module.exports = router;