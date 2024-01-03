import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Card,Image } from 'react-bootstrap';
import businessMan from '../../Assets/images/businessMan.png';
import ambulanceSilhoutte from '../../Assets/images/ambulanceSilhouette.png';
import punctualSilhouette from '../../Assets/images/punctual.jpeg'


export default function OurServices() {
  return (
    <div>
      <h1>The Non Emergency Transport Company You Can Trust</h1>
        <div>
            <Row style={{margin:"20px",padding:'10px 0'}}>
                <Col>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Image src={businessMan} style={{height:'100px',width:'100px'}}/>
                            <Card.Title>Trusted Professionals</Card.Title>
                            <Card.Text>
                            Our drivers undergo rigorous training to handle diverse medical transportation needs. With a focus on safety, empathy, and professionalism, our team ensures a smooth and secure journey for all passengers.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Image src={ambulanceSilhoutte} style={{height:'100px',width:'130px'}}/>
                            <Card.Title>High Quality Vehicles</Card.Title>
                            <Card.Text>
                            Our fleet is meticulously maintained to the highest standards, ensuring a safe and comfortable journey for every passenger. From routine maintenance to cleanliness, we prioritize the well-being of our riders.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Image src={punctualSilhouette} style={{height:'100px',width:'130px'}}/>
                            <Card.Title>Reliable and Punctual</Card.Title>
                            <Card.Text>
                            Time is of the essence when it comes to medical appointments. Count on us for prompt and dependable transportation. Our commitment to punctuality ensures that our riders reach their destinations on schedule.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
              
            </Row>

        </div>

    </div>
  )
}
