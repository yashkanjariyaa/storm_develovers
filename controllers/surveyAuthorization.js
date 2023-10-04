const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

// const userSchema = require("./models/userModel.js");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

//user survey and feedback

const surveyController = async (req, res) => {
    const { employeeId } = req.params;
  
    try {
      const survey = await survey.find({ employeeId });
      res.json(survey);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching survey data'});
  }
};

const feedbackController = async (req, res) => {
    const { employeeId } = req.params;
  
    try {
      const feedback = await feedback.find({ employeeId });
      res.json(feedback);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching feedback data'});
  }
};

module.exports = {
    surveyController,
    feedbackController,
};
  