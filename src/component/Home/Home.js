import React from 'react';
import { Carousel } from 'react-bootstrap';
import Faq from '../FAQ/Faq';
import Service from '../Service/Service';
import Video from '../Video/Video';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://st4.depositphotos.com/9999814/24254/i/1600/depositphotos_242549772-stock-photo-medical-healthcare-concept-doctor-hospital.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>1</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://st4.depositphotos.com/9999814/24255/i/1600/depositphotos_242553914-stock-photo-medical-healthcare-concept-doctor-hospital.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>2</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/z/medical-healthcare-concept-doctor-hospital-medical-icons-modern-interface-showing-symbol-medicine-innovation-medical-108682578.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>3</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br /> <br />
<div>
<Service></Service>
</div>
<br /> <br />
<div className=" m-4">


<br />
<Video></Video>
<br />
<Faq></Faq>


</div>
        </div>
    );
};

export default Home;