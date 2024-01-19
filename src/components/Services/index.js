import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Col,Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import 'bootstrap/dist/css/bootstrap.css';
import placeholder from '../../Assets/images/placeholder.png'

export default function Services() {
    const servicesData = [
   
      {
        title: 'Wheelchair Assistance',
        description: 'Safe and comfortable transportation for individuals with mobility challenges, using wheelchair-accessible vehicles and trained staff.',
        imageUrl: placeholder
      },
      {
        title: 'Stretcher Transportation',
        description: 'Specialized service for patients requiring transport in a lying down position, ensuring comfort and medical support during transit.',
        imageUrl: placeholder
      },
      {
        title: 'Door-to-Door Service',
        description: 'Convenient and personalized transportation directly from the individual\'s residence to the designated medical facility or vice versa.',
        imageUrl: placeholder
      },
      {
        title: 'Scheduled Appointments',
        description: 'Reliable scheduling of transportation services for medical appointments, treatments, and follow-up visits, prioritizing punctuality.',
        imageUrl: placeholder
      },
      // Add more services as needed
    ];
  
  return (
    <div>
      <Header page="services" />
      <div className="services-container">
        <h2>Our Services</h2>
        <Row>
        {servicesData.map((service, index) => (
          <Col key={index} className="service-item">
              <ServiceCard det={service}/>
          </Col>
        ))}
        </Row>
        
      </div>
      <Footer />
    </div>
  )
}
