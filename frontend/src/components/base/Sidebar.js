import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPaper, faVials } from "@fortawesome/free-solid-svg-icons";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { AddCircleOutline } from "@material-ui/icons";

const useStyles = makeStyles({
  navlink: {
    textDecoration: "none",
    color: "black",
    fa_icon: {
      color: "blue",
    },
  },
  activelink: {
    fontWeight: "bolder",
    color: "#FF9100",
    backgroundColor: "rgb(38, 50, 56)",
    "&:hover": {
      backgroundColor: "rgb(38, 50, 56)",
      opacity: 1,
    },
    fa_icon: {
      color: "blue",
    },
  },
  itemlist: {},
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.itemlist}>
      <ListItem
        button
        component={NavLink}
        to="/handpose"
        className={classes.navlink}
        activeClassName={classes.activelink}
      >
        <ListItemIcon>
          <FontAwesomeIcon icon={faHandPaper} size="2x" color="#FF9100" />
        </ListItemIcon>
        <ListItemText>Hand Pose</ListItemText>
      </ListItem>
    </List>
  );
};

export default Sidebar;
