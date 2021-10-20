import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Login.css';


const Login = () => {

  // const {user} = useAuth();
  const { signInUsingGoogle, signInUsingGitHub, handleLogin, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin, handleResetPassword, handleNameChange } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home'



  const handleGoogleLogin =
    () => {
      signInUsingGoogle()
        .then(result => {
          history.push(redirect_uri)
        })
    }
  return (
    <div className="login-form ">
      <Container className="d-flex justify-content-center align-items-center">
        <Form onSubmit={handleLogin} className="w-50">
          <h1 className="mb-5">Please {isLogin ? 'login' : 'Register'}</h1>
          {!isLogin && <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label className="d-flex justify-content-start">Your Name</Form.Label>
            <Form.Control type="text" onBlur={handleNameChange} placeholder="Enter Name" required />
          </Form.Group>}
          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label className="d-flex justify-content-start">Email address</Form.Label>
            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="d-flex justify-content-start">Password</Form.Label>
            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
          </Form.Group>
          <Form>
            {['checkbox'].map((type) => (
              <div key={type} className="mb-3">
                <Form.Check type={type} id={`check-api-${type}`}>
                  <Form.Check.Input onChange={toggleLogin} className="me-2" type={type} isValid />
                  <Form.Check.Label >{`Already Registered?`}</Form.Check.Label>

                </Form.Check>
              </div>
            ))}
          </Form>
          <div className="mb-3 text-danger fs-5">{error}</div>
          <Button  variant="primary" type="submit">
            {isLogin ? 'login' : 'Register'}
          </Button>  <Button onClick={handleResetPassword} variant="secondary">Reset Password</Button> <br /> <br />
          <button className="btn-warning" onClick={handleGoogleLogin} >Google Sign In</button>  <button onClick={signInUsingGitHub} className="btn-warning ms-2">GitHub Sign In</button>

          <br /> <br />

        </Form>
        <br />

      </Container>

    </div>
  );
};

export default Login;