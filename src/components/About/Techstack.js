import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiPostgresql, SiGithub, SiVisualstudio, SiHtml5, SiCss3 } from "react-icons/si"; // Importando ícones para HTML e CSS
import { FaLinux } from "react-icons/fa"; 
import { SiPowershell } from "react-icons/si"; 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio /> 
      </Col>
    </Row>
  );
}

export default Techstack;