import React from "react";
import { v4 as uuid } from "uuid";

const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => {
        return (
          <ul key={uuid()}>
            <li>{ingredient.text}</li>git status
          </ul>
        );
      })}
    </div>
  );
};

export default Ingredients;
