import React from 'react';
import { Row,Col } from 'react-bootstrap';
import './style.css';
import {Instagram,Twitter,Facebook,LinkedIn,LocationOn,Phone} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { GooglePlay,Apple } from 'react-bootstrap-icons';

export default function Footer() {
  return (
    <div className='floor'>
        <Row id="details">
                <Col class="detail-col">
                <h4 style={{color:"white"}}>Company</h4>
                    <div className='footer-link'>
                        <Link to={'/about'} className="btn">
                            About
                        </Link>
                    </div>
                        <Link to={'/careerPage'} className="btn">
                            Career Page
                        </Link>
                    <div className='footer-link'>
                        <Link to={'/newCustomer'} className='btn'>
                            Meet the Founders
                        </Link>
                    </div>
                    <div className='footer-link'>
                        <Link to={'/OurFleet'} className='btn'>
                            Our Fleet
                        </Link>
                    </div>
                  
                </Col>
                <Col class="detail-col">
                <h4 style={{color:"white"}}>My Account</h4>
                    <div className='footer-link'>
                       <Link to={'/login'} className='btn'>
                            Log in
                        </Link> 
                    </div>
                    <div className='footer-link'>
                        <Link to={'/newCustomer'} className='btn'>
                            Sign Up
                        </Link>
                    </div>        
                    
                </Col>

                <Col class="detail-col" >
                    <h4 style={{color:"white"}}>Contact Us</h4>
                        <div className='footer-link'>
                             <p style={{color:"white",fontSize:"12px"}}><LocationOn fontSize='medium'/>2505 Panola Rd, Suite B, Lithonia, GA 30058</p>
                        </div>

                        <div className='footer-link' style={{margin:"10px 0"}}>
                            <p style={{color:"white",fontSize:"12px"}}><Phone fontSize='small'/> +234 704 080 0644</p>
                        </div>         
                    
                </Col>
                <Col>
                    <h4>Download the App</h4>
                    <a href='https://play.google.com/store/games?pli=1' >
                        <div className='download-app'> 
                        <GooglePlay fontSize='50px'/> Get it from Google PlayStore
                        </div>
                        </a><br />
                    <a href='https://play.google.com/store/games?pli=1'>
                    <div className='download-app'> 
                        <Apple fontSize='50px'/> Get it from Apple Store
                        </div>
                        </a>

                </Col>
    </Row>
    <div >
    <Row style={{margin:"5px 0px 0px 0px"}}>
      
        <Row>
            
            <Col>
                
                <a style={{marginLeft:'9px'}}href='https://www.x.com' target="_blank" rel="noopener noreferrer"b>
                    <Twitter fontSize="medium" className='contact-us-logos'/>
                </a>
          
                <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                    <Facebook fontSize="medium" className='contact-us-logos'/>
                </a>
           
                <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                    <Instagram fontSize="medium" className='contact-us-logos'/>
                </a>

                <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
                    <LinkedIn fontSize="medium" className='contact-us-logos'/>
                </a>

            </Col>
        </Row>
        
    </Row>
    <Row>
        <div className="final-links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="term.html"> Terms of Use</a>
            <a href="www.x.com">Sitemap</a>
            <a href="www.x.com">Accessibility</a>
            <p >&#169; 2023 FRZ Group</p>

        </div>
    </Row>
    </div>
      
    </div>
  )
}
