import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import permission from "../assets/projects/permission.png";
import promptease from "../assets/projects/promptease.png";
import jobtrack from "../assets/projects/jobtrack.png";
import bike from "../assets/projects/bike.png";
import ekart from "../assets/projects/ekart.png";
import weather from "../assets/projects/weather.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={permission}
              isBlog={false}
              title="Permission Management System"
              description="A full-stack role-based access control system designed to manage users, roles, and permissions efficiently. Implemented secure authentication using JWT and developed RESTful APIs for user and permission management. Optimized database performance using indexing in MongoDB."
              ghLink="https://github.com/charan-pendem/Permission_managment"
              demoLink="https://permission-mangement.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promptease}
              isBlog={false}
              title="PromptEase – AI Prompt Generation Platform"
              description="An AI-powered middleware application that generates structured and customizable prompts. Integrated multiple large language models using the OpenRouter API and provided options to customize tone, persona, and output format. Built with Streamlit for a fast and responsive user experience."
              ghLink="https://github.com/charan-pendem/PromptEase"
              demoLink="https://promptease-app.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobtrack}
              isBlog={false}
              title="JobTrack – Job Application Tracker"
              description="A web-based platform to track and manage job applications efficiently. Features include secure login, application status tracking, search and filter functionality, and a responsive dashboard. Built using the MERN stack with a focus on usability and performance."
              ghLink="https://github.com/charan-pendem/JobFlow"
              demoLink="https://job-flow-tv99.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bike}
              isBlog={false}
              title="Bike Information Retrieval System"
              description="An API-based application that fetches detailed bike information based on company and model name. Integrated third-party APIs to retrieve specifications dynamically and displayed results through a clean and user-friendly interface."
              ghLink="https://github.com/charan-pendem/401"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ekart}
              isBlog={false}
              title="Ekart – E-Commerce Web Application"
              description="A full-stack e-commerce platform supporting product listings, user authentication, and order management. Designed REST APIs for backend operations and built an intuitive frontend for browsing and purchasing products. Focused on scalability and clean architecture."
              ghLink="https://github.com/charan-pendem/ecart"
              demoLink="https://electrocart-puce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Information Application"
              description="A weather forecasting application that retrieves real-time weather data using public APIs. Allows users to search by city and view temperature, humidity, and weather conditions. Built with a focus on API integration and responsive UI."
              ghLink="https://github.com/charan-pendem/Wheather_api"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
