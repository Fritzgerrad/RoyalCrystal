import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import Intro from './intro';
import OurServices from './ourServices';
import WhyUs from './WhyUs';

export default function Home() {
  return (
    <div>
        <Header page="home"/>
        <Intro />
        <WhyUs />
        <OurServices />
        <hr/>
        <h5 style={{margin:'30px'}}> Experience the difference today!!!</h5>
        <Footer />
    </div>
  )
}
