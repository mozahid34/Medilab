import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
    
    return (
        <div>
            <h2>Our Services</h2>
            <CardGroup className="">
            <Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>Doctor Appointment</Card.Title>
    <Card.Text>
    Find your doctor easily with a minimum of effort. We've kept everything organised for you.
    </Card.Text>
    <button  variant="primary"> <Link to = "/details">Details</Link>  </button> 
  </Card.Body>
</Card>
            <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>Emergency Health Service</Card.Title>
    <Card.Text>
    Accident and Emergency Centre, which deals with all kinds of emergencies under one roof 24 hours a day, 7 days a week. The Centre is managed by UK-qualified Consultant, experienced in Emergency Medicine. The Centre has eight dedicated emergency beds, as well as four triage beds. In case of any emergency, one call is enough to avail our ambulance pick-up round-the-clock. Our fleet of ambulance is well-equipped and manned by trained emergency technicians and paramedics.
    </Card.Text>
    <button variant="primary"> <Link to = "/details">Details</Link>  </button> 
  </Card.Body>
</Card>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="http://www.vakhospital.com/wp-content/uploads/diagnostics.jpg" />
  <Card.Body>
    <Card.Title>Diagonistic Service</Card.Title>
    <Card.Text>
    Our laboratory equipment is state-of-the-art and equivalent to what you might find in some of the best labs in the world. Its PCR equipment is manufactured by Roche and Thermofisher. Medilab also only uses reagents recommended and approved for COVID-19 testing by the WHO.
    </Card.Text>
    <button variant="primary"> <Link to = "/details">Details</Link>  </button> 
  </Card.Body>
</Card>
            
</CardGroup>
            <CardGroup className="">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.theconversation.com/files/296159/original/file-20191009-3867-dvwfmu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" />
  <Card.Body>
    <Card.Title>Pharmacy Service</Card.Title>
    <Card.Text>
    The ageing of the population, technological advances, new public health threats, evolving patients expectations and shrinking budget are putting under pressure health care systems in Europe and beyond. An increasing portion of health care expenditure is on pharmaceutical and chronic diseases. All these factors are pushing for change. And community pharmacy is changing too to respond to these challenges and meet patients’ needs by shifting the focus from dispensing medicines and diseases to patient care and quality of services.
    </Card.Text>
    <button variant="primary"> <Link to = "/details">Details</Link>  </button> 
  </Card.Body>
</Card>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.news-medical.net/image.axd?picture=2021%2F2%2FGrjH4AAAAASUVORK5CYII%3D.png" />
  <Card.Body>
    <Card.Title>Telemedicine Service</Card.Title>
    <Card.Text>
    Through this service, admitted patients in district and sub-district level hospitals can take suggestions from the doctors of specialized hospitals without need for visiting the higher level hospitals. Besides, web-camera has been given in each sub-district, district, medical college and post-graduate institute hospitals. These hospitals, therefore, can also give tele-medicine service using Skype or any other video conferencing platform.
    </Card.Text>
    <button variant="primary"> <Link to = "/details">Details</Link>  </button> 
  </Card.Body>
</Card>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="data:image/png;base64,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" />
  <Card.Body>
    <Card.Title>24/7 Helpline</Card.Title>
    <Card.Text>
    Whatever you're going through, call us free any time, from any phone, on 123. Our helpline open for you 24 hours in day. 7 days in a week.
    </Card.Text>
    <button variant="primary"> <Link to = "/details">Details</Link>  </button> 
  </Card.Body>
</Card>
            
</CardGroup>
        </div>
    );
};

export default Service;