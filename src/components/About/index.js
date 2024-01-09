import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import AboutUs from './AboutUs'

export default function About() {
  return (
    <div>
        <Header page='about' />
        <AboutUs />
        <Footer />
    </div>
  )
}
