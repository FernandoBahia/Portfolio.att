import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Sobre <strong className="purple">mim</strong>
            </h1>
            <Aboutcard />
          </Col>
          
        </Row>
        <h1 className="project-heading">
          Minhas <strong className="purple"> Habilidades </strong>
        </h1>

        <Techstack />

       

        <Github />
      </Container>
    </Container>
  );
}

export default About;
