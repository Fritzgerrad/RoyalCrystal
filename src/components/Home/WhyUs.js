import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Card,Image } from 'react-bootstrap';
import businessMan from '../../Assets/images/businessMan.png';
import ambulanceSilhoutte from '../../Assets/images/ambulanceSilhouette.png';
import punctualSilhouette from '../../Assets/images/punctual.jpeg';
import affordabilitySilhouette from '../../Assets/images/affordabilitySilhouette.png';
import careSilhouette from '../../Assets/images/careSilhouette.png';
import safetySilhouette from '../../Assets/images/safetyAndSecuritySilhouette.png'
import comfortSilhouette from '../../Assets/images/comfortSilhouette.png';
import licensedSilhouette from '../../Assets/images/licensedSilhouette.png';



export default function WhyUs() {
  return (
    <div>
      <h1>The Non Emergency Transport Company You Can Trust</h1>
        <div>
            <Row style={{margin:"0 10px",padding:'10px 0'}}>
                <Col className='whyUsCard'>
                <Card border="info" style={{ width: '18rem',height:'23rem' }}>
                        <Card.Body>
                            <Image src={businessMan} style={{height:'95px',width:'90px',margin:'8px'}}/>
                            <Card.Title>Trusted Professionals</Card.Title>
                            <Card.Text>
                            Our drivers undergo rigorous training to handle diverse medical transportation needs. With a focus on safety, empathy, and professionalism, our team ensures a smooth and secure journey for all passengers.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='whyUsCard'>
                <Card border="info" style={{ width: '18rem',height:'23rem' }}>
                        <Card.Body>
                            <Image src={ambulanceSilhoutte} style={{height:'100px',width:'130px'}}/>
                            <Card.Title>High Quality Vehicles</Card.Title>
                            <Card.Text>
                            Our fleet is meticulously maintained to the highest standards, ensuring a safe and comfortable journey for every passenger. From routine maintenance to cleanliness, we prioritize the well-being of our riders.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='whyUsCard'>
                <Card border="info" style={{ width: '18rem',height:'23rem' }}>
                        <Card.Body>
                            <Image src={punctualSilhouette} style={{height:'100px',width:'130px'}}/>
                            <Card.Title>Reliable and Punctual</Card.Title>
                            <Card.Text>
                            Time is of the essence when it comes to medical appointments. Count on us for prompt and dependable transportation. Our commitment to punctuality ensures that our riders reach their destinations on schedule.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='whyUsCard'>
                    <Card border="info" style={{ width: '18rem',height:'23rem' }}>
                        <Card.Body>
                            <Image src={affordabilitySilhouette} style={{height:'75px',width:'130px',margin:'15px 0'}}/>
                            <Card.Title>Affordable Solutions</Card.Title>
                            <Card.Text>
                            We believe in accessibility. Our pricing structure is designed to provide cost-effective transportation options without compromising the quality of service. At Royal  Crystal NEMT, affordability meets excellence.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{margin:"0 10px",padding:'10px 0'}}>
            <Col className='whyUsCard'>
                <Card border="info" style={{ width: '18rem',height:'23rem' }}>
                        <Card.Body>
                            <Image src={careSilhouette} style={{height:'100px',width:'100px'}}/>
                            <Card.Title>Genuine Care</Card.Title>
                            <Card.Text>
                            Beyond providing transportation, we prioritize the well-being of our passengers. Our staff are compassionate individuals who genuinely care about the comfort and safety of those they transport.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='whyUsCard'>

                <Card border="info" style={{ width: '18rem',height:'23rem' }}>
                        <Card.Body>
                            <Image src={safetySilhouette} style={{height:'90px',width:'90px',margin:'8px'}}/>
                            <Card.Title>Safety and Security</Card.Title>
                            <Card.Text>
                            Our vehicles adhere to strict safety standards, providing a secure environment for individuals with health concerns during transit.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='whyUsCard'>
                    <Card border="info" style={{ width: '18rem',height:'23rem' }}>
                            <Card.Body>
                                <Image src={comfortSilhouette} style={{height:'100px',width:'130px'}}/>
                                <Card.Title>Comfort</Card.Title>
                                <Card.Text>
                                Our vehicles are designed to accommodate various medical needs, offering a more comfortable and accommodating space than traditional transportation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                <Col className='whyUsCard'>
                    <Card border="info" style={{ width: '18rem',height:'23rem' }}>
                        <Card.Body>
                            <Image src={licensedSilhouette} style={{height:'105px',width:'130px'}}/>
                            <Card.Title>Fully Licensed</Card.Title>
                            <Card.Text>
                            After successfully meeting all performance and quality assurance standards set by regulatory bodies, we have obtained full licensing and accreditation, ensuring our capability to deliver top-notch services.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            

        </div>

    </div>
  )
}
