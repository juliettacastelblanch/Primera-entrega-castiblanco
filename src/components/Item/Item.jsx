import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { title, image, pid } = props;

  return (
    <Card style={{ width: "15rem" }} id={pid}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
       <Link to={`item/${pid}`}>Ver Mas</Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
