import React from 'react';
import { Card,Image } from 'react-bootstrap';


export default function FleetCar(props) {
  return (
    <Card border="info" style={{ width: '25rem',height:'20rem',margin:"10px 0"}}>
        <Card.Body>
            <Card.Title>{props.busName}</Card.Title>
            <Image src={props.image} style={{height:'200px',width:'240px',margin:'8px'}}/>
            <Card.Text>
                {props.busSpec}
            </Card.Text>
        </Card.Body>
    </Card>

  )
}
