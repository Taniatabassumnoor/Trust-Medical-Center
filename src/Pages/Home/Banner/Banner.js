import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Banner.css';
const Banner = () => {
    
    const {user} = useAuth();
   
    return (
        <div>
            <div className="home-banner">
            <h1 className="hero ">Nothing in this world is <br /> <span className="text-dark">more  precious than <br /> your health. </span></h1>
            <p className="hero-p">To  preserve this,<br /> a timely health check-up should be undertaken.</p>
           
            
        {user?.email && <button  className="appointment-btn"><Link to="/appointment">Make Appointment</Link></button>}
        {!user?.email && <Link to="/login"><button  className="appointment-btn">Make Appointment</button></Link>}
            </div>
        </div>
    );
};

export default Banner;