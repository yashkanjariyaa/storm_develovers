const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

// const userSchema = require("./models/userModel.js");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

//KPI's

const KPIController = async (req, res) =>{
    try{
      const KPI = await symptoms.find()
      return res.status(200).json({KPI});
    }catch {
      return res.status(500).json({error:"Error"});
    }
  }

  module.exports = {
    KPIController,
  };
