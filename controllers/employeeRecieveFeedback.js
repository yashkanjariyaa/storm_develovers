const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

// const userSchema = require("./models/userModel.js");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const employeeRecieveFeedback = async (req, res) =>{
    try{
      const employeeID = req.params;
      const employeeRecieve = await employeeRecieve.find(employeeID)
      return res.status(200).json({employeeRecieve});
    }catch {
      return res.status(500).json({error:"Error"});
    }
  }

module.exports = {
    employeeRecieveFeedback,
};