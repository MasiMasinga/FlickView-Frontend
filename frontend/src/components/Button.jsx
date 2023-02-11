import React from "react";

// Mui
import MuiButton from "@mui/material/Button";

const Button = ({ onClick, title }) => {
  return (
    <MuiButton
      onClick={onClick}
      variant="contained"
      sx={{
        bgcolor: "#213547",
        borderColor: "#213547",
        ":hover": { bgcolor: "#213547", borderColor: "#213547" },
      }}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
