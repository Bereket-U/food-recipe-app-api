import React from "react";
import { Alert as MyAlert } from "@mui/material";
import Stack from "@mui/material/Stack";

const Alert = ({ alert, message }) => {
  if (alert !== "") {
    return (
      <Stack
        sx={{
          minWidth: "40%",
        }}
        alignItems="center"
        marginBottom={2}
        marginTop={2}
      >
        <MyAlert severity="error">{alert}</MyAlert>
      </Stack>
    );
  } else if (message !== "") {
    return (
      <Stack
        sx={{
          minWidth: "40%",
        }}
        alignItems="center"
        marginBottom={2}
        marginTop={2}
      >
        <MyAlert severity="success">{message}</MyAlert>
      </Stack>
    );
  } else {
    return <div></div>;
  }
};

export default Alert;
