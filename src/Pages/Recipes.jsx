/** @format */

import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import CardImages from "../Components/CardImages/CardImages";
import ContactBtn from "../Components/ContactBtn";

// import components
import Title from "../Components/Title/Title";
// URL
const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";
import "../styles/recipes.scss";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const fetchData = async () => {
    try {
      const request = await axios.get(url);
      const data = request.data.meals;
      return setRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => {
    fetchData();
  }, []);
  return (
    <section>
      <Container>
        <div className="recipes-title mb-1">
          <Title title={"Recipes"} subTitle={""} />
        </div>
        <Row>
          {recipes.slice(0, 3).map((el) => {
            return <CardImages key={el.idMeal} recipes={el} />;
          })}
          <div className="mt-4">
            <ContactBtn />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Recipes;
