import { Card } from "@mui/material";
import React from "react";

const FormCard = ({ children }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2, padding: "20px" }}>
      {children}
    </Card>
  );
};

export default React.memo(FormCard);
