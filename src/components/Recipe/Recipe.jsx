import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients, dishType } = recipe.recipe;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 300 }}>
      <CardMedia component="img" alt={label} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dishType[0]}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={handleExpandClick}>
          Read More
        </Button>
        <form action={url}>
          <Button type="submit" size="small">
            link
          </Button>
        </form>
      </CardActions>
      {expanded && <Ingredients ingredients={ingredients} />}
    </Card>
  );
};

export default Recipe;
