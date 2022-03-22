import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Recipe from "./components/Recipe/Recipe";
import Alert from "./components/Alert/Alert";

function App() {
  const [searchString, setSearchString] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "cbfb9ddd";
  const APP_KEY = "eaffffd5345dc91211b5f43a73e5975f";
  const url = `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setSearchString(" ");
  };
  const onChange = (e) => {
    setSearchString(e.target.value);
  };

  const searchRecipe = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>Food Recipe App</h1>
      <form onSubmit={searchRecipe}>
        <input
          type="text"
          name="search"
          placeholder="Search Recipe"
          autoComplete="off"
          onChange={onChange}
          value={searchString}
        />
        <input type="submit" value="Search" />
      </form>
      <div>
        <h3>Recipes</h3>
        {/* {recipes != [] &&
            recipes.map((recipe) => <li>{recipe.recipe.label}</li>)} */}
        {recipes != [] &&
          recipes.map((recipe) => <Recipe key={uuid()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default App;
