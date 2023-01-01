import {
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import FormCard from "../components/FormCard";

const Addon = ({ addonsInfohandler, savedAddon }) => {
  const allAddons = [
    "Extra cheese with salmone 1",
    "Extra cheese with salmone 2",
    "Extra cheese with salmone 3",
    "Extra cheese with salmone 4",
    "Extra cheese with salmone 5",
    "Extra cheese with salmone 6",
  ];
  const [addon, setAddon] = useState([]);

  // const addonInputHandler = (e) => {
  //   setAddon((prev) => [...prev, e.target.value]);
  //   console.log(addon);
  // };
  useEffect(() => {
    if (addon.length !== 0) {
      addonsInfohandler(addon);
    } else {
      console.log("MUST CHOOSE ADDONS");
    }
  }, [addon, addonsInfohandler]);

  return (
    <FormCard>
      <FormControl fullWidth size='small'>
        <InputLabel>Addons</InputLabel>
        <Select
          labelId='addons'
          onChange={(e) => setAddon(e.target.value)}
          fullWidth
          label='Choose Your addons '
          size='small'
          value={addon}>
          {allAddons.map((item, i) => {
            return (
              <MenuItem key={i} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      {addon.length !== 0 && (
        <Box>
          <Divider></Divider>
          <List>
            {savedAddon.map((item, i) => {
              return (
                <ListItem key={i}>
                  <ListItemButton>{item}</ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}
    </FormCard>
  );
};

export default React.memo(Addon);
