import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import headerLogo from '../../src/Assets/images/header_logo.png';
import { Link } from 'react-router-dom';
import './style.css';

function Header(props) {
    const [about, setAbout] = useState("#050a30");
    const [career, setCareer] = useState("#050a30");
    // const [login, setLogin] = useState("#050a30");
    // const [signup, setSignup] = useState("#050a30");
    const [home,setHome] = useState("#050a30");
    const [contact, setContact] = useState("#050a30");
    const [fleet, setFleet] = useState("#050a30");


    useEffect(() => {
        // Use the props to determine which link is active and update the state accordingly
        if (props.page === "about") {
            setAbout("red");
            setCareer("#050a30");
            // setLogin("#050a30");
            // setSignup("#050a30");
            setContact("#050a30");
            setFleet("#050a30");
            setHome('#050a30')

        } else if (props.page === "career") {
            setAbout("#050a30");
            setCareer("red");
            // setLogin("#050a30");
            // setSignup("#050a30");
            setContact("#050a30");
            setFleet("#050a30");
            setHome('#050a30');


        } else if (props.page === "contact") {
            setAbout("#050a30");
            setCareer("#050a30");
            // setLogin("red");
            // setSignup("#050a30");
            setContact("red");
            setFleet("#050a30");
            setHome('#050a30')


        } 
        else if (props.page === "fleet") {
        setAbout("#050a30");
        setCareer("#050a30");
        // setLogin("#050a30");
        // setSignup("#red");
        setContact("#050a30");
        setFleet("red");
        setHome('#050a30')

        }
        else if (props.page === "home"){
            // Reset the colors if none of the pages match
            setAbout("#050a30");
            setCareer("#050a30");
            // setLogin("#050a30");
            // setSignup("#050a30");
            setContact("#050a30");
            setFleet("#050a30");
            setHome('red')

        }
        else{
            setAbout("#050a30");
            setCareer("#050a30");
            // setLogin("#050a30");
            // setSignup("#050a30");
            setContact("#050a30");
            setFleet("#050a30");
            setHome('#050a30')
        }
    }, [props.page]);

    return (
        <div id="header">
            <div style={{ padding: "0 30px" }}>
                <Image src={headerLogo} height={"40"} />
            </div>
            <div className="right-header-buttons">
                <Link to={'/'} className="btn" style={{color: home}}>
                    HOME
                </Link>
            </div>
            <div id="left-header-buttons">
                <div className="left-btn">
                    <Link to={'/careerPage'} className="btn" style={{ color: career }}>
                        Careers
                    </Link>
                </div>
                <div className="left-btn">
                    <Link to={'/about'} className="btn" style={{ color: about }}>
                        ABOUT
                    </Link>
                </div>
                {/* <div className="left-btn">
                    <Link to={'/login'} className="btn" style={{ color: login }}>
                        LOG IN
                    </Link>
                </div> */}
                <div className="left-btn">
                    <Link to={'/contact'} className="btn" style={{ color: contact }}>
                        Contact Us
                    </Link>
                </div>
                <div className="left-btn">
                    <Link to={'/ourFleet'} className="btn" style={{ color: fleet }}>
                        Our Fleet
                    </Link>
                </div>
                {/* <div className="left-btn">
                    <Link to={'/newCustomer'} className="btn" id="sign-up" style={{ backgroundColor: signup }}>
                        Sign Up
                    </Link>
                </div> */}
                
            </div>
        </div>
    );
}

export default Header;

