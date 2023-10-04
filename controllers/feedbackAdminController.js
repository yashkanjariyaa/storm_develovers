const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

// const userSchema = require("./models/userModel.js");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const feedbackAdminController = async (req, res) => {
    const { employeeId } = req.params;
  
    try {
      const feedbackAdmin = await feedbackAdmin.find({ employeeId });
      res.json(feedbackAdmin);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching feedbackAdmin data'});
  }
};

module.exports = {
    feedbackAdminController,
}