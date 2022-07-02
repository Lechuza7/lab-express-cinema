const express = require('express');
const router = express.Router();

const cinema = require("../controllers/cinema.controller");

// Routes here

router.get("/", cinema.index);
router.get("/movies", cinema.movies);

module.exports = router;
