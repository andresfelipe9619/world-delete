import React from "react";
import { Typography } from "@mui/material";

const styled = {
  text: {
    backgroundColor: "red",
  },
};

const Confidentially = () => {
  return (
    <div>
      <Typography sx={styled.text} variant="h1">
        prueba
      </Typography>
    </div>
  );
};

export default Confidentially;
