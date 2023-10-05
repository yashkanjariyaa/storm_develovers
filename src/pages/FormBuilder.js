import React, { useState } from 'react';

function FormBuilder() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [formId, setFormId] = useState('');
  const [formName, setFormName] = useState('');



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
        <button onClick={() => removeQuestion(index)}>Remove</button>
      </div>
    ));
  };
  async function handleSubmit(){
    try {
      const response = await fetch("http://localhost:3000/api/formId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questions,
          formId,
          formName,
        }),
      });
      
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
      } else {
        throw new Error("Error creating forms");
      }
    } catch (error) {
      console.error(error);
    }  
  }
  
  return (
    <div>
      <h1>Enter the questions to be asked:</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a question"
          value={newQuestion}
          onChange={handleQuestionChange}
        />
        <button onClick={addQuestion}>Add Question</button>
      </div>
      <div>
        <h2>Form Preview:</h2>
        {renderQuestions()}
      </div>
    </div>
  );
};

export default FormBuilder;
