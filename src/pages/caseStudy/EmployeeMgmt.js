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
                The Employee Management System is a web application designed to
                efficiently manage employee-related tasks and information within
                an organization. The frontend of the application is built using
                React along with various dependencies such as react-icons,
                react-router-dom, react-spinners, react-toastify, and swiper.
                The development also includes Vite as a build tool for quick and
                efficient development.
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
                The objective of the Employee Management System is to streamline
                employee management processes, including employee data
                management, attendance tracking, leave management, and
                performance evaluation. The application aims to enhance the HR
                department's efficiency and provide a user-friendly interface
                for employees to access and manage their information.
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
              <li>Employee Data Management:</li>
              <p>
                HR administrators can add, view, and update employee details
                such as personal information, contact details, and job role.
              </p>
              <p>
                Employees can access and update their personal information
                through a secure login.
              </p>
              <li>Attendance Tracking:</li>
              <p>
                The system tracks employee attendance and generates reports on
                daily, weekly, and monthly attendance records.
              </p>
              <p>
                HR administrators can manage employee attendance and view
                attendance statistics.
              </p>
              <li>Leave Management:</li>
              <p>
                Employees can apply for leave through the system, specifying the
                leave type, duration, and reason.
              </p>
              <p>
                HR administrators can approve or reject leave applications and
                maintain a centralized leave record.
              </p>
              <li>Performance Evaluation:</li>
              <p>
                The system facilitates performance evaluations for employees,
                allowing HR administrators to set evaluation criteria and
                timelines.
              </p>
              <p>
                HR administrators can conduct performance appraisals and provide
                feedback to employees.
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
              <li>
                Use Swiper for creating touch slider carousels for
                presentations.
              </li>
            </ol>
            <h6>Styling:</h6>
            <ul>
              <li>
                Use Tailwind CSS for efficient and responsive styling of
                components.
              </li>
            </ul>
            <h6>Build and Development:</h6>
            <ul>
              <li>
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
                Handling employee data securely to ensure data privacy and
                compliance with regulations.
              </li>
              <li>
                Implementing attendance tracking and leave management with
                real-time updates.
              </li>
              <li>
                Designing a user-friendly interface that caters to both HR
                administrators and employees.
              </li>
            </ol>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Conclusion</h3>
          </Col>
          <Col lg="7">
            The Employee Management System efficiently manages employee-related
            tasks, including data management, attendance tracking, leave
            management, and performance evaluation. Leveraging React and various
            dependencies, the application provides a seamless experience for HR
            administrators and employees alike. The integration of real-time
            data updates and user-friendly components enhances the HR
            department's efficiency, achieving the objective of streamlining
            employee management within the organization.
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

export default EmployeeMgmt;
