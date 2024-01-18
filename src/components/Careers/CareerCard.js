import React from 'react'
import { Card,Image,Button } from 'react-bootstrap'
export default function CareerCard(props) {

  return (
    <div>
        <Card border="info" style={{ width: '20rem',height:'25rem' }}>
            <Card.Body>
                <Image src={props.image} style={{height:'90px',width:'90px',margin:'8px'}}/>
                <Card.Title>{props.roleName}</Card.Title>
                <Card.Text>
                    {props.roleDesc}
                </Card.Text>
                <a href={props.applicationLink} target='_blank' rel="noreferrer" ><Button style={{marginTop:'auto'}}>Apply</Button></a>
            </Card.Body>
        </Card>
    </div>
  )
}
