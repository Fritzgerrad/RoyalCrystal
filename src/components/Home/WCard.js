import React from 'react';
import { Col,Card,Image } from 'react-bootstrap';

function WCard(props) {
  return (
    <div>
    <Col md={4} sm={8} xs={4} lg={4} xl={4} className='whyUsCard'>

    <Card border="info" id='whyUsInnerCard'>
            <Card.Body>
                <Image src={props.image} style={{height:'3em',width:'4em',margin:'8px'}}/>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{fontSize:"1em"}}>{props.desc}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
    </div>
  )
}


export default WCard;