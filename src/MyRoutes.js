import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NewCustomer from "./components/NewCustomer";
import NewStaff from "./components/NewStaff";
import Login from "./components/Login";
import Services from "./components/Services";
import Career from "./components/Careers";
import OurFleet from "./components/OurFleet";
import Founders from "./components/Founders";
export default function MyRoutes() {
    return (
        <div>
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/about"
              element={<About />} 
            />
            <Route 
              path="/contact"
              element={<Contact />}
            />
            <Route 
              path="/newCustomer"
              element={<NewCustomer />}
            />
            <Route 
              path="/newStaff"
              element={<NewStaff />}
            />
            <Route 
            path="/login"
            element={<Login />}
            />
            <Route 
            path='/careerPage'
            element={<Career />}
            />
            <Route 
            path="/services"
            element={<Services />}
            />
            <Route
            path='/ourFleet'
            element={<OurFleet />}
            />
            <Route
            path='founders'
            element={<Founders />}
            />
          </Routes>
        </Router>
        </div>
      );
}
