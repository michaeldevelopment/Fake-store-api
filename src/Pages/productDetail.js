import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default function ProductDetail({ data }) {
  const { id } = useParams();

  const productData = data.find((p) => p.id === Number(id));

  return (
    <div className="productDetail mt-5">
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
    </div>
  );
}
