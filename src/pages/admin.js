import React, { useEffect, useState } from 'react';


export default function admin(){
    const FeedbackForm = () => {
        const [feedbackData, setFeedbackData] = useState(null);
      
        useEffect(() => {
          const employeeId = '123'; // Replace with actual employeeId
          fetch(`/api/feedbackAdmin/${employeeId}`)
            .then(response => response.json())
            .then(data => setFeedbackData(data))
            .catch(error => console.error('Error fetching feedback:', error));
        }, [])
        return(
            <>
            <p>feedBackData</p>
            </>
        )
    }
}

