import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Alert from "./components/Alert/Alert";
import Search from "./components/Search/Search";
import Recipes from "./components/Recipes/Recipes";
import Paper from "@mui/material/Paper";

function App() {
  const [searchString, setSearchString] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const [message, setMessage] = useState("");

  const APP_ID = "cbfb9ddd";
  const APP_KEY = "eaffffd5345dc91211b5f43a73e5975f";
  const url = `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (searchString !== "") {
      const result = await axios.get(url);
      if (!result.data.more) {
        return setAlert(`No recipe found for "${searchString}"`);
      }
      if (result.data.more) {
        setMessage(`Result found for "${searchString}"`);
      }
      setRecipes(result.data.hits);
      console.log(result);
      setSearchString("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };
  const onChange = (e) => {
    setSearchString(e.target.value);
  };

  const searchRecipe = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      <Search
        alert={alert}
        searchRecipeS={searchRecipe}
        onChangeS={onChange}
        searchStringS={searchString}
      />
      <Alert alert={alert} message={message} />
      <Recipes recipes={recipes} />
    </div>
  );
}
export default App;
