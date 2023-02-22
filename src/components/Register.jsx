import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "./Register.css";
import { useState, useEffect } from "react";
import axios from 'axios'
import { BrowserRouter, redirect, Routes } from "react-router-dom";
import Login from './Login'
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const Register = () => {

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate=useNavigate();
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onRegisterHandler=()=>{
        const postObj={
          "username":username,
          "email":email,
          "password":password
      }
    axios.post('http://127.0.0.1:8000/api/register/',postObj).then((res)=>{
     if(res.status===200) navigate("/")
    })
    .catch((error) => {
      if (error.response) {
        setShow(true)
      }
    });
    
    }
 

    return (
        <>
       

       <Alert show={show} variant="danger">
        <Alert.Heading>Username Already Registered</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Close me y'all!
          </Button>
        </div>
      </Alert>
          <Container fluid className="register-holder">
            <Row>
              <Col md={6} className="d-grid justify-content-center align-content-center">
                <Card style={{ width: "30rem" }}>
                  <Card.Body>
                    <Card.Title className="mb-4">Register Form</Card.Title>
                    <form>
                      {/* <!-- Username input --> */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example3">
                          Username
                        </label>
                        <input
                          type="username"
                          id="form2Example3"
                          className="form-control"
                          onChange={(e)=>setUsername(e.target.value)}
                        />
                      </div>
    
                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form2Example1"
                          className="form-control"
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </div>
    
                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example2"
                          className="form-control"
                          onChange={(e)=>setPassword(e.target.value)}
                        />
                      </div>
    
                      {/* <!-- 2 column grid layout for inline styling --> */}
                      <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                          {/* <!-- Checkbox --> */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="form2Example31"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example31"
                            >
                              {" "}
                              Remember me{" "}
                            </label>
                          </div>
                        </div>
    
                        <div className="col">
                          {/* <!-- Simple link --> */}
                          <a href="#!">Forgot password?</a>
                        </div>
                      </div>
    
                      {/* <!-- Submit button --> */}
                      <Button variant="primary" onClick={onRegisterHandler}>Sign In</Button>{' '}
    
                      {/* <!-- Register buttons --> */}
                      <div className="text-center">
                        <p>
                          Already a member? <a href="/">Login</a>
                        </p>
                       
                      </div>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            
            </Row>
          </Container>
        </>
      );
 
};

export default Register;