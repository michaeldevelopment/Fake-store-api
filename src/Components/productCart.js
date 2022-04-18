import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCart({ title, image, id }) {
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

  return (
    <motion.div
      className="productCart my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
      </Row>
    </motion.div>
  );
}

export default ProductCart;
