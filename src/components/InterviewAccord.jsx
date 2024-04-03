import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { arrowdown, arrowup } from './helper/icons'; 

const InterviewAccord = ({ questions }) => {
    return (
        <Accordion defaultActiveKey="0" expandIcon={arrowdown} collapseIcon={arrowup}>
            {questions.map((item, index) => (
                <Accordion.Item className="acc-item" eventKey="1" key={index}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body className="acc-body">
                        <p>{item.answer}</p>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default InterviewAccord;