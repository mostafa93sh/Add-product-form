import {
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FormCard from "../components/FormCard";
import { NavLink } from "react-router-dom";

const AddVariant = ({ attributesInfoHandler }) => {
  const savedColors = ["green", "red", "yellow", "purple", "pink", "primary"];
  const savedVariants = [
    "Size Large xxl xxxl red",
    "Size Large xxl xxxl yellow",
    "Size Large xxl xxxl green",
    "Size Large xxl xxxl puple",
    "Size Large xxl xxxl pink",
  ];
  const [option, setOption] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    if (option.trim().length === 0 && value.trim().length === 0 && touched) {
      setError(true);
    } else {
      setError(false);
      attributesInfoHandler({ option, value });
    }
  }, [option, value, error, attributesInfoHandler, touched]);

  return (
    <FormCard>
      <Box>
        <Typography variant='h6'>Variants</Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap-reverse",
            justifyContent: "space-around",
          }}>
          <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={5}>
              <Typography variant='subtitle2'>Option name </Typography>
              <TextField
                id='outlined-basic'
                label='Option name'
                variant='outlined'
                size='small'
                fullWidth
                sx={{ maxWidth: 300 }}
                onChange={(e) => setOption(e.target.value)}
                onBlur={() => setTouched(true)}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant='subtitle2'>Value </Typography>
              <TextField
                id='outlined-basic'
                label='value'
                variant='outlined'
                size='small'
                fullWidth
                sx={{ maxWidth: 300 }}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => setTouched(true)}
              />
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ pt: "15px" }}>
                <IconButton>
                  <NavLink to={`/add-variant`}>
                    <AddBoxOutlinedIcon
                      sx={{
                        fontSize: "45px",

                        color: "gray",
                      }}
                    />
                  </NavLink>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={1}>
          {savedColors.map((colorName, i) => {
            return (
              <Grid item xs={2} key={i}>
                <Chip label={colorName} onDelete variant='outlined' />
              </Grid>
            );
          })}
        </Grid>
        <Divider textAlign='right'>Save</Divider>
        <Stack>
          <List>
            {savedVariants.map((variant, i) => {
              return (
                <ListItem key={i}>
                  <Chip
                    variant='outlined'
                    onDelete
                    label={variant}
                    sx={{ borderRadius: 2 }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Stack>
      </Box>
    </FormCard>
  );
};

export default React.memo(AddVariant);
