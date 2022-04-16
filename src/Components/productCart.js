import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductCart({ title, image, id }) {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(false);
  const [minutes, setMinutes] = useState(Math.floor(Math.random() * 2));
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 59) + 0);

  var timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (seconds === 0 && minutes === 0) {
        setMinutes(0);
        setSeconds(0);
        setActive(true);
        clearInterval(timer.current);
      }
    }, 1000);

    return () => clearInterval(timer.current);
  });

  const navigate = useNavigate();

  const handleOnRedirect = () => {
    navigate(`/detail/${id}`);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="productCart my-4">
      <img src={image} alt={title}></img>
      <h5 className="titleProductCart"> {title} </h5>
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
          <Button
            onClick={handleOnRedirect}
            disabled={active}
            className="buyButton"
          >
            Comprar
          </Button>
        </Col>
        <Col>
          <button id="incrementBtn" onClick={handleIncrement}>
            Inc+
          </button>
          <p id="counter">{counter}</p>
        </Col>
      </Row>
    </div>
  );
}

export default ProductCart;
