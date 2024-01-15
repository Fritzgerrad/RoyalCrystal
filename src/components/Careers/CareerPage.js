import React from 'react';
import CareerCard from './CareerCard';
import { Row,Col } from 'react-bootstrap';

import carertaker from '../../Assets/images/Carere.jpeg'
import driver from '../../Assets/images/MaleNurse.jpeg'
import customerService from '../../Assets/images/CustomerService.jpeg'


const CareerPage = () => {
  return (
    <div style={{margin:'30px'}}>
      <h1 style={{fontWeight:'bold'}}>Join Our Team</h1>
      <p>Explore exciting career opportunities at Royal Crystal.</p>
      <Row>

        <Col style={{marginBottom:'15px'}}>
          <CareerCard 
          roleName="Drivers" 
          roleDesc="We are looking for dedicated individuals to join our team as drivers. If you enjoy helping others and ensuring safe transportation to medical appointments, we want to hear from you." 
          image={driver}
          />
        </Col>

        <Col style={{marginBottom:'15px'}}>
          <CareerCard 
          roleName='Customer Service Representatives' 
          roleDesc="Join our customer service team to assist clients with their transportation needs. If you have excellent communication skills and a passion for providing exceptional service, we invite you to apply."
          image={customerService}
          />
        </Col>

        <Col style={{marginBottom:'15px'}}>
          <CareerCard 
          roleName='Caretaker Positions' 
          roleDesc="Caretakers play a crucial role in ensuring the well-being of our passengers. If you have experience in caregiving and a compassionate attitude, consider joining us as a caretaker."
          image={carertaker}
          />
        </Col>
      </Row>
      <Row>
      <p>
        Don't see the role you're looking for? We're always interested in hearing from talented individuals. Send your resume to careers@royalcrystalnemt.com.
      </p>
      </Row>
    </div>
  );
};

export default CareerPage;
