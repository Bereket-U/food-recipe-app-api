import React from "react";
import { v4 as uuid } from "uuid";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Recipe from "../Recipe/Recipe";
import { Container } from "@mui/material";

const Recipes = ({ recipes }) => {
  return (
    <Container
      lg={{
        padding: "20",
      }}
    >
      <Grid container spacing={{ xs: 3 }} justifyContent="center">
        {recipes != [] &&
          recipes.map((recipe) => (
            <Grid item key={uuid()}>
              <Recipe key={uuid()} recipe={recipe} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Recipes;
