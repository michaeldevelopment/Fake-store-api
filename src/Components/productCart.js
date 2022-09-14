import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useTiming } from "../customHooks/useTiming";

function ProductCart({ title, image, onClickFunction }) {
  const { minutes, seconds, active } = useTiming();

  return (
    <>
      <div className="productCart my-4">
        <img src={image} alt={title}></img>
        <h5> {title} </h5>
        <Row className="mt-4">
          <Col>
            <span>
              {"0"}
              {minutes}:
            </span>
            <span>
              {seconds < 10 && "0"}
              {seconds}
            </span>
          </Col>
          <Col>
            <Button onClick={onClickFunction} disabled={active}>
              Comprar
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProductCart;
