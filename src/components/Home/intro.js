import React from 'react'
import { Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row'
import nemtGuy from '../../Assets/images/NemtGuy.jpeg';

export default function Intro() {
  return (
    <div style={{backgroundColor:'#4103fc'}}>
        <Container id="intro" className="intro" fluid>
            <Row className='mx-1'>
                <Col xs={12} md={12} lg={5} className='pt-lg-4'>
                    <Image src={nemtGuy} style={{height:"80%",width:'100%'}}/>
                </Col>

                <Col xs={12} md={12} lg={7} className='pt-lg-5'>
                    <h1 className='text-center text-uppercase' style={{fontWeight:'bold',color:'#050a30',fontSize:'6rem'}}>
                        Royal Crystal
                    </h1>
                    <h2  className='text-center' style={{fontWeight:'bold',color:'#050a30',fontSize:'3rem'}}>
                        Non-Emergency Medical Transport Services
                    </h2>
                    <p className='pt-5' style={{fontSize:'1.2rem', textAlign:'justify'}}>
                        Welcome to Royal Crystal NEMT – your premier choice for non-emergency medical transportation. 
                        At Royal Crystal, we prioritize your well-being with safe, affordable, and compassionate transportation.
                        Our well-maintained fleet, punctual service and caring drivers ensure a comfortable journey for you or 
                        your loved ones.
                    </p>
                </Col>
            </Row>
    </Container>
       
    </div>
  )
}
