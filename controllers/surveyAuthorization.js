const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const feedBackSchema = require("../models/feedbackSchema");
const surveySchema = require("../models/surveySchema");
// const userSchema = require("./models/userModel.js");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

//user survey and feedback

const surveyController = async (req, res) => {
    const { employeeId } = req.params;
    try {
      const feedbackData = await feedBackSchema.find({ employeeId });
      res.json(feedbackData);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching survey data'});
  }
};

const feedbackController = async (req, res) => {
    const { employeeId } = req.params;
    try {
      const surveyData = await surveySchema.find({ employeeId });
      res.json(surveyData);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching feedback data'});
  }
};

module.exports = {
    surveyController,
    feedbackController,
};
  