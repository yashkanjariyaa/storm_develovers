import React, { useState } from 'react';
import '../styles/FormBuilder.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@mui/material/styles";
import { darkGreentheme } from "../themes/darkGreen";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";


function FormBuilder() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const handleQuestionChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const addQuestion = () => {
    if (newQuestion.trim() === '') return;

    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
    setNewQuestion('');
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const renderQuestions = () => {
    return questions.map((question, index) => (
      <div key={index}>
        {question}
        {/* <button onClick={() => removeQuestion(index)}>Remove</button> */}
        <Button variant="outlined" color="error" onClick={() => removeQuestion(index)}>
      Remove
      </Button>
      </div>
    ));
  };

  return (
    <>
      <ThemeProvider theme={darkGreentheme}>
      <Container component="main" maxWidth="l">
        <CssBaseline />
          <div className='formbuilder'>
            <div>
              <h1 className='title'>Enter the questions to be asked:</h1>
            </div>
            <br />
            <div className='inp'>
              {/* <input 
                className='inp_area'
                type="text"
                placeholder="Enter a question"
                value={newQuestion}
                onChange={handleQuestionChange}
              /> */}
              <TextField
              className='inp_area' 
              id="outlined-textarea"
              label="Enter a question"
              value={newQuestion}
              onChange={handleQuestionChange}
              placeholder="Placeholder"
              multiline
            />
              {/* <button className='btn' onClick={addQuestion}>Add Question</button> */}
              <Button className='btn' variant="outlined" onClick={addQuestion}>Add Question</Button>
            </div>
            <br />
            <div className='preview'>
              <h2 style={{color:'green', fontSize:'2rem'}}>Form Preview:</h2>
              {renderQuestions()}
            </div>
          </div>
        </Container>
    </ThemeProvider>
    </>
  );
}

export default FormBuilder;
