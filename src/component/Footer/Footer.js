import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="foot d-flex ">
            <div className="d-flex title">
                <h2>MediLab</h2>
            </div>

            <div>
                <h4>Our Service</h4>
                <ul>
                    <li>Doctor Appointment</li>
                    <li>Emergency Service</li>
                    <li>Diagonis Service</li>
                    <li>Pharmacy Service</li>
                    <li>24/7 HelpLine</li>
                </ul>
                
            </div>
            
        </div>
    );
};

export default Footer;