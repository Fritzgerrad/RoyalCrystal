import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NewCustomer from "./components/NewCustomer";
import NewStaff from "./components/NewStaff";
import Login from "./components/Login";
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
          </Routes>
        </Router>
        </div>
      );
}
