import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
       
           <h1 style={{ fontSize: "2.6em" }}> 
             O que você vai <span className="purple"> encontrar? </span> 
            </h1>
            <p className="home-about-body">
           Aqui você vai conhecer um pouco<b className="purple"> sobre mim</b> e minha trajetória até agora, além de conhecer alguns de meus projetos e minhas habilidades.
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me encontre aqui</h1>
            <p>
            <span className="purple">Redes de contato </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FernandoBahia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
          
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fernando-bahia-b65a8a231/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
