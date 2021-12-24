import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ProductCart from '../Components/productCart';

export default function Home({ data }) {
  return (
    <>
      <h2 className="text-center my-3"> Products </h2>
      <Container className="my-1">
        <Row>
          {data.map((product) => {
            return (
              <Col key={product.id} md="auto">
                <ProductCart
                  title={product.title}
                  image={product.image}
                  id={product.id}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
