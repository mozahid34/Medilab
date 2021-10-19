import React from 'react';
import './Faq.css';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className="faq">
            <h3>FAQ</h3>
            <br />
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Q1. Do I need to download any app to my smartphone or to my desktop for having teleconsultation?</Accordion.Header>
    <Accordion.Body>
    No, you need not download or install any app for teleconsultation. It is a browserbased web application that can be accessed through a link to the site.
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="1">
    <Accordion.Header>Q2. How can I have the teleconsultation with the doctor of your hospital?</Accordion.Header>
    <Accordion.Body>
    You can access the link directly by typing ecare.evercarebd.com:8000/in the browser, or you can navigate by clicking the online consultation appointment link mentioned in our official website.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Q3. How will I get to know that my appointment request is accepted?</Accordion.Header>
    <Accordion.Body>
    We have been offering the service at a flat rate of BDT 1000 at this moment. Please check with our coordinator for details
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

        </div>
    );
};

export default Faq;