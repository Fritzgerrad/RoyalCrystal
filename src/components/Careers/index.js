import React from 'react'
import AppBar from '../AppBar'
import Footer from '../Footer'
import CareerPage from './CareerPage'

export default function Career() {
  return (
    <div>
      <AppBar />
      <CareerPage style={{margin:'10px'}}/>
      <Footer />
    </div>
  )
}
