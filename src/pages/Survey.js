import * as React from "react";
import { useState } from "react";
import "../styles/Survey.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import AppBar from "../components/appBar";
import { ThemeProvider } from "@mui/material/styles";
import { darkGreentheme } from "../themes/darkGreen";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

export default function Survey() {
  const [SurveyData, setSurveyData] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const SurveyDataObj = {
    employeeId: 1,
    surveyQuestions: [],
    surveyAnswers: [],
    rateQuestions: [],
    rateAnswers: [],
  };

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  async function check() {
    try {
      const response = await fetch("http://localhost:1337/api/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });
      console.log(response);
      const data = await response.json();
      const validity = data.status;
      if (!data.error) {
        console.log(validity);
        if (validity === "invalid") {
          localStorage.removeItem("token");
          navigate("/sign-in");
        } else if (validity === "valid") {
          console.log("user authenticated!");
        } else {
          console.log("error during authentification");
        }
      } else {
        console.log(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  }
  check();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/survey/123`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ SurveyDataObj }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
      } else {
        throw new Error("Error submitting survey");
      }
    } catch (error) {
      console.error(error);
    }
  };

  /*function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }*/
  const [tenValue, setTenValue] = React.useState(4.5);
  const [elevenValue, setElevenValue] = React.useState(4.5);
  const [hover, setHover] = React.useState(-1);
  return (
    <>
      <ThemeProvider theme={darkGreentheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <AppBar />
        </Container>
      </ThemeProvider>
      <div class="box">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Were you provided with clear expectations for your tasks and goals
          </FormLabel>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">
            Did you receive constructive feedback on your performance?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">
            Do you feel comfortable providing feedback to your supervisor?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">
            Are you excited to come to work each day?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">
            Are you able to maintain a healthy work-life balance?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">
            Did you have opportunities for skill development or training?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">
            Do you feel like your team is aligned with the company's goals?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">
            Do you feel like the company is transparent about its goals and
            progress?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">
            Do you feel like you have the opportunity to grow and develop your
            career at the company?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <p>
            On a scale of 1-10 , how much would you rate your mood on an
            active work day ?
          </p>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={tenValue}
              precision={0.5}
              onChange={(event, newValue) => {
                setTenValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {/*tenValue !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : tenValue]}</Box>
                        )*/}
          </Box>

          <p>
            On a scale of 1-10, how satisfied are you with your work environment
          </p>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={elevenValue}
              precision={0.5}
              onChange={(event, newValue) => {
                setElevenValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {/*elevenValue !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : elevenValue]}</Box>
                        )*/}
          </Box>
        </FormControl>
      </div>
    </>
  );
}
