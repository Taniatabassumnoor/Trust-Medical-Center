import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const SingleService = () => {
  const history = useHistory();
    let {id} = useParams();
    const [serviceDetails,setServiceDetails] = useState([]);
    const [singleDetails,setSingleDetails] = useState({})
    useEffect(()=>{
        fetch('/serviceDetails.json')
        .then(res=>res.json())
        .then(data=>setServiceDetails(data.singleService));
    },[])
    useEffect(()=>{
    const  foundDetails =  serviceDetails.find(service=>service.login.id==id)
    setSingleDetails(foundDetails);
    },[serviceDetails,id]);
    console.log(serviceDetails);

    const handleAppointment = () => {
      history.push('/appointment')
    }
    return (
        <div>
            <h1 className="fw-bold text-danger">{singleDetails?.name}</h1>
            
        <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top"  src={singleDetails?.surgeryImg} />
            </Card>
          </Col>
          <Col md={6}>
            <Card >
              <Card.Body>
                <Card.Title >{singleDetails?.name}</Card.Title>
                <Card.Text >
                       {singleDetails?.shortDescription}
                </Card.Text>
                <Card.Text >
                     {singleDetails?.longDescription}
                </Card.Text>
                <Card.Text>{singleDetails?.mediumdescription}</Card.Text>
              </Card.Body>
              
            </Card>
          </Col>
        </Row>
        <div><button onClick={handleAppointment} className="appointment-btn mx-auto mt-5">Make Appointment</button></div>
        </Container>
     
        </div>
    );
};

export default SingleService;