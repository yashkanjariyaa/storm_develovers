const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());



module.exports = {
    adminFeedback,
};