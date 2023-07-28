import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Hospitalmgmt = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Elixir Healthcare | Case Study </title>
        </Helmet>
        <div>
          <Link to="/portfolio">Back</Link>
        </div>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Elixir Healthcare - Case Study</h1>
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
                Elixir Healthcare Doctor Appointment Booking and Management" is
                a web application designed to streamline the process of booking
                and managing doctor appointments. The front end of the
                application is built using React along with various dependencies
                such as react-icons, react-router-dom, react-spinners,
                react-toastify, and swiper. The development also includes Vite
                as a build tool for quick and efficient development.
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
                The objective of the "Elixir Healthcare Doctor Appointment
                Booking and Management" application is to provide patients with
                an easy-to-use platform for booking doctor appointments, while
                also enabling healthcare providers to efficiently manage their
                appointment schedules. The application aims to enhance the
                overall healthcare experience for patients and doctors alike.
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
              <li>Doctor Search and Selection:</li>
              <p>
                Patients can search for doctors based on specialties, location,
                and availability.
              </p>
              <p>
                They can view detailed profiles of doctors, including their
                qualifications and reviews.
              </p>
              <li>Appointment Booking:</li>
              <p>
                Patients can select preferred appointment slots from the
                doctor's availability.
              </p>
              <p>
                They can confirm and book appointments in real-time, receiving
                confirmation notifications.
              </p>
              <li>Patient Dashboard:</li>
              <p>
                Patients have access to a dashboard where they can view and
                manage their appointments.
              </p>
              <p>They can also view their medical history and prescriptions.</p>
              <li>Doctor Dashboard:</li>
              <p>
                Doctors have a personalized dashboard for managing their
                appointment schedules.
              </p>
              <p>They can view and accept/reject appointment requests.</p>
              <li>Notifications:</li>
              <p>
                The application sends automated notifications to patients and
                doctors for appointment updates.
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
                React: JavaScript library for building the user interface and
                components.
              </li>
              <li>React Icons: Library for adding icons to the UI.</li>
              <li>
                React Router DOM: Library for client-side routing and navigation
                within the React application.
              </li>
              <li>
                React Spinners: Library for adding loading spinners to the UI.
              </li>
              <li>
                React Toastify: Library for displaying toast notifications.
              </li>
              <li>Swiper: Library for creating touch slider carousels.</li>
            </ol>
            <h6>Build Tools and Dependencies:</h6>
            <ol>
              <li>Vite: Build tool for quick and efficient development.</li>
              <li>
                Tailwind CSS: Utility-first CSS framework for styling
                components.
              </li>
              <li>
                PostCSS: Tool for transforming CSS with JavaScript plugins.
              </li>
              <li>
                Autoprefixer: PostCSS plugin for adding vendor prefixes to CSS.
              </li>
              <li>
                ESLint: Tool for identifying and fixing code errors and
                enforcing code style rules.
              </li>
              <li>
                eslint-plugin-react: ESLint plugin for React specific linting
                rules.
              </li>
              <li>
                eslint-plugin-react-hooks: ESLint plugin for React hooks related
                linting rules.
              </li>
              <li>
                eslint-plugin-react-refresh: ESLint plugin for React Refresh
                linting rules.
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
                Utilize React and its dependencies to build the user interface
                and components.
              </li>
              <li>
                Implement React Router DOM for handling client-side routing and
                navigation.
              </li>
              <li>
                Incorporate react-icons to add icons for improved user
                experience.
              </li>
              <li>
                Use react-spinners for adding loading spinners during data
                fetching.
              </li>
              <li>
                Integrate react-toastify for displaying toast notifications.
              </li>
            </ol>
            <h6>Styling:</h6>
            <ul>
              <li>
                {" "}
                Use Tailwind CSS for efficient and responsive styling of
                components.
              </li>
            </ul>
            <h6>Build and Development:</h6>
            <ul>
              <li>
                {" "}
                Use Vite as the build tool for quick development and hot module
                replacement.
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Challenges</h3>
          </Col>
          <Col lg="7">
            <ol>
              <li>
                Integrating various dependencies and libraries for a smooth user
                experience.
              </li>
              <li>
                Ensuring efficient management of doctor appointments and
                handling concurrent bookings.
              </li>
              <li>
                Implementing real-time notifications for appointment updates.
              </li>
            </ol>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Conclusion</h3>
          </Col>
          <Col lg="7">
            The "Elixir Healthcare Doctor Appointment Booking and Management"
            application provides an efficient and user-friendly platform for
            patients to book doctor appointments and healthcare providers to
            manage their schedules effectively. Leveraging React and a range of
            dependencies, the application offers a seamless experience for both
            patients and doctors. The integration of real-time notifications and
            efficient appointment management enhances the overall healthcare
            experience, achieving the objective of streamlining doctor
            appointment booking and management.
          </Col>
        </Row>
      </Container>
      {/* screenshots */}

      <div className="p-5">
        <div className="flux row image-container">
          {/* <h3 className="display-4 mb-4">Screenshots</h3>
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
          </div> */}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Hospitalmgmt;
