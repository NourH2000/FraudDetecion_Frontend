import React, { useState, useEffect } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Badge from "@mui/material/Badge";
import { Box } from "@mui/system";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import axios from "axios";

const MenuAppBar = () => {
  // for the menu of the acount , notifications ...
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  //data
  const [notificationsCount, setNotificationsCount] = useState([]);
  const [notificationsIds, setNotificationsIds] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:8000/notification/NotificationCount")
        .then((response) => {
          setNotificationsIds(response.data);

          setNotificationsCount((prev) => {
            if (JSON.stringify(prev) !== JSON.stringify(response.data)) {
              return response.data.length;
            }
          });
        });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // to get the list of unseen ids ( as a list and not an objects)

  // update the notification state ( seen ) when we clic on the notification icon
  const handleMenu = async (event) => {
    setAnchorEl(event.currentTarget);
    notificationsIds.map(async (notificationId) => {
      console.log(notificationId);
      await axios
        .get("http://localhost:8000/notification/NotificationUpdate", {
          params: {
            ids: notificationId,
          },
        })
        .then((response) => {
          console.log("hey");
        });
    });
  };
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={6} color="error">
          <MailOutlineIcon sx={{ color: "#113f67", fontSize: 30 }} />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
        onClick={handleMenu}
      >
        <Badge badgeContent={notificationsCount} color="error">
          <NotificationsOutlinedIcon sx={{ color: "#113f67", fontSize: 30 }} />
        </Badge>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle sx={{ color: "#113f67", fontSize: 35 }} />
      </IconButton>
    </Box>
  );
};

export default MenuAppBar;
