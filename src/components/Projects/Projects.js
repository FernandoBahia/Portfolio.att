import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import acsiv from "../../Assets/Projects/acsiv.PNG";
import saep from "../../Assets/Projects/print.saep.PNG";
import veiculos from "../../Assets/Projects/print.veiculos.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns de meus projetos mais recentes
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acsiv}
              isBlog={false}
              title="ACSIV Suporte - SA"
              description="Fornecer um sistema de suporte online para cartórios, separando as interações por setores específicos. Possibilitar comunicação entre Clientes (usuários que fazem dúvidas) e Administradores (usuários que fornecem respostas). Projeto feito em grupo, por isso esta no repositorio de outra pessoa"
              ghLink="https://github.com/juliapzp/projeto-sa"
              demoLink="https://www.canva.com/design/DAGP4-gYum8/PncM-rnUwOSd9MNN_0-MkQ/edit?utm_content=DAGP4-gYum8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saep}
              isBlog={false}
              title="Saep 2024"
              description="API de gerenciamento de Tarefas integrando o back-end e o Front-end, além de fazer o caso de uso os diagramas no BrModelo e o Script SQL"
              ghLink="https://github.com/FernandoBahia/Saep2024"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veiculos}
              isBlog={false}
              title="API Veiculos"
              description="API de gerenciamento de veiculos, onde é possivel o cadastro, edição e exclusão de veiculos, além de buscar por veiculos pela placa."
              ghLink="https://github.com/FernandoBahia/veiculos"
                        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
