import React from "react";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";

const NoRecipe = () => {
  return (
    <Stack alignItems="center" minHeight="100%" paddingTop={7}>
      <Stack maxWidth={"50%"}>
        <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/food_search_empty-image_@2x.png"></img>
      </Stack>
    </Stack>
  );
};

export default NoRecipe;
