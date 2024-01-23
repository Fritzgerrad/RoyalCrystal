import React, { useState } from 'react';
import { Form,Col,Row,Button,Card,FloatingLabel } from 'react-bootstrap';
import './style.css';
const BookingForm = () => {
  // State to store user input
  const [bookingDetails, setBookingDetails] = useState({
    fullname: '',
    serviceType: '',
    trip:'',
    phone: '',
    email: '',
    pickupDate: '',
    pickupTime: '',
    dropoffTime: '',
    dropoffDate: '',
    pickupLocation: '',
    dropoffLocation: '',
    additionalDetails: '',
  });

  // Function to handle form submission
  const handleBookingSubmit = (event) => {
    event.preventDefault();

    // Add logic to handle the booking submission (e.g., send data to a server)
    console.log('Booking details submitted:', bookingDetails);
  };

  // Function to handle changes in form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      <Form onSubmit={handleBookingSubmit}>
        
        <Card className='form-section' style={{margin:"3rem auto",width:"fit-content",backgroundColor:'#f0f0ff'}}>
        <h2 style={{fontWeight:'bold',fontSize:'40px',textAlign:'center',margin:'10px'}}>Book a Ride</h2>

          <Row>
            <Col md={12} sm={10}>
              
             <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>First Name</Form.Label> */}
                <FloatingLabel controlId="floatingInput" label="FULL NAME" className="mb-3">
                <Form.Control
                required
                type="text"
                name="fullname"
                placeholder='FULL NAME'
                onChange={handleInputChange}
                />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col md={6} sm={5}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                {/* <Form.Label>Type of Service</Form.Label> */}
                <FloatingLabel controlId="floatingSelect" label="TYPE OF SERVICE">
                  <Form.Control
                    as="select"
                    name="serviceType"
                    onChange={handleInputChange}
                    required
                  >
                    <option>--SELECT--</option>
                    <option value={"WheelChair Assistance"}>WHEELCHAIR ASSISTANCE</option>
                    <option value={"Door to Door Transport"}>DOOR TO DOOR SERVICE</option>
                    <option value={"Scheduled Appointments"}>SCHEDULED APPOINTMENTS</option>
                    <option value={"Stretcher Transportation"}>STRETCHER TRANSPORTATION</option>

                  </Form.Control>
                </FloatingLabel>
              </Form.Group>
          </Col>
          <Col md={6} sm={5}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                {/* <Form.Label>Type of Service</Form.Label> */}
                <FloatingLabel controlId="floatingSelect" label="LENGTH OF TRAVEL">

                <Form.Control
                  as="select"
                  name="trip"
                  onChange={handleInputChange}
                  required
                >
                  <option>--SELECT--</option>
                  <option value={"One-way"}>ONE WAY</option>
                  <option value={"Round-Trip"}>ROUND TRIP</option>

                </Form.Control>
                </FloatingLabel>
              </Form.Group> 
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={5}>
            <Form.Group controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="PHONE"
              className="mb-3"
            >
                {/* <Form.Label>Pickup Location</Form.Label> */}
                <Form.Control
                required
                type="text"
                placeholder="PHONE"
                name="phone"
                onChange={handleInputChange}
                value={bookingDetails.phone}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col md={6} sm={5}>
            <Form.Group controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="EMAIL"
              className="mb-3"
            >
                {/* <Form.Label>Drop-off Location</Form.Label> */}
                <Form.Control
                required
                type="email"
                name="email"
                placeholder='EMAIL'
                onChange={handleInputChange}
                value={bookingDetails.email}
                />
                </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <div className='blocks'>
          <Col>
            <Row>
              <h5 style={{fontWeight:'bold'}}>PICK UP</h5>
              <Col md={6} sm={6}>
                <Form.Group controlId="exampleForm.ControlInput1">
                <FloatingLabel controlId="dateInput" label="DATE">

                  <Form.Control
                  required
                  type="date"
                  name="pickupDate"
                  onChange={handleInputChange}
            

                  />
                </FloatingLabel>
                </Form.Group>
              </Col>
              <Col md={4} sm={4}>
                <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Time:</Form.Label> */}
                <FloatingLabel controlId="timeInput" label="TIME">

                  <Form.Control
                  required
                  type="time"
                  placeholder="Enter Time"
                  name="pickupTime"
                  onChange={handleBookingSubmit}
                  />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
              
          </Col>
          
          <Col>
            <Row>
              <h5 style={{fontWeight:'bold'}}>DROP OFF</h5>
              <Col md={6} sm={6}>
                <Form.Group controlId="exampleForm.ControlInput1">
                <FloatingLabel controlId="dateInput" label="DATE">

                  <Form.Control
                  required
                  type="date"
                  name="dropoffDate"
                  onChange={handleInputChange}
            

                  />
                </FloatingLabel>
                </Form.Group>
              </Col>
              <Col md={4} sm={4}>
                <Form.Group controlId="exampleForm.ControlInput1">
                {/* <Form.Label>Time:</Form.Label> */}
                <FloatingLabel controlId="timeInput" label="TIME">

                  <Form.Control
                  required
                  type="time"
                  placeholder="Enter Time"
                  name="dropoffTime"
                  onChange={handleBookingSubmit}
                  />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              
            </Row>
          </Col>

        </div>
        <Row>
        <Col md={6} sm={6}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  {/* <Form.Label>Pickup Location</Form.Label> */}
                  <FloatingLabel controlId="floatingInput" label="ADDRESS" className="mb-3">
                  <Form.Control
                  required
                  type="text"
                  name="pickupLocation"
                  placeholder='ADDRESS'
                  onChange={handleInputChange}
                  value={bookingDetails.pickupLocation}
                  />
                  </FloatingLabel>
              </Form.Group>
              </Col>
              <Col md={6} sm={6}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  {/* <Form.Label>Pickup Location</Form.Label> */}
                  <FloatingLabel controlId="floatingInput" label="ADDRESS" className="mb-3">
                  <Form.Control
                  required
                  type="text"
                  name="dropoffLocation"
                  onChange={handleInputChange}
                  placeholder='ADDRESS'
                  value={bookingDetails.dropoffLocation}
                  />
                  </FloatingLabel>
              </Form.Group>
              </Col>
        </Row>
        <Row>
          
        </Row>
        <Row>
          <Col md={12} sm={10}>
          <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Additional Details"
                  name="additionalDetails"
                  onChange={handleInputChange}
                  value={bookingDetails.additionalDetails}
                />
          </Col>
        </Row>
        <Button type='submit' style={{width:'35%',height:'50px',margin:'30px auto',fontSize:'20px',fontWeight:'bold'}}>Book</Button>    
        </Card>
      </Form>
    </div>
  );
};

export default BookingForm;
