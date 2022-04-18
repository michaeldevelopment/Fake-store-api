import { Row, Col } from "react-bootstrap";

export default function Product({
  image,
  title,
  price,
  description,
  category,
  rating,
}) {
  return (
    <Row>
      <Col>
        <img src={image} alt={title} />
      </Col>
      <Col>
        <h3>{title}</h3>
        <h4>Price: ${price}</h4>
        <p>{description}</p>
        <hr />
        <p>Category: {category}</p>
        <p>
          Rating: {rating.rate}
          <span> &#9733;</span> Count: {rating.count}
        </p>
      </Col>
    </Row>
  );
}
