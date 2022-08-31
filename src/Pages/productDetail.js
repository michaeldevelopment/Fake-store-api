import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);

  const productData = products.find((p) => p.id === Number(id));
  const {
    image,
    title,
    price,
    description,
    category,
    rating: { rate, count },
  } = productData;

  return (
    <div className="productDetail mt-5">
      <Row>
        <Col>
          <img src={image} alt={title} />
        </Col>
        <Col>
          <h3> {title} </h3>
          <h4> Price: ${price} </h4>
          <p> {description} </p>
          <hr />
          <p> Category: {category} </p>
          <p>
            Rating: {rate}
            <span> &#9733;</span> Count: {count}
          </p>
        </Col>
      </Row>
    </div>
  );
}
