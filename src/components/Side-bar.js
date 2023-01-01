import React from "react";
import "./Side-bar.css";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ViewComfyOutlinedIcon from "@mui/icons-material/ViewComfyOutlined";

import YellowButton from "./YellowButton";
import { NavLink } from "react-router-dom";

function SideBar() {
  const itemList = [
    { name: "Dashboard", icon: <GridViewIcon /> },
    { name: "add-product", icon: <ShoppingCartIcon /> },
    { name: "Category", icon: <FormatListBulletedIcon /> },
    { name: "Customers", icon: <PeopleIcon /> },
    { name: "Orders", icon: <ExploreOutlinedIcon /> },
    { name: "Coupuns", icon: <CardGiftcardOutlinedIcon /> },
    { name: "Admins", icon: <PersonOutlineOutlinedIcon /> },
    { name: "Settings", icon: <SettingsOutlinedIcon /> },
    { name: "Appearance", icon: <ViewComfyOutlinedIcon /> },
  ];
  return (
    <Box
      className='side-bar-style'
      sx={{
        borderRadius: 1,
        minWidth: 200,
        position: "fixed",
        top: 0,
      }}>
      <List>
        {itemList.map((item, i) => {
          return (
            <NavLink
              key={i}
              to={`${item.name}`}
              style={(isActive) =>
                isActive
                  ? {
                      textDecoration: "none",
                      backgroundColor: "yellow",
                      color: "gray",
                    }
                  : { backgroundColor: "yellow", color: "blanchedalmond" }
              }>
              <ListItem className='item'>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {item.name}
                </ListItemButton>
              </ListItem>
            </NavLink>
          );
        })}
        <ListItem>
          <ListItemButton>
            <YellowButton size={`small`}>
              <LogoutIcon />
              Logout
            </YellowButton>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default React.memo(SideBar);
