import React from 'react';
import bus1 from '../../Assets/images/bus1.jpeg'
import bus2 from '../../Assets/images/bus2.jpeg'
import bus3 from '../../Assets/images/bus3.jpeg'
import bus4 from '../../Assets/images/bus4.jpeg'
import bus5 from '../../Assets/images/bus5.jpeg'
import bus6 from '../../Assets/images/bus6.jpeg'
import bus7 from '../../Assets/images/bus7.jpeg'
import AppBar from '../AppBar';
import Footer from '../Footer';
import { Col, Row } from 'react-bootstrap';
import FleetCar from './FleetCar';

export default function OurFleet() {
  return (
    <div>
      <AppBar />
      <div style={{margin:"12px"}}>
        <h1 style={{fontWeight:"bold"}}>Our Fleet</h1>
      </div>
      <div>
        <Row style={{margin:"0 10px"}}>
            <Col>
                <FleetCar
                busName = "Bus One"
                image = {bus1}
                busSpec = "--"
            />
            </Col>
            <Col>
                <FleetCar
                busName = "Bus Two"
                image = {bus2}
                busSpec = "--"
            />
            </Col>
            <Col>
                <FleetCar
                busName = "Bus Three"
                image = {bus3}
                busSpec = "--"
            />
            </Col>
            <Col>
                <FleetCar
                busName = "Bus Four"
                image = {bus4}
                busSpec = "--"
            />
            </Col>
            <Col>
                <FleetCar
                busName = "Bus FIve"
                image = {bus5}
                busSpec = "--"
            />
            </Col>
            <Col>
                <FleetCar
                busName = "Bus Six"
                image = {bus6}
                busSpec = "--"
            />
            </Col>
            <Col>
                <FleetCar
                busName = "Bus Seven"
                image = {bus7}
                busSpec = "--"
            />
            </Col>
      </Row>
    </div>

      <Footer />
    </div>
  )
}
