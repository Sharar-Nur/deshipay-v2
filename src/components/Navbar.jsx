import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import menu_icon from "../assets/images/menu_icon.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const useStyle = makeStyles((theme) => ({
  menu_item: {
    // color: "#fff !important",
    padding: "20px 20px !important",
    borderBottom: "1px solid #ddd !important",
    color: "#000 !important",
    "& a": {
      color: "#000",
      textDecoration: "none",
    },
  },
  // menu_icon: {
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none",
  //   },
  // },
  menu_icon_image: {
    [theme.breakpoints.down("sm")]: {
      // width: "30PX",
      // margin: 0,
      // padding: 0
    },
  },
  icon: {
    color: "#666",
    fontSize: 50,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function NavBarBangla() {
  const classes = useStyle();
  const location = useLocation();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    const currentDiv = location?.hash;
    if (currentDiv?.length > 0) {
      document.getElementById(currentDiv.toString().substring(1, currentDiv.length)).scrollIntoView({ behavior: "smooth" });
      // $('html, body').animate({
      //   scrollTop: $(currentDiv).offset().top
      // }, 1300);
    }

  }, [location?.hash])

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={classes.menu_icon + " show_menuIcon"}>
            <Button onClick={toggleDrawer(anchor, true)}>
              {/* <MenuIcon className={classes.icon} /> */}
              <img src={menu_icon} className={classes.menu_icon_image} alt="" />
            </Button>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link to="/#personal">Personal</Link>
            </Button>

            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link to="/#business">Business</Link>
            </Button>
            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link to="/#contact">Contact</Link>
            </Button>
            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link to="/offers">Offers</Link>
            </Button>
          </Drawer>
        </React.Fragment>
      ))}
      <style>
        {`
          @media screen and (min-width: 746px) {
            .show_menuIcon{
              display: none;
          }
      `}
      </style>
    </div>
  );
}
