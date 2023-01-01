import { DescriptionRounded } from "@mui/icons-material";
import { Grid, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import FormCard from "../components/FormCard";

const TitleDescriptionForm = ({ titleDescHandler }) => {
  const [titleD, setTitle] = useState("");
  const [descD, setDesc] = useState("");
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);
  const onFocueHandler = error && focus;
  // onBlur={() => setFocus(true)}

  useEffect(() => {
    if (titleD.trim().length === 0 && descD.trim().length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  }, [titleD, descD]);
  useEffect(() => {
    if (!error) {
      titleDescHandler({ titleD, descD });
    } else {
      return;
    }
  }, [error, titleDescHandler, titleD, descD]);
  // const saveHandle = () => {
  //   if (title.length === 0 || !desc.length === 0) {
  //     setError(true);
  //     return;
  //   }
  //   dispatch(addTitleDesc({ title, desc }));
  // };
  const titleHandleChange = useCallback((event) => {
    const {
      target: { value },
    } = event;

    setTitle(value);
  }, []);
  const descHandleChang = useCallback((e) => {
    const descD = e.target.value;
    setDesc(descD);
  }, []);

  return (
    <FormCard>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h6'>Title</Typography>
          <TextField
            fullWidth
            label='title'
            id='title'
            size='small'
            onChange={titleHandleChange}
            onBlur={() => setFocus(true)}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Description</Typography>

          <TextField
            fullWidth
            multiline
            maxRows={4}
            label='Description'
            id='description'
            size='small'
            onChange={descHandleChang}
            onBlur={() => setFocus(true)}
          />
        </Grid>

        <Grid item container xs={12}>
          <Grid item xs={12}>
            {onFocueHandler && (
              <Typography color='red' fontSize={10}>
                please write both title and description
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </FormCard>
  );
};

export default React.memo(TitleDescriptionForm);
