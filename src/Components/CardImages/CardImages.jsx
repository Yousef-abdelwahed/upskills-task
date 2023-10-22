/** @format */

import Card from "react-bootstrap/Card";

import "./cardImage.scss";

const CardImages = ({ recipes }) => {
  return (
    <>
      <Card style={{ width: "24rem" }} className="m-auto">
        <Card.Img variant="top" src={recipes.strMealThumb} className="w-100" />
        <Card.Body>
          <Card.Title>{recipes.strMeal}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardImages;
