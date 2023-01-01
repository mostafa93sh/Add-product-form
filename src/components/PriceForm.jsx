import {
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormCard from "./FormCard";

const PriceForm = ({ priceInfoHandler }) => {
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [cost, setCost] = useState("");
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);
  const onFocueHandler = error && focus;

  useEffect(() => {
    if (
      price.trim().length === 0 &&
      salePrice.trim().length === 0 &&
      cost.trim().length === 0
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [error, price, salePrice, cost]);

  useEffect(() => {
    priceInfoHandler([price, salePrice, cost]);
  }, [price, salePrice, cost, priceInfoHandler]);

  return (
    <FormCard>
      <Typography variant='h6'>Price</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <InputLabel>Price</InputLabel>
          <TextField
            fullWidth
            size='small'
            onChange={(e) => setPrice(e.target.value)}
            onBlur={() => setFocus(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Sale price</InputLabel>
          <TextField
            fullWidth
            size='small'
            onChange={(e) => setSalePrice(e.target.value)}
            onBlur={() => setFocus(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <InputLabel>Cost</InputLabel>
          <TextField
            fullWidth
            size='small'
            onChange={(e) => setCost(e.target.value)}
            onBlur={() => setFocus(true)}
          />
        </Grid>
        {onFocueHandler && (
          <Grid item xs={12}>
            <Typography fontSize={11} color={`red`}>
              All information required{" "}
            </Typography>
          </Grid>
        )}
      </Grid>
    </FormCard>
  );
};

export default React.memo(PriceForm);
