import React from "react";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import "./style.css";

const columns = {
  columnCount: 3
};


function Cards(props) {
  return (
    <Container>
      <CardColumns style={columns}>
        <Card className="p-2">
          <img
            src={props.image}
            alt={props.name}
            onClick={() => props.clickHandler(props.id)}
          />
        </Card>
      </CardColumns>
    </Container>

  );
}

export default Cards;
