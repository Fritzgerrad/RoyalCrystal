import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CareerPage from './CareerPage'

export default function Career() {
  return (
    <div>
      <Header page="career" />
      <CareerPage style={{margin:'10px'}}/>
      <Footer />
    </div>
  )
}
