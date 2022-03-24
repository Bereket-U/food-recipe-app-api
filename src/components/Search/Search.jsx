import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Search = (props) => {
  return (
    <Stack
      spacing={3}
      justifyContent="center"
      alignItems="center"
      paddingBottom={10}
      paddingTop={10}
    >
      <Stack
        sx={{
          minWidth: "40%",
          padding: 4,
          backgroundColor: "#0001",
        }}
        alignItems="center"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Food Recipe App</h1>
        <form onSubmit={props.searchRecipeS}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              type="text"
              name="search"
              placeholder="Search Recipe..."
              autoComplete="off"
              onChange={props.onChangeS}
              value={props.searchStringS}
              size="small"
            />

            <Button variant="outlined" type="submit">
              Search
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default Search;
