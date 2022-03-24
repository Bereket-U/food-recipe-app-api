import React from "react";
import { v4 as uuid } from "uuid";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ recipes }) => {
  return (
    <div>
      <Box>
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
  );
};

export default Recipes;
