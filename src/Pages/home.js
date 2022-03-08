import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProductCart from "../Components/productCart";

import { useSelector } from "react-redux";
import Loader from "../Components/Loader";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <h2 className="text-center my-3"> Products </h2>
      <Container className="my-1">
        <Row>
          <Loader />
          {products.map((product) => {
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
};

export default Home;
