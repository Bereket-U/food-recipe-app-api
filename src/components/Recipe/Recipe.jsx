import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";

const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;
  const [display, setDisplay] = useState(false);
  console.log(display);

  return (
    <div>
      <h3>{label}</h3>
      <img src={image} alt="label" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <button onClick={() => setDisplay(!display)}>Ingredients</button>
      {display && <Ingredients ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
