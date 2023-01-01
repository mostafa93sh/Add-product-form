import { Button, createTheme, ThemeProvider } from "@mui/material";
import { amber } from "@mui/material/colors";
import React, { Fragment } from "react";

const YellowButton = ({ children, size, onClick, disabled }) => {
  const yellowColor = amber[500];
  const theme = createTheme({
    palette: {
      primary: {
        main: yellowColor,
      },
    },
  });

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Button
          color='primary'
          variant='contained'
          size={`${size}`}
          onClick={onClick}
          sx={{ minWidth: 130, float: "right" }}
          disabled={disabled}>
          {children}
        </Button>
      </ThemeProvider>
    </Fragment>
  );
};

export default YellowButton;
