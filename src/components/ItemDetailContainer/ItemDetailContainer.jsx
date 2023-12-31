import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProducto(json);
        console.log(json);
        
      });
  }, [id]);

  return (
    <div>
     
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={producto?.image} />

        <Card.Body>
          <Card.Title>{producto?.title}</Card.Title>
          <Card.Title>{producto?.description}</Card.Title>
          <Card.Title>{producto?.price}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
