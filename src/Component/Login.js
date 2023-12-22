import React from "react";
import image from "../assets/image/logo.png";
import Paper from "@mui/material/Paper";
import { Row, Col, Container } from "react-bootstrap";
import { Outlet,Link } from "react-router-dom";
function Login() {
  return (
    <div className="stylarx-page">
      <Container fluid>
        <Row className="stylarx-m">
          <Col md={6} sm={12} className="p-0 d-flex justify-content-center align-items-center mt-5 ">
            <Paper className="paper" elevation={3}>
              
              <Outlet />
            </Paper>
          </Col>
          <Col md={6} sm={12} className="p-0 d-flex justify-content-center align-items-center ">
            <div className="second-section">
              <h1 className="heading">
                Welcome to <br />
              </h1>
              <div className="stylrax">
                <img src={image} alt="logo.png" />
              </div>
              <div className="second-para">
                <p>
                  The Best barbers & Salon in this
                  <br />
                  century for your good looks and beauty
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
