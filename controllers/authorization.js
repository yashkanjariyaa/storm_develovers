const bcrypt = require("bcryptjs");
const userSchema = require("../models/authSchema.js");
const jwt = require("jsonwebtoken");
const jwtkey = "dontreact@15^-202";

//user login and register
const signUp = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "Bad Request" });
  }
  try {
    const cryptedPassword = await bcrypt.hash(req.body.password, 10);
    await userSchema.create({
      name: req.body.name,
      email: req.body.email,
      password: cryptedPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
};

const signIn = async (req, res) => {
  try {
    const user = await userSchema.findOne({
      email: req.body.email,
    });
    if (!user) {
      return { status: "error", error: "Invalid Login" };
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordValid) {
      const token = jwt.sign({ email: user.email }, jwtkey);
      return res.json({ status: "ok", user: token });
    } else {
      return res.json({ status: "error", user: false });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
};

const check = async (req, res) => {
  try {
    const token = req.body.token;
    const valid = await jwt.decode(token);
    if (!valid) {
      res.json({ status: "invalid" });
    } else {
      res.json({ status: "valid" });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
};
module.exports = {
  signIn,
  signUp,
  check,
};
