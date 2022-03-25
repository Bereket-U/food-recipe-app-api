import React from "react";
import { Alert as MyAlert } from "@mui/material";
import Stack from "@mui/material/Stack";

// const Alert = ({ alert }) => {
//   return (
//     <div>
//       {alert === "" ? (
//         ""
//       ) : (
//         <Stack sx={{ minWidth: "40%" }} spacing={2}>
//           <MyAlert severity="error">{alert}</MyAlert>
//         </Stack>
//       )}
//     </div>
//   );
// };

const Alert = ({ alert }) => {
  if (alert !== "") {
    return (
      <Stack
        sx={{
          minWidth: "40%",
        }}
        alignItems="center"
        justifyContent="center"
        alignItems="center"
        marginTop={0}
      >
        <MyAlert severity="error">{alert}</MyAlert>
      </Stack>
    );
  } else {
    return <div></div>;
  }
};

export default Alert;
