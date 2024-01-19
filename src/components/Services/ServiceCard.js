import React from 'react';
import { Card,Image } from 'react-bootstrap';

function ServiceCard(props) {
  return (
    <div>
      <Card border="info" style={{ width: '17rem',height:'26rem',margin:'10px 0'}}>
            <Card.Body>
                <Image src={props.det.imageUrl} style={{height:'13rem',width:'14rem',margin:'4px'}}/>
                <Card.Title>{props.det.title}</Card.Title>
                <Card.Text>
                    {props.det.description}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}


export default ServiceCard;
