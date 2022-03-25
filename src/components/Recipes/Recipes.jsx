import React from "react";
import { v4 as uuid } from "uuid";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ recipes }) => {
  return (
    <Box>
      <Grid container spacing={{ xs: 3 }} justifyContent="center">
        {recipes != [] &&
          recipes.map((recipe) => (
            <Grid item key={uuid()}>
              <Recipe key={uuid()} recipe={recipe} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Recipes;
