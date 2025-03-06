"use client";
import React, { useState } from "react";
import { ListItemIcon, Menu, MenuItem, Popover, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const menuItems = [
  { label: "By Month", items: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] },
  { label: "Difficulty", items: ["Easy", "Easy To Moderate", "Moderate", "Moderate To Difficult", "Difficult", "Challenging"] },
  { label: "Season", items: ["Spring", "Summer", "Monsoon", "Autumn", "Winter"] },
  { label: "Theme", items: ["Beginner", "Couples", "Family With Kids", "Peaks View", "Lakes & River", "Glacier", "Hot Springs", "Meadow", "Off Beat Trek", "Crossover Through", "Frozen River & Waterfall"] },
];

const NestedMenu = ({ onSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [subMenu, setSubMenu] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
  };

  const handleSubMenuClick = (event, items) => {
    setSubMenu(items);
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuItemClick = (item) => {
    onSelect(item);
    handleClose();
  };

  const renderMenuItem = (label, items) => (
    <MenuItem
      key={label}
      sx={menuItemStyle}
      onClick={(e) => handleSubMenuClick(e, items)}
    >
      {label}
      <ListItemIcon sx={{ right: 0, position: "absolute" }}>
        <ChevronRightIcon />
      </ListItemIcon>
    </MenuItem>
  );

  const menuItemStyle = {
    color: "black",
    backgroundColor: "#f8f8f8",
    margin: "10px",
    padding: "10px 16px",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#ff7a00",
      color: "white",
    },
  };

  return (
    <div>
      <Typography
        sx={{
          color: "#ff7a00",
          height: "50px",
          padding: "13px",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "16px",
        }}
        aria-controls="main-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Find Treks By
      </Typography>
      <Menu
        id="main-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 60 * 4.5,
            width: "360px",
          },
        }}
      >
        {menuItems.map(({ label, items }) => renderMenuItem(label, items))}
      </Menu>
      <Popover
        id="sub-menu"
        anchorEl={subMenuAnchorEl}
        keepMounted
        open={Boolean(subMenuAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            width: "256px",
            marginLeft: "10px",
          },
        }}
      >
        {subMenu.map((item) => (
          <MenuItem
            key={item}
            sx={{
              color: "black",
              borderRadius: "10px",
              backgroundColor: "#f8f8f8",
              margin: "10px",
              "&:hover": {
                backgroundColor: "#ff7a00",
                color: "white",
              },
            }}
            onClick={() => handleSubMenuItemClick(item)}
          >
            {item}
          </MenuItem>
        ))}
      </Popover>
    </div>
  );
};

export default NestedMenu;
