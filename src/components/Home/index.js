import React from 'react';
import AppBar from '../AppBar';
import Footer from '../Footer'
import Intro from './intro';
import OurServices from './ourServices';
import WhyUs from './WhyUs';

export default function Home() {
  return (
    <div>
        <AppBar />
        <Intro />
        <WhyUs />
        <OurServices />
        <Footer />
    </div>
  )
}
