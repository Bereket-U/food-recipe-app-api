import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [searchString, setSearchString] = useState("");
  const APP_ID = "cbfb9ddd";
  const APP_KEY = "eaffffd5345dc91211b5f43a73e5975f";
  const url = `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await axios.get(url);
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
    </div>
  );
}

export default App;
