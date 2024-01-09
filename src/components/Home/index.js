import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import Intro from './intro';
import OurServices from './ourServices';
import WhyUs from './WhyUs';

export default function Home() {
  return (
    <div>
        <Header />
        <Intro />
        <WhyUs />
        <OurServices />
        <Footer />
    </div>
  )
}
