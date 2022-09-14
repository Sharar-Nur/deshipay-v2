import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import screen1 from "../assets/images/screen1.png";
import screen2 from "../assets/images/screen2.png";

import circle2 from "../assets/images/circle2.png";
import circle3 from "../assets/images/circle3.png";
import arrow1 from "../assets/images/arrow1.png";
import arrow2 from "../assets/images/arrow2.png";

import icon1 from "../assets/images/icon/one.png";
import icon2 from "../assets/images/icon/two.png";
import icon3 from "../assets/images/icon/three.png";
import icon4 from "../assets/images/icon/four.png";
import icon5 from "../assets/images/icon/five.png";
import icon6 from "../assets/images/icon/six.png";
import icon7 from "../assets/images/icon/seven.png";
import icon8 from "../assets/images/icon/eight.png";

import { makeStyles } from "@mui/styles";
import Footer from "./Footer";
const useStyle = makeStyles((theme) => ({
  section: {
    borderRadius: "10px 10px 300px 10px",
    backgroundImage: `url(${circle2}),  linear-gradient(to  right,  #FCFCFC, #FAFAFA)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      borderRadius: "10px 10px 100px 10px",
    },
  },
  section_two: {
    borderRadius: "10px 10px 10px 300px",
    backgroundImage: `url(${circle3}),  linear-gradient(to  right,  #FCFCFC, #FAFAFA)`,

    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom",
    marginTop: 160,
    [theme.breakpoints.down("sm")]: {
      marginTop: 60,
      borderRadius: "10px 10px 100px 10px",
    },
  },
  section1: {
    position: "relative",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  section_image: {
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
    [theme.breakpoints.down("lg")]: {
      overflow: "hidden",
      // display: "none",
    },
  },
  arrow1: {
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      right: -250,
      top: -24,
      width: 260,
      height: 100,
      backgroundImage: `url(${arrow1})`,
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.between("lg", "xl")]: {
        width: 70,
        right: -70,
      },
    },
  },
  arrow2: {
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      left: -250,
      top: -24,
      width: 260,
      height: 100,
      backgroundImage: `url(${arrow2})`,
      backgroundRepeat: "no-repeat",
    },
  },
  section1_img: {
    position: "absolute",
    // right: -150,
    top: -24,
  },
  section2_img: {
    position: "absolute",
    left: -180,
    top: -24,
  },
  section1_left: {
    padding: 50,
  },
  icon_block: {
    display: "flex",
    alignItems: "flex-start",
    margin: "20px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0px",
    },
    "& img": {
      marginRight: 20,
      [theme.breakpoints.down("sm")]: {
        marginRight: 7,
        width: 50,
      },
    },
    "& h6": {
      fontSize: "1rem",
      // marginRight: 10
    },
  },
  brand_color: {
    color: "#08A858",
  },
  subtitle1: {
    fontSize: "1.0rem !important",
    fontWeight: "400 !important",
    display: "block",
    marginTop: 7,
  },
}));

const HomePageContent = ({ language }) => {

  const classes = useStyle();

  return (
    <>
      <Container maxWidth="lg" id="personal">
        <Grid container>
          <Grid item md={12}>
            <div className={classes.section}>
              <Grid container spacing={3}>
                <Grid item md={7}>
                  <div className={classes.section1_left}>
                    <Grid container spacing={2}>
                      <Grid item md={12}>
                        <Typography variant="h2">
                          <span className={classes.brand_color}>Deshi</span> for{" "}
                          <br /> Consumers
                        </Typography>
                        <Typography variant="subtitle1">
                          Enjoy amazing cashback and discount offers and get
                          more out of your money every day
                        </Typography>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon1} alt="" />
                          <Typography variant="h6">
                            Send/Request Money
                            <span className={classes.subtitle1}>
                              The feature allows you to send money to your loved
                              ones whenever there is a need, free of cost. And
                              when you need money? Simply request and receive
                              money instantaneously.
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon2} alt="" />
                          <Typography variant="h6">
                            Exciting Deals/Vouchers
                            <span className={classes.subtitle1}>
                              Get super saver deals right from your Deshi Wallet
                              from thousands of popular brands. The wallet
                              contains discount vouchers, which you could buy
                              and gift to others with ease.
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon3} alt="" />
                          <Typography variant="h6">
                            Bill Payment
                            <span className={classes.subtitle1}>
                              Pay bills with a few clicks right from your
                              wallet. Paying Utility, ISP, DTH and other bills
                              from the comfort of your home has never been
                              easier.
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon4} alt="" />
                          <Typography variant="h6">
                            Scan and Pay
                            <span className={classes.subtitle1}>
                              Scan QR and Pay merchants right from your wallet.
                              It’s quick, fast and secure. Go cashless with
                              Deshi!
                            </span>
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item md={5}>
                  <div
                    className={`${classes.section1} ${classes.section_image} ${classes.arrow1}`}
                  >
                    <img
                      src={screen1}
                      alt="Deshi Mobile Screen"
                      className={classes.section1_img}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" id="business">
        <Grid container>
          <Grid item md={12}>
            <div className={classes.section_two}>
              <Grid container spacing={3}>
                <Grid item md={5}>
                  <div
                    className={`${classes.section1} ${classes.section_image} ${classes.arrow2}`}
                  >
                    <img
                      src={screen2}
                      alt=""
                      className={classes.section2_img}
                    />
                  </div>
                </Grid>
                <Grid item md={7}>
                  <div className={classes.section1_left}>
                    <Grid container spacing={2}>
                      <Grid item md={12}>
                        <Typography variant="h2">
                          <span className={classes.brand_color}>Deshi</span>{" "}
                          <br /> for Business
                        </Typography>
                        <Typography variant="subtitle1">
                          We deliver innovative solutions that help you to
                          accept payments, disburse payments, manage your
                          business, and grow efficiently.
                        </Typography>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon5} alt="" />
                          <Typography variant="h6">
                            Online
                            <span className={classes.subtitle1}>
                              Grow your business with the online payment that
                              empowers you to expand your business horizon.
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon6} alt="" />
                          <Typography variant="h6">
                            In Person
                            <span className={classes.subtitle1}>
                              Take contactless payments with Deshi app, making
                              it easy and convenient for your customers.
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon7} alt="" />
                          <Typography variant="h6">
                            QR Code
                            <span className={classes.subtitle1}>
                              Upgrade your business with Deshi QR Code to
                              receive touch free payments.
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon8} alt="" />
                          <Typography variant="h6">
                            Phone/Email
                            <span className={classes.subtitle1}>
                              Request and collect remotely from your customers
                              just by creating a shareable payment link over
                              phone or Email.
                            </span>
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default HomePageContent;
