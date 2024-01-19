import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import BookingForm from './BookingForm'
import './style.css';

export default function BookARide() {
  return (
    <div>
      <Header booking="true" />
      <div style={{margin:"20px"}}>
        <BookingForm />

      </div>
      <Footer />
    </div>
  )
}
