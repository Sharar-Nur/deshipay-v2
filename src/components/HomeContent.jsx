import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import console from "../assets/images/console.png";
import type from "../assets/images/type.png";
import card2 from "../assets/images/card2.svg";
import avatar from "../assets/images/avatar.svg";
import footer from "../assets/images/footer.svg";

import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: "120px !important",
  },
  title2: {
    textAlign: "center",
    paddingTop: 30,
    fontSize: "1.4rem !important",
  },
  title_top: {
    textAlign: "center",
    paddingTop: 80,
  },
  box: {
    boxShadow: "0 0 3px 1px #ddd",
    borderRadius: 7,
    minHeight: 360,
  },
  box_header: {
    borderRadius: "7px 7px 0 0",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "600 !important",
    background: "#F5F8FF",
    padding: 7,
    borderBottom: "1px solid #ddd",
  },
  box_content: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    "& div": {
      flex: 1,
    },
  },
  margin_bottom_30: {
    marginBottom: "30px !important",
    display: "block",
  },

  price_wrapper: {
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      // padding: '35px',
    },
  },

  price_wrapper2: {
    padding: 17,
    borderRadius: 7,
    // background: "#7C89E4",
    backgroundImage: "linear-gradient(to bottom, #927BF3, #768CE0)",
    "&:hover": {},
  },

  price_box2: {
    background: "#fff",
    borderRadius: 7,
  },
  price_box: {
    background: "#fff",
    borderRadius: 7,
    boxShadow: "0 0 3px 1px #ddd",
  },
  price_header: {
    padding: 15,
    textAlign: "center",
    fontWeight: "600 !important",
  },
  price_middle: {
    background: "#F5F8FF",
    padding: "30px 30px",
  },
  price_money: {
    fontSize: "3rem !important",
    fontWeight: "600 !important",
    textAlign: "center",
    padding: 20,
    "& span": {
      fontSize: "1rem",
    },
  },

  price_button: {
    padding: "10px 40px !important",
    width: "100%",
    "&:hover": {
      backgroundImage: "linear-gradient(to bottom, #927BF3, #768CE0)",
      color: "#FFF !important",
    },
  },
  price_button_color: {
    padding: "10px 40px !important",
    width: "100%",
    backgroundImage: "linear-gradient(to bottom, #927BF3, #768CE0)",
    color: "#FFF !important",
  },
  price_button2: {
    padding: "10px 40px !important",
  },
  footer: {
    marginTop: "100px",
    display: "block",
    overflow: "hidden",
    paddingTop: 120,
    paddingBottom: 30,
    background: `url(${footer})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  },
  footer_box: {
    padding: 30,
    maxWidth: 600,
    borderRadius: 10,
    background: "#fff",
    margin: "auto",
    textAlign: "center",
    boxShadow: "0 0 3px 1px #ddd",
    position: "relative",
    top: -100,
    [theme.breakpoints.down("sm")]: {
      padding: 20,
      margin: 20,
    },
  },
  footer_bottom: {
    borderTop: "1px solid #999",
  },
  link: {
    color: "#fff !important",
    marginTop: "10px !important",
  },
  footer_left: {
    float: "left",
    [theme.breakpoints.down("sm")]: {
      float: "none",
      textAlign: "center",
    },
  },
  footer_right: {
    float: "right",
    [theme.breakpoints.down("sm")]: {
      float: "none",
      textAlign: "center",
    },
  },
  img: {
    maxWidth: "100%",
  },
  step_img: {
    maxWidth: "100%",
  },
}));

const HomeContent = () => {
  const classes = useStyle();

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item md={12}>
            <Typography variant="h3" className={classes.title_top}>
              What Is Verify Me?
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="body1">
              Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet
              congue consequat. In posuere, nunc sit amet laoreet blandit, urna
              sapien imperdiet lectus, et molestie sem tortor quis dui. Donec
              molestie nisi iaculis sodales mollis. Nullam non tellus sed elit
              pulvinar dignissim ut vel ex. Phasellus at leo sed est egestas
              posuere eu eget magna. Donec eleifend, nisi ac aliquet tincidunt,
              quam urna vehicula dui, ac fringilla ipsum ligula id mi.
              Vestibulum vitae sapien dapibus mi condimentum commodo. Donec
              turpis dolor, finibus a efficitur ut, blandit non felis.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img src={console} alt="" className={classes.img} />
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item md={12}>
            <Typography variant="h3" className={classes.title}>
              How It Works?
            </Typography>
          </Grid>
          <Grid item md={6}>
            <div className={classes.box}>
              <div>
                <Typography variant="h5" className={classes.box_header}>
                  Step 1
                </Typography>
              </div>
              <div className={classes.box_content}>
                <div>
                  <img src={type} alt="" className={classes.step_img} />
                </div>
                <div className="" style={{ marginLeft: 20 }}>
                  <Typography variant="h5" className={classes.margin_bottom_30}>
                    Choose Document Type
                  </Typography>
                  <Typography variant="body2">
                    Verifyme can take 3 types of documents for verification.
                    Choosing one of them serves the purpose
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.box}>
              <div>
                <Typography variant="h5" className={classes.box_header}>
                  Step 2
                </Typography>
              </div>
              <div className={classes.box_content}>
                <div>
                  <img src={card2} alt="" className={classes.step_img} />
                </div>
                <div className="" style={{ marginLeft: 20 }}>
                  <Typography variant="h5" className={classes.margin_bottom_30}>
                    Scanning The Document
                  </Typography>
                  <Typography variant="body2">
                    Document is scanned to extract information for verification.
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>

          <Grid
            item
            md={12}
            // justifyContent="center"
            // alignItems="center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item md={6}>
              <div className={classes.box}>
                <div>
                  <Typography variant="h5" className={classes.box_header}>
                    Step 3
                  </Typography>
                </div>
                <div className={classes.box_content}>
                  <div>
                    <img src={avatar} alt="" className={classes.step_img} />
                  </div>
                  <div className="" style={{ marginLeft: 20 }}>
                    <Typography
                      variant="h5"
                      className={classes.margin_bottom_30}
                    >
                      Take A Selfie
                    </Typography>
                    <Typography variant="body2">
                      Selfie is taken to verify face with the submitted
                      document.
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item md={12}>
            <Typography variant="h3" className={classes.title} id="pricing">
              Choose The Plan That’s Right For You
            </Typography>
            <Typography variant="h5" className={classes.title2}>
              We offer our services at a very reasonable price. No fixed cost
              for subscription. You only pay for number of requests you make
              under any plan.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className={classes.price_wrapper}>
              <div className={classes.price_box}>
                <Typography variant="h5" className={classes.price_header}>
                  Basic
                </Typography>
                <div className={classes.price_middle}>
                  <Typography variant="subtitle1">
                    - up to 1000 calls / month{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    - Verify Personal Information{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    - Address Validation{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    - Date of Birth Validation
                  </Typography>
                  <Typography variant="subtitle1">
                    - Facial Verification{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    - Document Verification
                  </Typography>
                </div>
                <Typography className={classes.price_money}>
                  $0.20 <span>per user</span>
                </Typography>
                <div style={{ padding: 30 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.price_button}
                  >
                    TRY NOW
                  </Button>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className={classes.price_wrapper}>
              <div className={classes.price_box}>
                <Typography variant="h5" className={classes.price_header}>
                  Pro
                </Typography>
                <div className={classes.price_middle}>
                  <Typography variant="subtitle1">
                    - 1001 - 100000 calls / month
                  </Typography>
                  <Typography variant="subtitle1">
                    - Verify Personal Information{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    - Address Validation{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    - Date of Birth Validation
                  </Typography>
                  <Typography variant="subtitle1">
                    - Facial Verification{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    - Document Verification
                  </Typography>
                </div>
                <Typography className={classes.price_money}>
                  $0.18 <span>per user</span>
                </Typography>
                <div style={{ padding: 30 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.price_button}
                  >
                    CONTINUE WITH PRO
                  </Button>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className={classes.price_wrapper2}>
              <div className={classes.price_box2}>
                <Typography variant="h5" className={classes.price_header}>
                  Enterprise
                </Typography>
                <div className={classes.price_middle}>
                  <Typography variant="subtitle1">100000+ / month</Typography>
                  <Typography variant="subtitle1">
                    - Verify Personal Information{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    - Address Validation{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    - Date of Birth Validation
                  </Typography>
                  <Typography variant="subtitle1">
                    - Facial Verification{" "}
                  </Typography>
                  <Typography variant="subtitle1">
                    - Document Verification
                  </Typography>
                </div>
                <Typography className={classes.price_money}>
                  $0.15 <span>per user</span>
                </Typography>
                <div style={{ padding: 30 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.price_button_color}
                  >
                    GET STARTED
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Grid container className={classes.footer}>
        <Grid item md={12} sm={12}>
          <div>
            <div className={classes.footer_box}>
              <Typography variant="h5" style={{ marginBottom: 30 }}>
                Verification Made Easy. Why Wait?
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.price_button2}
              >
                GET STARTED NOW
              </Button>
            </div>
            <Container maxWidth="lg">
              <Grid item>
                <div className={classes.footer_bottom}>
                  <div className={classes.footer_left}>
                    <Button variant="text" className={classes.link}>
                      Contact Us
                    </Button>
                    <Button variant="text" className={classes.link}>
                      Privacy Policy
                    </Button>
                  </div>
                  <div className={classes.footer_right}>
                    <Button variant="text" className={classes.link}>
                      © 2021 Verifyme.Global
                    </Button>
                  </div>
                </div>
              </Grid>
            </Container>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeContent;
