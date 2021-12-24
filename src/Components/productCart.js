import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductCart({ title, image, id }) {
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval;

  const startTimer = () => {
    const countdownDate = new Date('Dec 30, 2021').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countdownDate - now;

      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);

      if (gap < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  let navigate = useNavigate();

  return (
    <div className="productCart my-4">
      <img src={image} alt="Shirt"></img>
      <h5> {title} </h5>
      <Row className="mt-4">
        <Col>
          <span> {timerMinutes}: </span> <span> {timerSeconds} </span>
        </Col>
        <Col>
          <Button
            onClick={() => {
              navigate(`/detail/${id}`);
            }}
          >
            Comprar
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ProductCart;
