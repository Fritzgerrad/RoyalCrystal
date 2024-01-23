import React from 'react';
import { Row,Col } from 'react-bootstrap';
import './style.css';
import {Instagram,Twitter,Facebook,LinkedIn,LocationOn,Phone,Mail} from '@mui/icons-material';
import { Link } from 'react-router-dom';
//import { GooglePlay,Apple } from 'react-bootstrap-icons';

export default function Footer() {
  return (
    <div className='floor'>
        <div id="details" className='blocks'>
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
                        <Link to={'/founders'} className='btn'>
                            Meet the Founder
                        </Link>
                    </div>
                    <div className='footer-link'>
                        <Link to={'/OurFleet'} className='btn'>
                            Our Fleet
                        </Link>
                    </div>
                  
                </Col>
              
                <Col class="detail-col" >
                    <h4 style={{color:"white"}}>Contact Us</h4>
                        <div className='footer-link'>
                             <p style={{color:"white",fontSize:"12px"}}><LocationOn fontSize='medium'/>2505 Panola Rd, Suite B, Lithonia, GA 30058</p>
                        </div>

                        <div className='footer-link' style={{margin:"10px 0"}}>
                            <p style={{color:"white",fontSize:"12px"}}><Phone fontSize='small'/> +1 (770) 404 0973</p>
                        </div> 
                        <div className='footer-link' style={{margin:"10px 0"}}>
                            <p style={{color:"white",fontSize:"12px"}}><Mail fontSize='small' style={{marginRight:"5px"}}/>info@royalcrystalnemt.com</p>
                        </div>           
                    
                </Col>
                
    </div>
    <div >
    <div style={{margin:"5px 0px 0px 0px"}}>
      
        <div>
            
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
        </div>
        
    </div>
    <div>
        <div className="final-links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="term.html"> Terms of Use</a>
            <a href="www.x.com">Sitemap</a>
            <a href="www.x.com">Accessibility</a>
            <p >&#169; 2023 FRZ Group</p>

        </div>
    </div>
    </div>
      
    </div>
  )
}
