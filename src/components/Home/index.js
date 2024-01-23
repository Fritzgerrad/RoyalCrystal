import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import Intro from './intro';
import OurServices from './ourServices';
import WhyUs from './WhyUs';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <Header page="home"/>
        <Intro />
        <WhyUs />
        <OurServices />
        <hr/>
        <h5 style={{margin:'30px'}}> <Link to={'/bookARide'} style={{textDecoration:'none',color:'#050a30'}}> Experience the difference today. Click here to book with us Now</Link>!!!</h5> 
        <Footer />
    </div>
  )
}
