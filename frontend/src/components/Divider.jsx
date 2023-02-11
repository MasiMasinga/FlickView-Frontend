import React from "react";

// Mui
import MuiDivider from "@mui/material/Divider";

const Divider = ({ sx, width, alignSelf, pb }) => {
  return <MuiDivider sx={{ width: "50%", alignSelf: "center", pb: 5 }} />;
};

export default Divider;
