import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProductCart from "../components/productCart";

import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const Home = () => {
  const { products } = useSelector((state) => state.productsReducer);

  return (
    <>
      <h2 className="text-center my-3"> Products </h2>
      <Container className="my-1">
        <Row>
          <Loader />
          {products?.map(({ title, image, id }) => {
            return (
              <Col key={id} md="auto">
                <ProductCart title={title} image={image} id={id} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
