import React from "react";
import Accordion from "react-bootstrap/Accordion";

import { Card } from "react-bootstrap";

const InterviewAccord = ({ questions }) => {
    
  return (
    <Accordion
      defaultActiveKey="0"
      
    >
      {questions.map((item, index) => (
        <Card key={index}>
          <Accordion.Item className="acc-item" eventKey={index} >
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body className="acc-body">
              <p>{item.answer}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      ))}
    </Accordion>
  );
};

export default InterviewAccord;
