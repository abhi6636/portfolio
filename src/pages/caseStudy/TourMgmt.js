import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img01 from "./assets/Tour/tour01.png";
import Img02 from "./assets/Tour/tour02.png";
import Img03 from "./assets/Tour/tour03.png";
import Img04 from "./assets/Tour/tour04.png";
import Img05 from "./assets/Tour/tour05.png";
import Img06 from "./assets/Tour/tour06.png";
import Img07 from "./assets/Tour/tour07.png";
import Img08 from "./assets/Tour/tour08.png";
import Img09 from "./assets/Tour/tour09.png";
import Img10 from "./assets/Tour/tour10.png";
import Img11 from "./assets/Tour/tour11.png";
import Img12 from "./assets/Tour/tour12.png";
import Img13 from "./assets/Tour/tour13.png";
import Img14 from "./assets/Tour/tour14.png";

const TourMgmt = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Tour Booking Service | Case Study </title>
        </Helmet>
        <div>
          <Link to="/portfolio">Back</Link>
        </div>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">
              Wander Lust Tour Booking Service - Case Study
            </h1>
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
                Wanderlust Tour Booking Service" is an online platform that aims
                to connect travelers with unique and exciting tour experiences
                worldwide. The platform is built using CSS, React with
                React-Bootstrap for front-end development, React Router DOM for
                routing, Express and Node.js for the backend, and MongoDB as the
                database. Additionally, the platform integrates the Stripe
                payment gateway for secure and seamless payment processing.
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
                <ol>
                  <li>
                    Provide an intuitive and user-friendly interface for
                    travelers to explore and book tours.
                  </li>
                  <li>
                    Implement user registration and authentication to ensure
                    secure access to user accounts.
                  </li>
                  <li>
                    Allow tour operators or administrators to manage tours and
                    bookings through an admin panel.
                  </li>
                  <li>
                    Integrate a secure payment gateway to handle online
                    transactions.
                  </li>
                </ol>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Features</h3>
          </Col>
          <Col lg="7">
            <ol>
              <li>Tour Listings and Details:</li>
              <p>
                Display visually appealing tours with relevant information like
                destination, duration, and price.
              </p>
              <p>
                Enable users to filter tours based on location, category, and
                price range.
              </p>
              <li>User Registration and Authentication:</li>
              <p>
                Allow users to sign up or log in to access personalized
                features.
              </p>
              <p>
                Implement user authentication using JSON Web Tokens (JWT) for
                secure access to user accounts.
              </p>
              <li>Booking and Payment:</li>
              <p>
                Enable users to select tours and proceed with the booking
                process.
              </p>
              <p>
                Integrate the Stripe payment gateway to handle secure and
                seamless online transactions.
              </p>
              <li>User Profile:</li>
              <p>
                Provide users with a profile section to view and manage their
                bookings, personal details, and preferences.
              </p>
              <li>Admin Panel:</li>
              <p>
                Create an admin panel for tour operators or administrators to
                manage tours, bookings, and user data.
              </p>
              <p>
                Enable admins to add new tours, update tour details, and view
                booking statistics.
              </p>
            </ol>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Technology Stack</h3>
          </Col>
          <Col lg="7">
            <h6>Front-End:</h6>
            <ol>
              <li>
                CSS: Styling language for designing the visual appearance of the
                website.
              </li>
              <li>
                Bootstrap: Front-end framework for responsive and
                mobile-friendly web design.
              </li>
              <li>
                React: JavaScript library for building the user interface and
                components.
              </li>
              <li>
                React Router DOM: Library for client-side routing and navigation
                within the React application.
              </li>
              <li>
                React Slick: Carousel component for displaying tour images and
                details.
              </li>
              <li>
                React Responsive Masonry: Library for creating a responsive
                masonry layout.
              </li>
              <li>Remixicon: Icon library for adding icons to the UI.</li>
            </ol>
            <h6>Back-End:</h6>
            <ol>
              <li>
                Express: Web application framework for building the server-side
                application.
              </li>
              <li>
                Node.js: JavaScript runtime environment for executing
                server-side code.
              </li>
              <li>
                MongoDB: NoSQL database for storing tour information, user data,
                and bookings.
              </li>
              <li>
                Mongoose: Object Data Modeling (ODM) library for interacting
                with the MongoDB database.
              </li>
              <li>
                Bcryptjs: Library for secure password hashing and
                authentication.
              </li>
              <li>
                JSON Web Tokens (JWT): For implementing user authentication and
                securing user access.
              </li>
              <li>
                Cookie-parser: Middleware to handle cookies in the backend.
              </li>
              <li>
                Cors: Middleware for enabling cross-origin resource sharing.
              </li>
            </ol>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Implementation</h3>
          </Col>
          <Col lg="7">
            <h6>Front-End Development:</h6>
            <ol>
              <li>
                Utilize CSS and Bootstrap for designing a visually appealing and
                responsive user interface.
              </li>
              <li>Implement React components for building the frontend.</li>
              <li>Use React Router DOM for handling client-side routing.</li>
              <li>
                Integrate React Slick and React Responsive Masonry for
                displaying tours in a visually appealing manner.
              </li>
              <li>Incorporate Remixicon for adding icons to the UI.</li>
            </ol>
            <h6>Back-End Development:</h6>
            <ol>
              <li>
                Develop the back-end using Express and Node.js to create a
                RESTful API to handle requests and responses.
              </li>
              <li>
                Set up the MongoDB database for storing tour information, user
                data, and bookings.
              </li>
              <li>Implement secure password hashing using bcryptjs.</li>
              <li>
                Use JSON Web Tokens (JWT) for user authentication and protected
                routes.
              </li>
              <li>
                Implement cookie-parser and cors middleware for handling cookies
                and enabling cross-origin resource sharing.
              </li>
            </ol>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Challenges</h3>
          </Col>
          <Col lg="7">
            <ol>
              <li>
                Integrating the Stripe payment gateway and ensuring secure
                transaction handling.
              </li>
              <li>
                Designing an intuitive and visually appealing user interface to
                enhance the user experience.
              </li>
              <li>
                Implementing secure user authentication and protecting sensitive
                user data.
              </li>
            </ol>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Conclusion</h3>
          </Col>
          <Col lg="7">
            {" "}
            Wanderlust Tour Booking Service" successfully connects travelers
            with exciting tour experiences worldwide. The use of CSS, Bootstrap,
            React, React Router DOM, React Slick, React Responsive Masonry, and
            Remixicon in the frontend, along with Express, Node.js, MongoDB,
            Mongoose, bcryptjs, and JSON Web Tokens (JWT) in the backend,
            provides a scalable and efficient platform. The integration of the
            Stripe payment gateway ensures secure and seamless online payment
            processing. Despite challenges, the platform fulfills its objectives
            of facilitating memorable travel experiences through a user-friendly
            and secure booking service.
          </Col>
        </Row>
      </Container>
      {/* screenshots */}

      <div className="p-5">
        <div className="flux row image-container">
          <h3 className="display-4 mb-4">Screenshots</h3>
          <hr className="t_border my-4 ml-0 text-left" />
          <div className="col">
            <img src={Img01} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img02} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img03} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img04} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img05} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img06} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img07} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img08} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img09} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img10} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img11} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img12} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img13} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img14} alt="" className="screenshot" />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default TourMgmt;
