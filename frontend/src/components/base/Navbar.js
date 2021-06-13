import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
  withStyles,
} from "@material-ui/core";
import {
  DeveloperBoard,
  ExitToApp,
  Person,
  Update,
  UpdateSharp,
} from "@material-ui/icons";

const useStyle = makeStyles({
  navbutton: {
    backgroundColor: "yellow",
    opacity: 0.8,
    "&:hover": {
      backgroundColor: "yellow",
      opacity: 1,
    },
  },
  navlink: {
    textDecoration: "none",
    color: "black",
  },
  activelink: {
    fontWeight: "bolder",
    color: "blue",
    backgroundColor: "LightSteelBlue",
    "&:hover": {
      backgroundColor: "LightSteelBlue",
      opacity: 1,
    },
  },
  itemlist: {},
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Navbar = ({ username, userinf }) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      justify="space-between"
      alignContent="center"
      direction="row"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar
          variant="square"
          src="/static/img/tensorflow-icon.svg"
          style={{ marginInlineEnd: 20 }}
        ></Avatar>

        <Typography
          variant="h5"
          style={{ color: "#37474f", textDecoration: "bolder" }}
          noWrap
        >
          Fun with Tensorflow JS
        </Typography>
      </div>

      {userinf.build_no != undefined && userinf.build_no != "0.28052150" && (
        <Button
          onClick={() => window.location.reload()}
          style={{ backgroundColor: "yellow" }}
        >
          {userinf.build_note} {"||"} {userinf.build_date} {"||"} do hard
          refresh.
          <UpdateSharp color="secondary"></UpdateSharp>
        </Button>
      )}
      <Button
        className={classes.navbutton}
        onClick={handleClick}
        aria-controls="customized-menu"
        aria-haspopup="true"
        size="small"
      >
        <Person fontSize="small"></Person>
        <Typography variant="subtitle1" noWrap>
          {username && username.toUpperCase()}
        </Typography>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <a href="/admin/logout/?next=/product" className={classes.navlink}>
          <StyledMenuItem>
            <ListItemIcon>
              <ExitToApp></ExitToApp>
            </ListItemIcon>
            <ListItemText primary="Logout user" />
          </StyledMenuItem>
        </a>
        <a href="/admin/password_change" className={classes.navlink}>
          <StyledMenuItem>
            <ListItemIcon>
              <Update />
            </ListItemIcon>
            <ListItemText primary="Update password" />
          </StyledMenuItem>
        </a>
      </StyledMenu>
    </Grid>
  );
};

export default Navbar;
