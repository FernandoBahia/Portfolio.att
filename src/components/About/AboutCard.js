import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Nasci em Florianópolis tenho 18 anos e me interreso por <span className="purple">técnologia</span> desde pequeno, terminei o ensino médio integrado com o curso técnico de <b className="purple">Análise e Desenvolvimento de Sistemas</b> no ano de 2024 e
          pretendo cursar Ciências da computação para ampliar cada vez mais meus conhecimentos. &nbsp;
            <br />
            No mesmo ano comecei a trabalhar na <b className="purple">Softplan</b> como jovem aprendiz de Infraestrutura de TI. Me interreso muito por Desenvolvimento web, Banco de dados, Cyber Segurança, Redes e Inteligência Artificial            <br />
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
