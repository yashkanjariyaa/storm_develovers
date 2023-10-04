const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const feedbackSchema = require("../models/adminFeedBack");

const app = express();
app.use(cors());
app.use(express.json());

const feedbackAdminController = async (req, res) => {
    const { employeeId } = req.params;
    try {
      if(!employeeId){
        const feedbackAdmin = await feedbackSchema.find();
      }
      const feedbackAdmin = await feedbackSchema.find({ employeeId });
      res.json(feedbackAdmin);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching feedbackAdmin data'});
  }
};

module.exports = {
    feedbackAdminController,
}