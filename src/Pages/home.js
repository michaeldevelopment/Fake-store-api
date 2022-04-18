import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProductCart from "../Components/productCart";

import { motion } from "framer-motion";

export default function Home({ products, seconds, active }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
                  className={`productCart[${product.id}]`}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </motion.div>
  );
}
