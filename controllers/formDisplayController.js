const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const formDisplay = async (req, res) => {
  try {
    const form = await form.find();
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching form data' });
  }
};

module.exports = {
  formDisplay,
};
