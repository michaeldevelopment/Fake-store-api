import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProductCart from "../Components/productCart";

const Home = ({ products, seconds, active }) => {
  return (
    <>
      <h2 className="text-center my-3"> Products </h2>
      <Container className="my-1">
        <Row>
          {products.map((product) => {
            return (
              <Col key={product.id} md="auto">
                <ProductCart
                  title={product.title}
                  image={product.image}
                  id={product.id}
                  seconds={seconds}
                  active={active}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
