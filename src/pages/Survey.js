import * as React from 'react';
import { useState } from 'react';
import '../styles/Survey.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import AppBar from '../components/appBar';
import '../styles/appbar.css';
import { ThemeProvider } from '@mui/material/styles';
import { darkGreentheme } from '../themes/darkGreen';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

export default function Survey() {
  const [tenValue, setTenValue] = React.useState(4.5);
  const [elevenValue, setElevenValue] = React.useState(4.5);
  const [hover, setHover] = React.useState(-1);
  const [surveyAnswers, setSurveyAnswers] = useState([]);
  const [rateAnswers, setRateAnswers] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const addValueAtIndex = (value, index) => {
    // Create a copy of the current array
    const newSurveyAnswers = [...surveyAnswers];
    // Insert the value at the specified index
    newSurveyAnswers.splice(index, 0, value);
    // Update the state with the new array
    setSurveyAnswers(newSurveyAnswers);
  };

  async function check() {
    try {
      const response = await fetch('http://localhost:1337/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
        if (validity === 'invalid') {
          localStorage.removeItem('token');
          navigate('/sign-in');
        } else if (validity === 'valid') {
          console.log('user authenticated!');
        } else {
          console.log('error during authentification');
        }
      } else {
        console.log(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    check();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("handling submit");
    setRateAnswers({
      tenvalue: tenValue,
      elevenValue: elevenValue,
    });
    const SurveyDataObj = {
      employeeEmail: localStorage.getItem("employeeEmail"),
      employeeId: localStorage.getItem("userEmployeeId"),
      surveyAnswers: surveyAnswers,
      rateAnswers: rateAnswers,
    };
    console.log(SurveyDataObj);
    try {
      const response = await fetch('http://localhost:1337/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(SurveyDataObj),
      });
      console.log(response);
      const responseData = await response.json();
      console.log(responseData.message);
      if(responseData.status){
        alert('Form already submitted' + ' '+ response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }

  /*function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }*/
  return (
    <>
      <ThemeProvider theme={darkGreentheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <AppBar />
      <div className="box">
        <FormControl>
          <form>
            
            <div className="ques" >
              <FormLabel id="demo-radio-buttons-group-label">
                Were you provided with clear expectations for your tasks and
                goals
              </FormLabel>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
              onChange={(e) => {
                addValueAtIndex(e.target.value, 0);
              }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>

            <div className="ques" >
            <FormLabel id="demo-radio-buttons-group-label">
              Did you receive constructive feedback on your performance?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
              onChange={(e) => {
                addValueAtIndex(e.target.value, 1);
              }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>

            <div className="ques">
            <FormLabel id="demo-radio-buttons-group-label">
              Do you feel comfortable providing feedback to your supervisor?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
              onChange={(e) => {
                addValueAtIndex(e.target.value, 2);
              }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>

            <div className="ques" >
            <FormLabel id="demo-radio-buttons-group-label">
              Are you excited to come to work each day?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
              onChange={(e) => {
                addValueAtIndex(e.target.value, 3);
              }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>

            <div className="ques" >
            <FormLabel id="demo-radio-buttons-group-label">
              Are you able to maintain a healthy work-life balance?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
              onChange={(e) => {
                addValueAtIndex(e.target.value, 4);
              }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>

            <div className="ques" >
            <FormLabel id="demo-radio-buttons-group-label">
              Did you have opportunities for skill development or training?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
              onChange={(e) => {
                addValueAtIndex(e.target.value, 5);
              }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>

            <div className="ques" >
            <FormLabel id="demo-radio-buttons-group-label">
              Do you feel like your team is aligned with the company's goals?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
              onChange={(e) => {
                addValueAtIndex(e.target.value, 6);
              }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>

            <div className="ques" >
            <FormLabel id="demo-radio-buttons-group-label">
              Do you feel like the company is transparent about its goals and
              progress?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
              onChange={(e) => {
                addValueAtIndex(e.target.value, 7);
              }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>

            <div className="ques" >
            <FormLabel id="demo-radio-buttons-group-label">
              Do you feel like you have the opportunity to grow and develop your
              career at the company?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="radio-buttons-group"
              onChange={(e) => {
                addValueAtIndex(e.target.value, 8);
              }}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </div>

            <div className="ques" >
            <p>
              On a scale of 1-10 , how much would you rate your mood on an
              active work day ?
            </p>
            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Rating
                name="hover-feedback"
                value={parseFloat(tenValue)}
                precision={0.5}
                onChange={(e) => {
                  setTenValue(e.target.value);
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
            </div>

            <div className="ques" >
            <p>
              On a scale of 1-10, how satisfied are you with your work
              environment
            </p>
            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Rating
                name="hover-feedback"
                value={parseFloat(elevenValue)}
                precision={0.5}
                onChange={(e) => {
                  setElevenValue(e.target.value);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {/*elevenValue !== null && (`
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : elevenValue]}</Box>
                        )*/}
            </Box>
            </div>
            <Button
              variant="outlined"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </Button>
       </form>
       </FormControl>
       </div>
       <Footer/>
       </Container>
       </ThemeProvider>
       </>
       );
    }