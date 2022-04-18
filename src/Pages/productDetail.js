import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { motion } from "framer-motion";

export default function ProductDetail({ products }) {
  const { id } = useParams();

  const productData = products?.find((p) => p.id === Number(id));

  return (
    <motion.div
      className="productDetail mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Row>
        <Col>
          <img src={productData.image} alt={productData.title} />
        </Col>
        <Col>
          <h3> {productData.title} </h3>
          <h4> Price: ${productData.price} </h4>
          <p> {productData.description} </p>
          <hr />
          <p> Category: {productData.category} </p>
          <p>
            Rating: {productData.rating.rate}
            <span> &#9733;</span> Count: {productData.rating.count}
          </p>
        </Col>
      </Row>
    </motion.div>
  );
}
