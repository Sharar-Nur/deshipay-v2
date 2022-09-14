import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import logo from "../../assets/images/logo.png";
import NavbarBangla from "./NavbarBangla";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";

const useStyle = makeStyles((theme) => ({
  root: {
    background: "#fff",
    padding: "10px 100px",
    position: "sticky",
    top: 0,
    zIndex: 999,
    [theme.breakpoints.down("lg")]: {
      padding: "10px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px",
    },
  },
  top_bar: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  logo_text: {
    paddingLeft: 20,
    color: "#333",
    fontWeight: 600,
  },
  logo: {
    // [theme.breakpoints.down("md")]: {
    //   width: "130px",
    // },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "70px",
      marginRight: 10,
      marginTop: 8,
    },
  },
  menu: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 50px",
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
    [theme.breakpoints.down("lg")]: {
      margin: "0px 10px",
    },
  },
  menu_item: {
    color: "#666 !important",
    padding: "7px 30px !important",
    fontSize: "1.1rem !important",
    textTransform: "capitalize !important",
    "& a": {
      color: "#666",
      textDecoration: "none",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0px 10px !important",
    },
  },
  get_started: {
    color: "#fff !important",
    padding: "10px 30px !important",
    borderRadius: "30px !important",
    fontSize: "1rem !important",
    fontWeight: "600 !important",
    textTransform: "capitalize !important",
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontSize: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      "& a": {
        fontSize: "0.7rem",
      },
    },
  },
  language_wrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  language: {
    display: "flex",
    alignItems: "center",
    width: "auto",
    marginLeft: 20,
    "& img": {
      marginRight: 5,
    },
    "& select": {
      fontSize: "1.1rem",
      border: "0px solid #ddd",
      background: "rgba(0,0,0,0)",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 5,
    },
  },
}));

const Header = () => {
  const classes = useStyle();

  const location = useLocation()

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
    <div className={classes.root} id="back-to-top-anchor" >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={4} sm={7} md={8} className={classes.top_bar}>
            <NavbarBangla />
            <Link to="/">
              <img src={logo} alt="" className={classes.logo} onClick={() => window.scrollTo(0, 0)} />
            </Link>

            <div className={classes.menu + " hide_menu"}>
              <Button variant="text" className={classes.menu_item}>
                <a href="#personal">ব্যক্তিগত</a>
              </Button>
              <Button variant="text" className={classes.menu_item}>
                <a href="#business">ব্যবসা </a>
              </Button>
              <Button variant="text" className={classes.menu_item}>
                <a href="#contact">যোগাযোগ করুন</a>
              </Button>
              <Button variant="text" className={classes.menu_item}>
                <Link to="/offers">সব অফার</Link>
              </Button>
            </div>
          </Grid>
          <Grid
            item
            xs={8}
            sm={5}
            md={4}
            className={` ${classes.top_bar} ${classes.language_wrapper} `}
          >
            <Button variant="contained" className={classes.get_started}>
              <a href="https://play.google.com/store/apps/details?id=com.deshi.personal" target="_blank"> শুরু করুন{" "}</a>
            </Button>
            <LanguageSwitcher />
          </Grid>
        </Grid>
      </Container>
      <style>
        {`
          @media screen and (max-width: 720px) {
            .hide_menu{
              display: none;
            }
        `}
      </style>
    </div>
  );
};

export default Header;
