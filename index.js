const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const port = 1337;

const { surveyController, feedbackController } = require("./controllers/surveyFeedbackController.js");
const { feedbackAdminController, surveyAdminController } = require("./controllers/AdminController.js");
const { KPIController } = require("./controllers/KPIs.js");
const { surveyFormController } = require("./controllers/creationOfFormsController.js");
const { formDisplay } = require("./controllers/formDisplayController.js");

const { signIn, signUp, check } = require("./controllers/authorization.js");
const { serverRecieveFeedback } = require("./controllers/serverRecieveFeedback.js");
const { employeeRecieveFeedback } = require("./controllers/employeeRecieveFeedback.js");


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, application/json");
  next();
});

const url =
  "mongodb+srv://yashkanjariya:CUBWIhrmxgkmylgW@cluster0.3xwfsbj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
});
mongoose.connection.on("error", function (error) {
  console.log(error);
});
mongoose.connection.on("open", function () {
  console.log("Connected to MongoDB database.");
});

app.post("/api/login", signIn);

app.post("/api/register", signUp);

app.post("/api/check", check);

app.post('/api/survey', surveyController);  //for server

app.post('/api/feedback', feedbackController);  

app.post('/api/feedbackAdmin', feedbackAdminController);

app.post('/api/surveyAdmin', surveyAdminController);

app.get('/api/KPIController', KPIController);

app.post('/api/questions', surveyController);

app.get('/api/formDisplay', formDisplay);

app.get('/api/serverRecieveFeedback', serverRecieveFeedback);

app.get('/api/employeeRecieveFeedback', employeeRecieveFeedback);


app.listen(port, () => {
  console.log("App is listening on " + port);
});
