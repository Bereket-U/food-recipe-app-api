import React from "react";
import { Alert as MyAlert } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Collapse } from "@mui/material";

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

const Alert = ({ alert, message }) => {
  const [open, setOpen] = React.useState(true);
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
        <Collapse in={open}>
          <MyAlert
            onClose={() => {
              setOpen(false);
            }}
            severity="error"
          >
            {alert}
          </MyAlert>
        </Collapse>
      </Stack>
    );
  } else if (message !== "") {
    return (
      <Stack
        sx={{
          minWidth: "40%",
        }}
        alignItems="center"
        justifyContent="center"
        alignItems="center"
      >
        <MyAlert onClose={() => {}} severity="success">
          {message}
        </MyAlert>
      </Stack>
    );
  } else {
    return <div></div>;
  }
};

export default Alert;
