import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img01 from "./assets/itcity/itcity-1.png";
import Img02 from "./assets/itcity/itcity-2.png";
import Img03 from "./assets/itcity/itcity-3.png";
import Img04 from "./assets/itcity/itcity-4.png";
import Img05 from "./assets/itcity/itcity-5.png";
import Img06 from "./assets/itcity/itcity-6.png";

const ItCity = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> ItCity | Case Study </title>
        </Helmet>
        <div>
          <Link to="/portfolio">Back</Link>
        </div>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">ItCity Online Store - Case Study</h1>
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
                ITCity Online Store is an e-commerce platform that provides
                customers with a wide range of IT products, including laptops,
                desktops, smartphones, peripherals, and accessories. The
                platform is built using React, Redux, React Bootstrap, CSS, and
                integrates with a RESTful API for managing products, user
                authentication, and order processing.
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
                    To create a user-friendly online store that allows customers
                    to browse and purchase IT products easily.
                  </li>
                  <li>
                    To implement a secure user authentication system to protect
                    user data and ensure a personalized shopping experience.
                  </li>
                  <li>
                    To integrate with a RESTful API to fetch product data,
                    manage user accounts, and process orders.
                  </li>
                  <li>
                    To utilize Redux for state management, ensuring efficient
                    and scalable handling of application data.
                  </li>
                  <li>
                    To design a responsive and visually appealing user interface
                    using React Bootstrap and CSS.
                  </li>
                  <li>
                    To optimize the website's performance to handle high traffic
                    and concurrent users.
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
              <li>
                User Registration and Authentication: Customers can create
                accounts, log in, and log out securely.
              </li>
              <li>
                Product Catalog: The platform displays a variety of IT products
                with details like name, description, price, and images.
              </li>
              <li>
                Product Search and Filtering: Customers can search for products
                based on categories, brands, and specifications.
              </li>
              <li>
                Product Reviews and Ratings: Users can leave reviews and ratings
                for products they have purchased.
              </li>
              <li>
                Shopping Cart: Customers can add products to their cart, update
                quantities, and proceed to checkout.
              </li>
              <li>
                Order Processing: The platform handles order processing,
                payment, and order confirmation.
              </li>
              <li>
                User Profile: Customers have access to their profile information
                and order history.
              </li>
              <li>
                Admin Dashboard: Administrators have access to a dashboard for
                managing products, orders, and user accounts.
              </li>
            </ol>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Technology Stack</h3>
          </Col>
          <Col lg="7">
            <ol>
              <li>
                Front-End: React, Redux, React Bootstrap, HTML5, CSS3,
                JavaScript.
              </li>
              <li>
                Back-End: RESTful API (built using Node.js, Express.js, and
                MongoDB) for managing products, user authentication, and orders.
              </li>
              <li>
                Database: MongoDB for storing product data, user information,
                and order details.
              </li>
              <li>
                User Authentication: JWT (JSON Web Tokens) for secure user
                authentication and authorization.
              </li>
              <li>
                Styling: CSS and React Bootstrap for responsive and visually
                appealing UI design.
              </li>
            </ol>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Implementation</h3>
          </Col>
          <Col lg="7">
            <ol>
              <li>
                Front-End Development: The user interface is built using React
                and styled with CSS and React Bootstrap components for a
                responsive and visually appealing design. Redux is used for
                managing the application state efficiently.
              </li>
              <li>
                Back-End Development: The RESTful API is developed using Node.js
                and Express.js, integrated with MongoDB for data storage.
                Endpoints for product management, user authentication, and order
                processing are implemented.
              </li>
              <li>
                User Authentication: JWT is used for secure user authentication.
                User credentials are encrypted and stored securely in the
                database.
              </li>
              <li>
                Product Management: Products are fetched from the API and
                displayed on the platform, along with their details. Product
                search and filtering are implemented.
              </li>
              <li>
                Shopping Cart and Order Processing: Customers can add products
                to their cart, update quantities, and proceed to checkout. Order
                data is processed securely and confirmed to the customer.
              </li>
              <li>
                User Profile: Users can view and edit their profile information,
                as well as access their order history.
              </li>
              <li>
                Admin Dashboard: An admin dashboard is created for authorized
                administrators to manage products, orders, and user accounts.
              </li>
              <li>
                Testing and Optimization: The application is thoroughly tested
                for functionality, performance, and security. Performance
                optimizations are applied to ensure smooth user experience even
                during high traffic.
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
                Integrating with the RESTful API: Properly integrating the
                front-end with the back-end API, handling authentication, and
                managing data flow.
              </li>
              <li>
                Responsive Design: Ensuring that the online store works
                seamlessly across different devices and screen sizes.
              </li>
              <li>
                Security: Implementing robust security measures to protect user
                data and prevent unauthorized access to sensitive information.
              </li>
              <li>
                State Management: Efficiently managing application state using
                Redux to handle complex interactions and maintain data
                consistency.
              </li>
            </ol>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Conclusion</h3>
          </Col>
          <Col lg="7">
            <p>
              ITCity Online Store is a robust and user-friendly e-commerce
              platform built using React, Redux, React Bootstrap, CSS, and
              integrated with a RESTful API for efficient product management,
              user authentication, and order processing. The platform offers
              customers a seamless shopping experience for IT products, while
              administrators can efficiently manage products, orders, and user
              accounts through the admin dashboard. Continuous updates and
              improvements are essential to keep the platform up-to-date and to
              cater to the evolving needs of customers and the IT industry.
            </p>
          </Col>
        </Row>
      </Container>

      {/* screenshots */}

      <div className="p-5">
        <div className="flux row image-container">
          <h3 className="display-4 mb-4">Screenshots</h3>
          <hr className="t_border my-4 ml-0 text-left" />
          <div className="col">
            <img src={Img05} alt="" className="screenshot" />
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
            <img src={Img01} alt="" className="screenshot" />
          </div>
          <div className="col">
            <img src={Img06} alt="" className="screenshot" />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ItCity;
