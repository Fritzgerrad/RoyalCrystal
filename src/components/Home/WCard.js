import React from 'react';
import { Col,Card,Image } from 'react-bootstrap';

function WCard(props) {
  return (
      <Col>
        <Card border="info" id='whyUsInnerCard'>
            <Card.Body>
                <Image src={props.image} style={{height:'3em',width:'4em',margin:'8px'}}/>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{fontSize:"1em"}}>{props.desc}</Card.Text>
            </Card.Body>
        </Card>
      </Col>
  )
}


export default WCard;