import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div> 
            <div className="mt-5">
            <h2 className="fw-bold pt-5 pb-2">We try to serve best <span className="text-danger">Services</span></h2>
        <p><small >Because every second is critical! We have a 24X7 critical care</small> <br />
        <small>team for life-changing support & monitoring.</small></p>
            </div>
            <Container >
                <Row lg={3} xs={1}  className="g-4">

                  {
                      services.map(service=><Col key={service?.id}>
                          <Card className="p-4 card-style">
                              <Card.Img className="mx-auto w-25" src={service?.img} />
                              <Card.Title className="text-danger">{service?.name}</Card.Title>
                              <small>{service?.shortDescription}</small>
                              <div className="mt-4"><Link to={`/singleservices/${service?.id}`}><Button variant="dark">Details <i class="fas fa-arrow-right"></i></Button></Link></div>
                          </Card>
                          
                      </Col>)
                  }
                </Row>
            </Container>
        </div>
    );
};

export default Services;