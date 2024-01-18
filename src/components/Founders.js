import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Image } from 'react-bootstrap';
import AmechiOkobah from '../Assets/images/uncleAmechi.png'

export default function Founders() {
  return (
    <div>
      <Header />
      <div style={{margin:'15px'}}>
        <h1 style={{fontWeight:'bold',margin:'10px'}}>Our Founder</h1>
        <Image src={AmechiOkobah} />
        <p>
          Dr. Christopher O Okobah has an impressive academic and professional background, with degrees in law and maritime law, as well as notable affiliations with various institutes. His extensive experience in transportation management for over 30 years adds another layer to his expertise. It's evident that Dr Christopher Okobah has made significant contributions to various fields. Our Non-Emergency Medical Transportation (NEMT) was founded in January 2024 as a way to provide NEMT services in Atlanta, Georgia. With a commitment to serving the community, we have been dedicated to ensuring individuals have reliable and safe transportation to meet their medical needs.
        </p>
      </div>
      <Footer />
    </div>
  )
}
