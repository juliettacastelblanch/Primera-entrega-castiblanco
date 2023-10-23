import { useEffect, useState } from "react";
import Item from "../Item/Item";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemListContainer = () => {
  const [productos, setProductos] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductos(json);
        console.log(json);
      });
  }, []);

  return (
    <Container>
      <Row>
        {productos?.map((item) => {
          return (
            <Col xs key={item.id}>
              <Item
                title={item.title}
                image={item.image}
                pid={item.id}
                key={item.pid}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
