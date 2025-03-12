import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Nasci em Florianópolis, tenho 18 anos e me interesso por <span className="purple">Técnologia</span> desde pequeno, terminei o ensino médio integrado com o Curso Técnico de <b className="purple">Análise e Desenvolvimento de Sistemas</b> no ano de 2024 e
          comecei minha graduação de nível superior no ano de 2025 também em ADS. &nbsp;
            <br />
            Em 2024 também comecei a trabalhar na <b className="purple">Softplan</b> como jovem aprendiz de Infraestrutura de TI. Tenho uma paixão por desenvolvimento de Software, web, banco de dados, IA e Redes.           <br />
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
