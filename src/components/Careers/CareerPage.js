import React from 'react';
import CareerCard from './CareerCard';
import { Row } from 'react-bootstrap';

import carertaker from '../../Assets/images/Carere.jpeg'
import driver from '../../Assets/images/MaleNurse.jpeg'
import customerService from '../../Assets/images/CustomerService.jpeg'


const CareerPage = () => {
  return (
    <div style={{margin:'30px auto',width:'fit-content'}}>
      <h1 style={{fontWeight:'bold',textAlign:'center'}}>Join Our Team</h1>
      <p style={{textAlign:'center'}}>Explore exciting career opportunities at Royal Crystal.</p>
      <div className='blocks2'>

          <CareerCard 
          roleName="Drivers" 
          roleDesc="We are looking for dedicated individuals to join our team as drivers. If you enjoy helping others and ensuring safe transportation to medical appointments, we want to hear from you." 
          image={driver}
          applicationLink = "http://bit.ly/VehicleDriverApplication"
          />

          <CareerCard 
          roleName='Customer Service Representatives' 
          roleDesc="If you have excellent communication skills and a passion for providing exceptional service, we invite you to join our customer service team."
          image={customerService}
          applicationLink = "https://bit.ly/CustomerRepApplication"
          />

          <CareerCard 
          roleName='Caretaker Positions' 
          roleDesc="Caretakers play a crucial role in ensuring the well-being of our passengers. If you have experience in caregiving and a compassionate attitude, consider joining us as a caretaker."
          image={carertaker}
          applicationLink = "https://bit.ly/CaretakerApplication"
          />
      </div>
      <Row>
      <p style={{fontWeight:'bold',margin:'20px'}}>
        Don't see the role you're looking for? We're always interested in hearing from talented individuals. Send your resume to careers@royalcrystalnemt.com.
      </p>
      </Row>
    </div>
  );
};

export default CareerPage;
