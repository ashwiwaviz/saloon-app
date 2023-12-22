import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
const Sign_in = () => {
  return (
    <>
      <Container className="p-0">
                <Row className=" m-0 p-0">
                  <Col sm={8} className="p-0">
                    <h4>
                      Welcome to <span>STYLRAX</span>
                    </h4>
                  </Col>
                  <Col sm={4} className="p-0 d-flex justify-content-center align-itemscenter">
                    <h6 className="sign-account">
                      No Account? <br />
                      <span className="sign-up">Sign up</span>
                    </h6>
                  </Col>
                  <Col className="p-0">
                    <h1>Sign in</h1>
                  </Col>
                </Row>
                
              </Container>
              <form className="form">
                <label className="text">
                  Enter your username or email address
                  <br />
                  <input
                    className="input"
                    placeholder="username or email address"
                  />
                </label>
              </form>
              <form className="form">
                <label className="text">
                  Enter your Password
                  <br />
                  <input className="input" placeholder="Password" />
                </label>
              </form>
              <Container className="p-0">
                <Row className=" m-0 p-0">
                  <Col sm={6} className="p-0">
                    <input className="checkbox" type="checkbox" />
                    <label className="px-1">Remember me?</label>
                  </Col>
                  <Col sm={6} className="p-0">
                    <p className="para"><Link className='link-style' to={"/login/forget_password"}>Forgot Password</Link></p>
                  </Col>
                </Row>
              </Container>
              <button className="button" type="button">
                Sign in
              </button>
    </>
  )
}

export default Sign_in
