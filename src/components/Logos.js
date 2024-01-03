import React from 'react';
import {Card} from 'react-bootstrap';
import logo1 from '../Assets/images/filyago-logo-1.png';
import logo2 from '../Assets/images/filyago-logo-2.png';
import logo3 from '../Assets/images/filyago-logo-3.png';

const First = (props)=> {
  return (
    <div>
        <Card.Img src={logo1} style={{ width: "5em", height: "auto" }} alt="Card image" />
    </div>
  )
}
const Second = (props)=> {
    return (
      <div>
        <Card.Img src={logo2} style={{ width: "5em", height: "auto" }} alt="Card image" />
      </div>
    )
  }
  
const Third = (props)=> {
    return (
      <div>
        <Card.Img src={logo3} style={{ width: "10em", height: "auto" }} alt="Card image" />
      </div>
    )
  }

  export default First;
  export {Second, Third};