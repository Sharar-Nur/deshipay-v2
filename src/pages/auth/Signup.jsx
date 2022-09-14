import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import login from "../../assets/images/login.png";
import banner_bg from "../../assets/images/wave2.png";
import apple_store from "../../assets/images/apple_store.png";
import google_playstore from "../../assets/images/google_playstore.png";
import right_arrow from "../../assets/images/right_arrow.png";
import circle from "../../assets/images/circle1.png";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 1920,
    margin: "auto",
  },
  wrapper: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  left: {
    flex: 1,
    // backgroundImage: `url(${circle})`,
    backgroundImage: `url(${banner_bg}), linear-gradient(to right, #34A853, #017C3F)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    "&:before": {},
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  right: {
    flex: 1,
    height: "100%",
    width: "50%",
    paddingLeft: 50,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: 20,
    },
  },
  right_inner: {
    width: "70%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      paddingLeft: 0,
    },
  },
  title: {
    textAlign: "center",
    color: "#fff",
    marginTop: 70,
  },
  welcome: {
    fontWeight: "300 !important",
    display: "block",
  },
  store: {
    textAlign: "center",
    "& img": {
      maxWidth: "30%",
    },
  },

  box: {
    padding: 30,
    background: "#F5F5F5",
    marginTop: 30,
    borderRadius: 10,
  },
  margin30: {
    marginBottom: "30px !important",
  },
  continue: {
    margin: "20px 0px !important",
    padding: "15px !important",
  },
  login: {
    padding: "15px !important",
  },
  brand: {
    color: "#08A858",
    fontWeight: 500,
  },
  center: {
    textAlign: "center",
  },
}));

const Signup = () => {
  const classes = useStyle();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container>
          <Grid item md={12}>
            <div className={classes.wrapper}>
              <div className={classes.left}>
                <div className={classes.title}>
                  <Typography variant="h2">
                    Welcome
                    <span className={classes.welcome}>to Our Community</span>
                  </Typography>
                </div>
                <div className={classes.center}>
                  <img src={login} alt="" />
                </div>
                <div className={classes.store}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={apple_store} alt="" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.deshi.personal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={google_playstore} alt="" />
                  </a>
                  <Typography
                    variant="body2"
                    style={{ color: "#fff", position: "relative", top: -30 }}
                  >
                    Experience our beautiful and unique App
                  </Typography>
                </div>
              </div>
              <div className={classes.right}>
                <div className={classes.right_inner}>
                  <Typography variant="h2" className={classes.margin30}>
                    Join Deshi
                  </Typography>
                  <Button variant="contained" className={classes.login}>
                    Signup
                  </Button>
                  <Button variant="text">Login</Button>
                  <div className={classes.box}>
                    <Typography variant="body1" className={classes.margin30}>
                      Provide the phone number you want to associate with your
                      merchant account. We'll send a code there for
                      verification.
                    </Typography>
                    <TextField
                      label="Mobile number"
                      variant="filled"
                      fullWidth
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.continue}
                    >
                      Continue
                    </Button>
                    <Typography variant="body1">
                      Already have an account?{" "}
                      <Link to="/" className={classes.brand}>
                        Login Instead
                        <img src={right_arrow} alt="" />
                      </Link>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Signup;
