const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const serverRecieveFeedback = async(req, res) => {
    const feedback = req.body.feedback;
    
    res.json({ message: 'Feedback received successfully!' });
  };

module.exports = {
    serverRecieveFeedback,
};
