const express = require("express");
const router = express.Router();
const { createBoginoo, getBoginoo } = require('../controller/controller');

router

.post("/", createBoginoo)
// .get("/", getBoginoo)
// .get(    "/:id", getBoginoo)

module.exports = router;