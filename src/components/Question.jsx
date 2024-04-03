import React from "react";
import InterviewAccord from "./InterviewAccord";
import questions from "./helper/data"; 

function Question() {
  return (
    <div className="content">
      <InterviewAccord questions={questions} /> 
    </div>
  );
}

export default Question;