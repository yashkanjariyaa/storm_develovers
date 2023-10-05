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

const feedbackController = async (req, res) => {
  try {
    const employeeId = await req.body.employeeId;
    const text = await req.body.text;
      await feedBackSchema.create({
        employeeId: employeeId,
        text : text
      });
      res.status(200).json({ message: "successfully submitted" });
  } catch (error) {
    res.status(500).json({ message : "Error fetching feedback data"});
    console.log(error);
  }
};

const surveyController = async (req, res) => {
  try {
    const surveyData = await req.body;
      await surveySchema.create({
        employeeId: surveyData.employeeId || 'anonymous',
        surveyAnswers : surveyData.surveyAnswers,
        rateAnswers : surveyData.rateAnswers
      });
    res.json({message : 'successfully submitted'});
  } catch (error) {
    res.status(500).json({ message : "Error fetching survey data", err : error});
    console.log(error); 
  }
};

module.exports = {
  surveyController,
  feedbackController,
};
