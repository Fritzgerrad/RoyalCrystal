import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Card,Image } from 'react-bootstrap';
import businessMan from '../../Assets/images/1.png';
import ambulanceSilhoutte from '../../Assets/images/2.png';
import punctualSilhouette from '../../Assets/images/3.png';
import affordabilitySilhouette from '../../Assets/images/4.png';
import careSilhouette from '../../Assets/images/5.png';
import safetySilhouette from '../../Assets/images/6.png'
import comfortSilhouette from '../../Assets/images/7.png';
import licensedSilhouette from '../../Assets/images/8.png';


export default function WhyUs() {
  return (
    <div style={{backgroundColor:'#4103f', padding:'1%'}}>
      <h1 style={{fontWeight:'bold',color:'#050a30'}}>The Non Emergency Transport Company You Can Trust</h1>
        <div>
            <Row style={{margin:"0 10px",padding:'10px 0'}}>
                <Col className='whyUsCard'>
                <Card border="info" id='whyUsInnerCard'>
                        <Card.Body>
                            <Image src={businessMan} style={{height:'48px',width:'48px',margin:'8px'}}/>
                            <Card.Title>Trusted Professionals</Card.Title>
                            <Card.Text>
                            Our drivers undergo rigorous training to handle diverse medical transportation needs. With a focus on safety, empathy, and professionalism, our team ensures a smooth and secure journey for all passengers.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='whyUsCard'>
                <Card border="info" id='whyUsInnerCard'>
                        <Card.Body>
                            <Image src={ambulanceSilhoutte} style={{height:'70px',width:'65px',margin:'0px',backgroundColor:'ffffff'}}/>
                            <Card.Title>High Quality Vehicles</Card.Title>
                            <Card.Text>
                            Our fleet is meticulously maintained to the highest standards, ensuring a safe and comfortable journey for every passenger. From routine maintenance to cleanliness, we prioritize the well-being of our riders.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='whyUsCard'>
                <Card border="info" id='whyUsInnerCard'>
                        <Card.Body>
                            <Image src={punctualSilhouette} style={{height:'50px',width:'75px',margin:'9px'}}/>
                            <Card.Title>Reliable and Punctual</Card.Title>
                            <Card.Text>
                            Time is of the essence when it comes to medical appointments. Count on us for prompt and dependable transportation. Our commitment to punctuality ensures that our riders reach their destinations on schedule.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='whyUsCard'>
                    <Card border="info" id='whyUsInnerCard'>
                        <Card.Body>
                            <Image src={affordabilitySilhouette} style={{height:'50px',width:'59px',margin:'9px 9px'}}/>
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
                <Card border="info" id='whyUsInnerCard'>
                        <Card.Body>
                            <Image src={careSilhouette} style={{height:'50px',width:'50px',margin:'7px'}}/>
                            <Card.Title>Genuine Care</Card.Title>
                            <Card.Text>
                            Beyond providing transportation, we prioritize the well-being of our passengers. Our staff are compassionate individuals who genuinely care about the comfort and safety of those they transport.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='whyUsCard'>

                    <Card border="info" id='whyUsInnerCard'>
                        <Card.Body>
                            <Image src={safetySilhouette} style={{height:'45px',width:'45px',margin:'8px'}}/>
                            <Card.Title>Safety and Security</Card.Title>
                            <Card.Text>
                            Our vehicles adhere to strict safety standards, providing a secure environment for individuals with health concerns during transit.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='whyUsCard'>
                    <Card border="info" id='whyUsInnerCard'>
                            <Card.Body>
                                <Image src={comfortSilhouette} style={{height:'50px',width:'65px',margin:'6px'}}/>
                                <Card.Title>Comfort</Card.Title>
                                <Card.Text>
                                Our vehicles are designed to accommodate various medical needs, offering a more comfortable and accommodating space than traditional transportation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                <Col className='whyUsCard'>
                    <Card border="info" id='whyUsInnerCard'>
                        <Card.Body>
                            <Image src={licensedSilhouette} style={{height:'52px',width:'55px',margin:'7px'}}/>
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
