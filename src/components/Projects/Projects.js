import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="MediHealth"
              description="Healthcare Information website with Telehealth features"
              ghLink="https://github.com/hriday-sehgal/Medihealth-website"
              demoLink="https://hriday-sehgal.github.io/Medihealth-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tip Time App"
              description="An android app that can calculate the tip based on the service provided."
              ghLink="https://github.com/hriday-sehgal/Tip-Time-App/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Word Counter App"
              description="A ReactJs application which can tell the numbers of words written in a paragraph"
              ghLink="https://github.com/hriday-sehgal/Word-Counter-ReactJs-App"
              demoLink="https://hriday-sehgal.github.io/Word-Counter-ReactJs-App/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
