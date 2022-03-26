import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchLogo from "./search.png";
import SearchBackground from "./SearchBackground.png";

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
      fontWeight: 500,
      color: "#8ABE61",
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
          mb: 3,
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
          <Typography variant="logo">Recipe Finder</Typography>
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
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default Search;
