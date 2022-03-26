import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchLogo from "./search.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  typography: {
    logo: {
      fontSize: 50,
      fontFamily: ["Sniglet", "cursive"].join(","),
      fontWeight: 600,
      color: "#8ABE61",
    },
    moto: {
      fontSize: 20,
      fontFamily: ["Sniglet", "cursive"].join(","),
      fontWeight: 600,
      color: "#8ABE61",
    },
    logoSecond: {
      fontSize: 50,
      fontFamily: ["Sniglet", "cursive"].join(","),
      fontWeight: 600,
      color: "#B73F92",
    },
    button: {
      backgroundColor: "#8ABE61",
    },
  },
});

const Search = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        paddingBottom={7}
        paddingTop={7}
        sx={{
          mb: -2,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#FFFCEC",
          backgroundImage: `url(https://904590.smushcdn.com/2228630/wp-content/uploads/2021/12/5437-MMSB-ReThink_Web-Banners_Food-Waste_Tablet.jpg?lossy=1&strip=1&webp=1)`,
        }}
      >
        <img width={100} src={SearchLogo}></img>
        <Stack
          sx={{
            minWidth: "",
            // padding: 4,
            //   backgroundColor: "#0001",
          }}
          alignItems="center"
        >
          <Typography variant="logo">
            Recipe <Typography variant="logoSecond">Finder</Typography>
          </Typography>
          <Typography variant="moto">The smart way to find recipes</Typography>
        </Stack>
      </Stack>
      <form onSubmit={props.searchRecipeS}>
        <Stack direction="row" spacing={1} justifyContent="center">
          <TextField
            required
            focused={true}
            color="success"
            type="text"
            name="search"
            placeholder="Search Recipe..."
            autoComplete="off"
            onChange={props.onChangeS}
            value={props.searchStringS}
            size="small"
          />
          <Button color="success" variant="contained" type="submit">
            Search
          </Button>
        </Stack>
      </form>
    </ThemeProvider>
  );
};

export default Search;
