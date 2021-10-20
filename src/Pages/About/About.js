import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors';
import Footer from '../Shared/Footer/Footer';
import './About.css';
const About = () => {
    const [aboutService,setAboutService] = useState([]);
    useEffect(()=>{
        fetch('/about.json')
        .then(res=>res.json())
        .then(data=>setAboutService(data));
    },[])
    return (
        <div>
            <div className="about-banner">
            <h1 className=" hero-about">Effective treatment <br />
             to identify the right problem</h1>
            </div>
            <div>
            <div className="mt-5">
            <h1 className="fw-bold pt-5 pb-2">We are the most <span className="text-danger">trusted Hospital. </span></h1>
        <p>Trust Medical Center is serving healthcare since 1991, A multispecialty hospital with international standards, latest technology, and eco-friendly <br /> concept delivers exceptional and valuable comprehensive high-quality health care to all its clients that will result in a beautiful and <br /> long-lasting health.
        </p>
            </div>
            <Container >
                <Row lg={2} xs={1}  className="g-4">

                  {
                      aboutService.map(service=><Col key={service?.id}>
                          <Card className="p-4 card-style">
                              <Card.Img className="mx-auto w-25" src={service?.img} />
                              <Card.Title className="text-danger fs-2">{service?.name}</Card.Title>
                              <p className="fs-5">{service?.shortDescription}</p>
                          </Card>
                          
                      </Col>)
                  }
                </Row>
            </Container>
            <Doctors></Doctors>
            <br />
            <Footer></Footer>
            </div>
        </div>
    );
};

export default About;