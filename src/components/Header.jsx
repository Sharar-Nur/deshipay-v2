import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import logo from "../assets/images/logo.png";
import NavBar from "./Navbar";
import banner_image from "../assets/images/banner_image.png";
import banner_bg from "../assets/images/banner_bg.png";
import glob from "../assets/images/glob.png";

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
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "70px",
      marginRight: 10,
    },
  },
  menu: {
    margin: "0px 50px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("lg")]: {
      margin: "0px 10px",
    },
  },
  menu_item: {
    color: "#666 !important",
    padding: "0px 20px !important",
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
  signup: {
    background: "#FFFFFF !important",
    color: "#05984F !important",
    padding: "10px 30px !important",
    borderRadius: "30px !important",
    fontSize: "1rem !important",
    fontWeight: "600 !important",
    textTransform: "capitalize !important",
    "& a": {
      color: "#05984F",
      textDecoration: "none",
    },
  },
  business: {
    background: "#FFFFFF !important",
    color: "#05984F !important",
    padding: "20px 30px !important",
    borderRadius: "30px !important",
    fontSize: "1rem !important",
    fontWeight: "600 !important",
    textTransform: "capitalize !important",
    "& a": {
      color: "#05984F",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 15px !important",
      borderRadius: "30px !important",
      fontSize: "0.7rem !important",
    },
  },
  banner: {
    background: `url(${banner_bg}), linear-gradient(to right, #34A853, #017C3F)`,
    // padding: "120px 0px",
    height: 700,
    color: "#fff",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    // backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      padding: "50px 0px",
    },
  },
  banner_headline: {
    fontSize: "2.5rem !important",
    fontWeight: "600 !important",
    paddingBottom: 10,
  },
  banner_image: {
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  banner_image_wapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 700,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  margin_top_20: {
    marginTop: "30px !important",
    padding: "10px 40px !important",
  },
  padding_banner_text: {
    paddingLeft: "100px !important",
    marginTop: "-100px !important",
    "& h3": {
      marginBottom: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "90px 10px !important",
      textAlign: "center",
    },
  },
  margin_bottom: {
    marginBottom: "30px !important",
  },
  banner_bottom: {
    position: "relative",
    top: -50,
  },
  header_subtitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem !important",
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
    [theme.breakpoints.down("xl")]: {
      marginLeft: 5,
    },
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={8} sm={8} className={classes.top_bar}>
              <NavBar />
              <img src={logo} alt="" className={classes.logo} />

              <div className={classes.menu}>
                <Button variant="text" className={classes.menu_item}>
                  <a href="#personal">Personal</a>
                </Button>
                <Button variant="text" className={classes.menu_item}>
                  <a href="#business">Business</a>
                </Button>
                <Button variant="text" className={classes.menu_item}>
                  <a href="#contact">Contact</a>
                </Button>
              </div>
            </Grid>
            <Grid
              item
              md={4}
              sm={4}
              className={` ${classes.top_bar} ${classes.language_wrapper} `}
            >
              <Button variant="contained" className={classes.get_started}>
                <Link to="/signup">Get Started </Link>
              </Button>
              <div className={classes.language}>
                <img src={glob} alt="" />
                <select name="" id="">
                  <option value="">EN</option>
                  <option value="">BN</option>
                </select>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.banner}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sm={5}>
              <div className={classes.banner_image_wapper}>
                <img
                  src={banner_image}
                  className={classes.banner_image}
                  alt=""
                />
              </div>
            </Grid>
            <Grid item sm={7} className={classes.padding_banner_text}>
              <Typography variant="h2" className={classes.banner_headline}>
                Send money & shop
              </Typography>
              <Typography variant="h3">with one easy account</Typography>
              <Typography variant="subtitle1" className={classes.margin_bottom}>
                Open a free account in minutes right from your phone, and make
                your money go further
              </Typography>
              <Button variant="contained" className={classes.signup}>
                <a href="#pricing">Signup for Free</a>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.banner_bottom}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={12}>
              <div
                className=""
                style={{
                  background: "#ddd",
                  padding: "30px 50px",
                  borderRadius: 60,
                  backgroundColor: "rgba(221, 221, 221, 0.35)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(221, 221, 221, 0.55)",
                }}
              >
                <Grid container spacing={1}>
                  <Grid
                    item
                    md={9}
                    xs={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h3"
                      style={{
                        fontSize: "1.8rem",
                      }}
                      className={classes.header_subtitle}
                    >
                      Looking for Deshi Business?{" "}
                      <span style={{ fontWeight: 300 }}>
                        We're here to support you
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item md={3} xs={6}>
                    <div className="" style={{ textAlign: "right" }}>
                      <Button variant="contained" className={classes.business}>
                        <a href="#pricing">Deshi for Business</a>
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Header;
