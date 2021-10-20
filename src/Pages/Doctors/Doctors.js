import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data));
    },[])
    return (
        <div>
            
            <div className="mt-5">
            <h1 className="fw-bold pt-5 pb-2">Our <span className="text-danger">specialist doctors</span> serve you<span > </span></h1>
        <p>At Trust Medical Center, We have a very well qualified and experienced team,<br /> they have been practicing for 28 years.
        </p>
            </div>
            
           <Container >
                <Row lg={2} xs={1}  className="g-4">

                  {
                      doctors.map(doctor=><Col key={doctor?.id}>
                          <Card className="p-4 card-style">
                              <Card.Img className="mx-auto w-100" src={doctor?.img} />
                              <Card.Title className="text-danger fs-2">{doctor?.name}</Card.Title>
                              <p className="fs-5">{doctor?.shortDescription}</p>
                          </Card>
                          
                      </Col>)
                  }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;