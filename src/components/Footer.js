import React from 'react'
import { Row,Col } from 'react-bootstrap';
import './style.css';
import {Instagram,Twitter,Facebook,LinkedIn} from '@mui/icons-material';

export default function Footer() {
  return (
    <div>
        <Row>
            <section id="details">
            <div class="blocks">
                <div class="detail-col">
                    <h3>Company</h3>
                    <div class="detail-data">
                        <a href="">About</a>
                    </div>
                    <div class="detail-data">
                        <a href="">Careers</a>
                    </div>
                    <div class="detail-data">
                        <a href="">Locations</a>
                    </div>
                    <div class="detail-data">
                        <a href="">Patners</a> 
                    </div>
                    <div class="detail-data">
                        <a href="">Blog</a>
                    </div>
                    <div class="detail-data">
                        <a href="">Newsroom</a>
                    </div>
                </div>
                <div class="detail-col">
                    <h3>Service and Support</h3>
                    <div class="detail-data">
                        <a href="">Services</a> 
                    </div>
                    <div class="detail-data">
                        <a href="">Support Portal</a> 
                    </div>
                </div>

                <div class="detail-col">
                    <h3>Resources</h3>
                    <div class="detail-data">
                        <a href="">User Community</a> 
                    </div>
                    <div class="detail-data">
                        <a href="">Training and Certification</a> 
                    </div>
                    <div class="detail-data">
                        <a href="">Product documentation</a> 
                    </div>
                    <div class="detail-data">
                        <a href="">Developer Portal</a> 
                    </div>
                </div>
                <div class="detail-col">
                    <h3>My Account</h3>
                    <div class="detail-data">
                        <a href="">Sign In</a> 
                    </div>
                    <div class="detail-data">
                        <a href="">Register</a> 
                    </div>
                </div>
                
                
            </div>
            
        </section>

    </Row>
    
    <Row style={{margin:"20px"}}>
        <Row>
            <h4>Follow us</h4>
        </Row>
        <Row>
            <Col>
                <a href='instagram.com'>
                    <Twitter fontSize="large" className='contact-us-logos'/>
                </a>
            </Col>
            <Col>
                <a href='facebook.com'>
                    <Facebook fontSize="large" className='contact-us-logos'/>
                </a>
            </Col>
            <Col>
                <a href='instagram.com'>
                    <Instagram fontSize="large" className='contact-us-logos'/>
                </a>
            </Col>
            <Col>
                <a href='linkedin.com'>
                    <LinkedIn fontSize="large" className='contact-us-logos'/>
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
  )
}
