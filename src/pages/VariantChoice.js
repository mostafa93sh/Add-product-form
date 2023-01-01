import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FormCard from "../components/FormCard";
import { useDispatch, useSelector } from "react-redux";
import { setAvaliablityTrue } from "../store/avaliablitySlice";

const VariantChoice = ({ variantShow }) => {
  const avaliablity = useSelector((state) => state.avaliablity);
  const dispatch = useDispatch();
  const [avaliable, setAvaliable] = useState(false);
  const avaliablityChangeHandle = (e) => {
    setAvaliable(e.target.value);
    if (e.target.value) {
      dispatch(setAvaliablityTrue());
    }
  };

  return (
    <FormCard>
      <Stack spacing={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='subtitle2' gutterBottom>
            Avaliable for pick
          </Typography>
          <FormControl size='small'>
            <Select onChange={avaliablityChangeHandle} defaultValue={avaliable}>
              <MenuItem value={true}>yes</MenuItem>
              <MenuItem value={false}>no</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='subtitle1'>
            Does the product have variants
          </Typography>
          <Select size='small' defaultValue={false} onChange={variantShow}>
            <MenuItem value={true}>yes</MenuItem>
            <MenuItem value={false}>no</MenuItem>
          </Select>
        </Box>
      </Stack>
    </FormCard>
  );
};

export default React.memo(VariantChoice);
