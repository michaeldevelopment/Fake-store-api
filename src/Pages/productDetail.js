import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

export default function ProductDetail() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setData(res.data));
  });

  return (
    <div className="productDetail mt-5">
      <Row>
        <Col>
          <img src={data.image} alt="Shirt"></img>
        </Col>
        <Col>
          <h3> {data.title} </h3>
          <h4> Price: ${data.price} </h4>
          <p> {data.description} </p>
          <hr />
          <p> Category: {data.category} </p>
        </Col>
      </Row>
    </div>
  );
}
