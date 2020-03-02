import React from "react";
import Container from "react-bootstrap/Container";
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Container>
    <CardColumns>
          <img
            src={props.image}
            alt={props.name}
            onClick={() => props.clickHandler(props.id)}
          />
          </CardColumns>
          </Container>
  );

}

export default Cards;
