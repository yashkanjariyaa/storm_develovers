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
  try {
    const feedbackData = await req.body.feedBackData;
    if (feedbackData) {
      await feedBackSchema.create({
        employeeId: feedbackData.employeeId,
        hygieneStatus: feedbackData.hygieneStatus,
        colleagueStatus: feedbackData.colleagueStatus,
        juniorStatus: feedbackData.juniorStatus,
        seniorStatus: feedbackData.seniorStatus,
        staffStatus: feedbackData.staffStatus,
        parkingStatus: feedbackData.parkingStatus,
        washRoomStatus: feedbackData.washRoomStatus,
      });
      res.json({ message: "successfully submitted" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching survey data" });
  }
};

const feedbackController = async (req, res) => {
  try {
    const surveyData = await req.body.surveyData 
    if(surveyData){
      await surveySchema.create({
        employeeId: surveyData.employeeId,
        surveyQuestions : surveyData.surveyQuestions,
        surveyAnswers : surveyData.surveyAnswers,
        rateQuestions : surveyData.rateQuestions,
        rateAnswers : surveyData.rateAnswers
      });
    }
    res.json({message : 'successfully submitted'});
  } catch (error) {
    res.status(500).json({ error: "Error fetching feedback data" });
  }
};

module.exports = {
  surveyController,
  feedbackController,
};
