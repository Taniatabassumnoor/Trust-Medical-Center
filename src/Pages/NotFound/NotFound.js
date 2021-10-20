import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>404</p>
            <Link to="/home"><button className="btn-warning">Go Back</button></Link>
        </div>
    );
};

export default NotFound;