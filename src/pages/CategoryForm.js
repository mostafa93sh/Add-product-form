import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormCard from "../components/FormCard";
import { Grid, Typography } from "@mui/material";

const CategoryForm = ({ catSubHandler }) => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [error, setError] = useState(true);
  const [focus, setFocus] = useState(false);
  const onFocueHandler = error && focus;
  // onFocus={()=>setFocus(true)}

  useEffect(() => {
    if (!error) {
      catSubHandler([category, subCategory]);
    }
  }, [catSubHandler, category, subCategory, error]);

  const categoryHandleChange = (event) => {
    setError(false);
    setCategory(event.target.value);
  };
  const subCategoryHandleChange = (event) => {
    setError(false);
    setSubCategory(event.target.value);
  };
  useEffect(() => {
    if (category.length === 0 && subCategory.length === 0) {
      setError(true);
      return;
    }
  }, [category, subCategory]);
  return (
    <FormCard>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl sx={{ m: 1, minWidth: 220 }} size='small' fullWidth>
            <InputLabel id='category-id'>Category</InputLabel>
            <Select
              labelId='category-id'
              label='category'
              id='select-id-category'
              fullWidth
              onChange={categoryHandleChange}
              onBlur={() => setFocus(true)}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl sx={{ m: 1, minWidth: 220 }} size='small' fullWidth>
            <InputLabel id='sub-category-id'>Sub-Category</InputLabel>
            <Select
              labelId='sub-category-id'
              label='sub-category'
              id='select-id-sub-category'
              fullWidth
              onChange={subCategoryHandleChange}
              onBlur={() => setFocus(true)}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            {onFocueHandler && (
              <Typography variant='subtitle2' color={`red`}>
                must choose both category and sub-category
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </FormCard>
  );
};

export default React.memo(CategoryForm);
