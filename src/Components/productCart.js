import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTiming } from "../customHooks/useTiming";

function ProductCart({ title, image, id }) {
  const { minutes, seconds, active } = useTiming();
  let navigate = useNavigate();

  const handleOnRedirect = () => {
    navigate(`/detail/${id}`);
  };

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
            <Button onClick={handleOnRedirect} disabled={active}>
              Comprar
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProductCart;
