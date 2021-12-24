import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ProductCart from '../Components/productCart';

export default function Home({ data }) {
  return (
    <>
      <Container className="my-5">
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
