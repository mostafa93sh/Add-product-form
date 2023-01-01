import { Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormCard from "./FormCard";

const InventoryForm = ({ stockInfoHandler }) => {
  const [stockUnit, setStockUnit] = useState("");
  const [loc1, setLoc1] = useState("");
  const [loc2, setLoc2] = useState("");
  const [loc3, setLoc3] = useState("");
  const [loc4, setLoc4] = useState("");
  const [loc5, setLoc5] = useState("");
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);
  const onFocueHandler = error && focus;
  //  // onBlur={() => setFocus(true)}

  useEffect(() => {
    const data = { stockUnit, loc1, loc2, loc3, loc4, loc5 };
    if (
      loc1.trim().length === 0 &&
      loc2.trim().length === 0 &&
      loc3.trim().length === 0 &&
      loc4.trim().length === 0 &&
      loc5.trim().length === 0
    ) {
      setError(true);
    } else {
      setError(false);
      stockInfoHandler(data);
    }
  }, [stockUnit, loc1, loc2, loc3, loc4, loc5, stockInfoHandler]);
  // useEffect(() => {

  // }, []);
  return (
    <FormCard>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant='h5'>Inventory</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle2'>SUK</Typography>
          <TextField
            fullWidth
            size='small'
            onChange={(e) => setStockUnit(e.target.value)}
            onBlur={() => setFocus(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <Typography variant='h6'>Locations</Typography>
        </Grid>
        <Grid item container xs={12} spacing={4}>
          <Grid item xs={6}>
            <Typography variant='subtitle2'>Location 1</Typography>
            <TextField
              fullWidth
              size='small'
              onChange={(e) => setLoc1(e.target.value)}
              onBlur={() => setFocus(true)}
            />
            <Typography variant='subtitle2'>Location 2</Typography>
            <TextField
              fullWidth
              size='small'
              onChange={(e) => setLoc2(e.target.value)}
              onBlur={() => setFocus(true)}
            />
            <Typography variant='subtitle2'>Location 3</Typography>
            <TextField
              fullWidth
              size='small'
              onChange={(e) => setLoc3(e.target.value)}
              onBlur={() => setFocus(true)}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='subtitle2'>Location 3</Typography>
            <TextField
              fullWidth
              size='small'
              onChange={(e) => setLoc4(e.target.value)}
              onBlur={() => setFocus(true)}
            />
            <Typography variant='subtitle2'>Location 3</Typography>
            <TextField
              fullWidth
              size='small'
              onChange={(e) => setLoc5(e.target.value)}
              onBlur={() => setFocus(true)}
            />
          </Grid>
          {onFocueHandler && (
            <Grid item xs={12}>
              <Typography color='red' fontSize={10}>
                All information required
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </FormCard>
  );
};

export default React.memo(InventoryForm);
