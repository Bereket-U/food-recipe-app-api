import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Recipe from "./components/Recipe/Recipe";
import Alert from "./components/Alert/Alert";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function App() {
  const [searchString, setSearchString] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "cbfb9ddd";
  const APP_KEY = "eaffffd5345dc91211b5f43a73e5975f";
  const url = `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (searchString !== "") {
      const result = await axios.get(url);
      if (!result.data.more) {
        return setAlert(`No recipe found for "${searchString}"`);
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
    <div className="">
      <h1>Food Recipe App</h1>
      <Alert alert={alert} />
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 3 }}
            direction="row"
            justifyContent="center"
          >
            {recipes != [] &&
              recipes.map((recipe) => (
                <Grid item key={uuid()}>
                  <Recipe key={uuid()} recipe={recipe} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
export default App;
