import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const EmployeeMgmt = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Employee Management | Case Study </title>
        </Helmet>
        <div>
          <Link to="/portfolio">Back</Link>
        </div>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Employee Management - Case Study</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Overview</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt maiores doloribus, necessitatibus illum deleniti
                consequuntur assumenda aliquid dolores, nostrum quo consectetur
                nisi tenetur ad. Blanditiis quis harum animi ipsa atque.
              </p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Objectives</h3>
          </Col>
          <Col lg="7">
            <div>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt maiores doloribus, necessitatibus illum deleniti
                consequuntur assumenda aliquid dolores, nostrum quo consectetur
                nisi tenetur ad. Blanditiis quis harum animi ipsa atque.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Features</h3>
          </Col>
          <Col lg="7">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            maiores doloribus, necessitatibus illum deleniti consequuntur
            assumenda aliquid dolores, nostrum quo consectetur nisi tenetur ad.
            Blanditiis quis harum animi ipsa atque.
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Technology Stack</h3>
          </Col>
          <Col lg="7">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            maiores doloribus, necessitatibus illum deleniti consequuntur
            assumenda aliquid dolores, nostrum quo consectetur nisi tenetur ad.
            Blanditiis quis harum animi ipsa atque.
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Implementation</h3>
          </Col>
          <Col lg="7">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            maiores doloribus, necessitatibus illum deleniti consequuntur
            assumenda aliquid dolores, nostrum quo consectetur nisi tenetur ad.
            Blanditiis quis harum animi ipsa atque.
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Challenges</h3>
          </Col>
          <Col lg="7">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            maiores doloribus, necessitatibus illum deleniti consequuntur
            assumenda aliquid dolores, nostrum quo consectetur nisi tenetur ad.
            Blanditiis quis harum animi ipsa atque.
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Conclusion</h3>
          </Col>
          <Col lg="7">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            maiores doloribus, necessitatibus illum deleniti consequuntur
            assumenda aliquid dolores, nostrum quo consectetur nisi tenetur ad.
            Blanditiis quis harum animi ipsa atque.
          </Col>
        </Row>
      </Container>
      {/* screenshots */}

      <div className="p-5">
        <div className="flux row image-container">
          <h3 className="display-4 mb-4">Screenshots</h3>
          <hr className="t_border my-4 ml-0 text-left" />
          <div className="col">
            <img src="" alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src="" alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src="" alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src="" alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src="" alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src="" alt="" className="screenshot" />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default EmployeeMgmt;
