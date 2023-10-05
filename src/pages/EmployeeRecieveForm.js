import React, { useState } from 'react';
export default function adminSurvey(){
  const [formData, setFormData] = useState({});
  const getFormData = async (formID) => {
    const url = `http://localhost:3000/api/formId/${formID}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.error}`);
      }
  
      const formData = await response.json();
      console.log(formData); // Handle the response data'
      setFormData(formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  getFormData('123');
  return(
    <>
    hello</>
  )
}

