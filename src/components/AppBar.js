import React from "react";
import { Image } from "react-bootstrap";
import headerLogo from '../../src/Assets/images/header_logo.png';
import { Link } from 'react-router-dom';
import './style.css';


function AppBar() {
  return (
    <div id="header">
        <div style={{padding: "0 30px;"}}>
            <Image src={headerLogo} height={"40"}/>
        </div>
        <div className="right-header-buttons">
            <Link to={'/'} className="btn">
                HOME
            </Link>        
        </div>
        <div id="left-header-buttons">
            <div className="left-btn">
                <Link to={'/about'} className="btn">
                    ABOUT
                </Link>
            </div>
            <div className="left-btn">
                <Link to={'/login'} className="btn">
                    LOG IN
                </Link>
            </div>
            <div className="left-btn">
                <Link to={'/newCustomer'} className="btn" id="sign-up">
                    Sign Up
                </Link>
            </div>
            <div className="left-btn">
                <Link to={'/careerPage'} className="btn">
                    Careers
                </Link>
            </div>
          
        </div>


    </div>
  );
}

export default AppBar;