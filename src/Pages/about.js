import React from "react";
import { Row, Col } from "react-bootstrap";
import Michael from "../images/michael.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.div className="aboutCard mt-4">
        <Row>
          <Col>
            <img src={Michael} alt="Michael"></img>
          </Col>
          <Col className="my-3">
            <h3> Michael Sanabria </h3>
            <p>
              Soy Frontend Developer en proceso de construcción. Más allá de
              todo lo que es importante, mi principal objetivo es vivir mi
              propósito y ser porción de vida para otros. Visto desde todos los
              ámbitos y perspectivas. Curioso y apasionado por lo estético,
              visual y funcional.
              <strong> ¡Gracias por visitar ésta sección! </strong>
            </p>
          </Col>
          <hr />
        </Row>
        <Row className="my-3">
          <ol>
            <h4> 3 Cosas que he aprendido: </h4>
            <li> El concepto y uso de React </li>
            <li> Express, mongo y mongoose </li>
            <li> Consumir APIS junto con React </li>
          </ol>
        </Row>
        <hr />
        <Row className="info">
          <Col>
            <p> Email: maicolsana12@gmail.com </p>
          </Col>
          <Col>
            <a href="https://github.com/michaeldevelopment">
              Has clic aqui para conocer mi perfil de GitHub
            </a>
          </Col>
        </Row>
      </motion.div>
    </>
  );
}
