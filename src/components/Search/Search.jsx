import React from "react";
import Alert from "../Alert/Alert";

const Search = (props) => {
  return (
    <div>
      <h1>Food Recipe App</h1>
      <form onSubmit={props.searchRecipeS}>
        <input
          type="text"
          name="search"
          placeholder="Search Recipe"
          autoComplete="off"
          onChange={props.onChangeS}
          value={props.searchStringS}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
