import React, { useState } from 'react';

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
        <button onClick={() => removeQuestion(index)}>Remove</button>
      </div>
    ));
  };

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
}

export default FormBuilder;
