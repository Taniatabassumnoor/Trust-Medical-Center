import React from 'react';
import { Button, Card,  ListGroup, ListGroupItem} from 'react-bootstrap';
import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import './Pricing.css';
const Pricing = () => {
    return (
        <div className=""> 
            <div>
            <div className=" pricing-banner">
            <h1 className="hero-pricing">We are the <span className="text-dark">best <br />  health Clinic</span> </h1>
            <p className="pricing-p">The hospital is located in the  heart of the City and <br />is very close to the <airport className="br"></airport> The hospital started functioning in 2001 with 3 beds <br /> and initially had only 7 doctors.</p>
            <p className="pricing-p">Today, it boasts of 24 beds with Intensive Care Units (ICUs), Operation <br /> Theater, the manpower of nearly 180.  The hospital attends to around <br />200 In-patients and Out-patients daily.</p>
            </div>
            <h1 className="fw-bold pt-5  pb-2">We offer <span className="text-danger">low price </span>  for any medical test</h1>
            <p className="text-dark ">Trust Medical Center is serving healthcare since 1991, A multispecialty hospital with international standards, latest technology, and eco-friendly <br /> concept delivers exceptional and valuable comprehensive high-quality health care to all its clients that will result in a beautiful and <br /> long-lasting health.
        </p>
        
            <div className="d-flex justify-content-center align-items-center  card-head">
    
    <Card className="card-style" style={{ width: '24rem' }}>
    
            <Card.Body>
                <Card.Title>Basic</Card.Title>
                <Card.Text>
                    <h1>$ 45.00</h1>
                    <p className="text-danger">Per month</p>
                    <small>CBC</small>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Blood Sugar Fasting</ListGroupItem>
                <ListGroupItem>Urine Routine</ListGroupItem>
                <ListGroupItem>Lipid Profile</ListGroupItem>
                <ListGroupItem>Vitamin B12</ListGroupItem>
            </ListGroup>
            <Card.Body>

                <Card.Link to="/appoinment"><Button variant="warning">Get Started</Button></Card.Link>
            </Card.Body>
        </Card>
        <Card className="card-style" style={{ width: '24rem' }}>
            <Card.Body>
                <Card.Title>Advanced</Card.Title>
                <Card.Text>
                    <h1>$ 60.00</h1>
                    <p className="text-danger">Per month</p>
                    <small>CBC</small>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>TSH</ListGroupItem>
                <ListGroupItem>Vitamin D</ListGroupItem>
                <ListGroupItem>Urine Routine</ListGroupItem>
                <ListGroupItem>Liver Function</ListGroupItem>
            </ListGroup>
            <Card.Body>

                <Card.Link to="/appoinment"><Button variant="warning">Get Started</Button></Card.Link>
            </Card.Body>
        </Card>
        <Card className="card-style" style={{ width: '24rem' }}>
            <Card.Body>
                <Card.Title>Basic</Card.Title>
                <Card.Text>
                    <h1>$ 75.00</h1>
                    <p className="text-danger">Per month</p>
                    <small>E.C.G.</small>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Usg Pelvis</ListGroupItem>
                <ListGroupItem>Chest P.A.View</ListGroupItem>
                <ListGroupItem>Usg Abdomen</ListGroupItem>
                <ListGroupItem>Stress Test For H.C.U</ListGroupItem>
            </ListGroup>
            <Card.Body>

                <Card.Link to="/appoinment"><Button variant="warning">Get Started</Button></Card.Link>
            </Card.Body>
        </Card>
       
    </div>
    <Footer></Footer>
            </div>
        </div>
    );
};

export default Pricing;