import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NETFLIX from "../../Assets/Projects/NETFLIX.png";
import emotion from "../../Assets/Projects/emotion.png";
import MOVIEFLIXDB from "../../Assets/Projects/MOVIEFLIXDB.png";
import StudyNotion from "../../Assets/Projects/StudyNotion.png";
import suicide from "../../Assets/Projects/suicide.png";
import COVERCART from "../../Assets/Projects/COVERCART.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudyNotion}
              isBlog={false}
              title="StudyNotion"
              description="StudyNotion is an innovative ed-tech platform built on the MERN stack (MongoDB, ExpressJS, NodeJS, and ReactJS) to transform education. It provides a seamless, interactive learning experience with strong features, secure authentication, and efficient media management for students and instructors. This platform redefines education for global accessibility and engagement."
              ghLink="https://github.com/AkarshGupta1/StudyNotion"
              demoLink="https://study-notion-edtech-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={COVERCART}
              isBlog={false}
              title="COVERCART"
              description="Full-stack E-Commerce website using the MERN STACK.  Created a robust backend using Node.js and Express.js, handling user-authentication, product management, and order processing.Created intuitive admin panel with real-time data visualization for order analytics, product categories, and customer statistics."
              ghLink="https://github.com/AkarshGupta1/COVERCART"
              demoLink="https://covercart.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MOVIEFLIXDB}
              isBlog={false}
              title="MOVIEFLIXDB"
              description="Developed a dynamic React-based movie application with integrated OMDB API for comprehensive movie searching and database integration. The project includes a powerful search feature that allows users to instantly find movies by title, providing an interactive and efficient movie browsing experience. JavaScript, ReactJS, and Axios were utilized to create MOVIEFLIXDB, demonstrating proficiency in building engaging web applications."
              ghLink="https://github.com/AkarshGupta1/MOVIEFLIXDB"
              demoLink="https://movieflixdb.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NETFLIX}
              isBlog={false}
              title="NETFLIX - CLONE"
              description="Developed Netflix Clone, a user-friendly movie website using React.js, offering a seamless browsing experience akin to the popular streaming platform. Integrated an API for a vast database of movies and web series, providing users with a centralized hub for diverse content exploration."
              ghLink="https://github.com/AkarshGupta1/NETFLIX---CLONE"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
