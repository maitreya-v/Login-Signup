import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Login.css";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate=useNavigate();
  
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const onLoginHandler=()=>{
    const postObj={
        "username":username,
        "password":password
    }
    axios.post('http://127.0.0.1:8000/api/login/',postObj).then((res)=>{
     if(res.status===200) {
      localStorage.setItem('loginToken', res.data.token)
      navigate("/home")
     }
    })
    .catch((error) => {
      if (error.response) {
        setShow(true)
      }
    });
  }



  return (
    <>



      <Container fluid className="login-holder">
        <Row className="">
          <Col md={6} className="d-grid justify-content-center">
          <Alert show={show} variant="danger">
        <Alert.Heading>Username Is Not Registered</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Close me y'all!
          </Button>
        </div>
      </Alert>

            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title className="mb-4">Login Form</Card.Title>
                <form>
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">
                      Username
                    </label>
                    <input
                      type="username"
                      id="form2Example1"
                      className="form-control"
                      onChange={(e)=>setUsername(e.target.value)}
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
                        <label className="form-check-label" htmlFor="form2Example31">
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
                  <button type="button" className="btn btn-primary btn-block mb-4" onClick={onLoginHandler}>
                    Log in
                  </button>

                  {/* <!-- Register buttons --> */}
                  <div className="text-center">
                    <p>
                      Not a member? <a href="register/">Register</a>
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

export default Login;
