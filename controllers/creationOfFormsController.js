const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const surveyForm = require('../models/surveyFormSchema');

const app = express();
app.use(cors());
app.use(express.json());

const surveyFormController = async (req, res) => {
    if (!req.body) {
      return res.status(400).json({ error: "Bad Request" });
    }
    try {
      await surveyForm.create({
        form_name: req.body.name,
        form_id: req.body.id,
        question: req.body.questionObject,
      });
      res.json({ status: "ok" });
    } catch (err) {
      console.log(err);
      res.json({ status: "error", error: err });
    }
  };

module.exports = {
    surveyFormController
};