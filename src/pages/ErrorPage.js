import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Container maxWidth='md'>
      <Typography color='blueviolet' variant='h4'>
        There is an error
      </Typography>
      <Typography color='blueviolet' variant='subtitle2'>
        {error}
      </Typography>
    </Container>
  );
};

export default ErrorPage;
