import React from "react";

const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div>
      <h3>{label}</h3>
      <img src={image} alt="label" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <button>Ingredients</button>
    </div>
  );
};

export default Recipe;
