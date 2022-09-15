import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import logo from "../assets/images/logo.png";
import phone from "../assets/images/phone.svg";
import email from "../assets/images/email.svg";
import pin from "../assets/images/pin.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.png";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 140,
    paddingTop: 40,
    background: "#FCFCFC",
    // paddingRight: "40px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
    },
  },
  icon_block: {
    display: "flex",
    alignItems: "center",
    margin: "25px 0px",
    "& img": {
      marginRight: 20,
    },
  },

  hide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon_block_wrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  content: {
    fontSize: "1rem !important",
  },
  footer_bottom: {
    display: "flex",
    borderTop: "1px solid #EEE",
    // border: "1px solid red",
    paddingBlock: "19px",
    // height: 70,
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      [theme.breakpoints.down("sm")]: {
        padding: "10px 10px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      // height: 190,
      flexDirection: "column-reverse",
      paddingBlock: "10px",
    },

  },
  menu_item: {
    color: "#666 !important",
    padding: "0px 20px !important",
    textTransform: "capitalize !important  ",
    // border: "1px solid black !important",

    "&:hover": {
      color: "#00AA61 !important",
    },
  },
  bottom_menu: {
    flex: 1,
    display: "flex",
    // justifyContent: "space-between",
    justifyContent: "flex-end",
    // border: "1px solid blue",
  },
  copyright: {
    fontSize: "0.9rem !important",
    color: "#666 !important",
    // border: "3px solid green",
  },
}));
function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" id="contact">
        <Grid container spacing={3} className="pr-12">
          <Grid item md={5}>
            <img src={logo} alt="" style={{ marginBottom: 20 }} />
            <Typography variant="body2" className={classes.content}>
              Discover Deshi, It connects you to the digital finance ecosystem.
              Entire finance in your mobile app. Deshi empowers you in your
              financial life. It helps in consumer payments, Lending, Banking,
              Personal/Business finances through streamlined experiences. Create
              your Deshi account today!
              <br />
              <br />
              Whether you have an account at Deshi, you can do some pretty
              amazing things - Link your Bank account – To Get Money in and Get
              Paid from deshi payments. Real-time notifications - instant
              updates whenever you use your account, Get cashback automatically
              - Save money on groceries, fashion, travel and more with Deshi.
            </Typography>
          </Grid>
          <Grid item md={5}>
            <Typography variant="h6">Contact us</Typography>
            <div className={classes.icon_block}>
              <img src={phone} alt="" />
              <Typography variant="body2">
                +880 9617343434
              </Typography>
            </div>
            <div className={classes.icon_block}>
              <img src={email} alt="" />
              <Typography variant="body2">support@deshipay.com</Typography>
            </div>
            <div className={classes.icon_block}>
              <img src={pin} alt="" />
              <Typography variant="body2">
                158/E, Taneem Square, 5th Floor, <br />
                Kemal Ataturk Avenue,Banani, <br />
                Dhaka 1213, Bangladesh
              </Typography>
            </div>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h6">Get Social</Typography>
            <div className={classes.icon_block_wrapper}>
              <a
                className={classes.icon_block}
                href="https://www.facebook.com/PayWithDeshi"
                target="_blank"
              >
                <img src={facebook} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Facebook
                </Typography>
              </a>
              <a
                className={classes.icon_block}
                href="https://twitter.com/PaywithDeshi"
                target="_blank"
              >
                <img src={twitter} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Twitter
                </Typography>
              </a>
              <a
                className={classes.icon_block}
                href="https://www.linkedin.com/company/paywithdeshi"
                target="_blank"
              >
                <img src={linkedin} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Linkedin{" "}
                </Typography>
              </a>
              <a
                className={classes.icon_block}
                href="https://www.instagram.com/paywithdeshi"
                target="_blank"
              >
                <img src={instagram} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Instagram
                </Typography>
              </a>
            </div>
          </Grid>
        </Grid>


        <div className={classes.footer_bottom}>
          <div>
            <Typography variant="body1" className={classes.copyright}>
              &copy; Copyright 2022. All Rights Reserved by Deshi a concern of
              <strong> Green & Red Technologies Ltd.</strong>
            </Typography>
          </div>

          <div className={classes.bottom_menu}>
            <Button variant="text" className={classes.menu_item}>
              <Link to="/privacy-policy">
                <Typography variant="subtitle1">Privacy Policy</Typography>
              </Link>
            </Button>
            <Button variant="text" className={classes.menu_item}>
              <Link to="/terms-condition">
                <Typography variant="subtitle1">Terms & Condition</Typography>
              </Link>
            </Button>
            <Button variant="text" className={classes.menu_item}>
              <Link to="/faq">
                <Typography variant="subtitle1">FAQ</Typography>
              </Link>
            </Button>
          </div>
        </div>




        {/* <div className=" max-w-fit sm:flex sm:flex-row-reverse sm:items-center ">

            <div className="flex justify-center sm:flex sm:justify-end">
              <Button variant="text" className={classes.menu_item}>
                <Link to="/privacy-policy">
                  <Typography variant="subtitle1">Privacy Policy</Typography>
                </Link>
              </Button>
              <Button variant="text" className={classes.menu_item}>
                <Link to="/terms-condition">
                  <Typography variant="subtitle1">Terms & Condition</Typography>
                </Link>
              </Button>
              <Button variant="text" className={classes.menu_item}>
                <Link to="/faq">
                  <Typography variant="subtitle1">FAQ</Typography>
                </Link>
              </Button>
            </div>

            <div className="flex justify-center sm:flex sm:justify-start">
              <Typography variant="body1" className={classes.copyright}>
                &copy; Copyright 2022. All Rights Reserved by Deshi a concern of
                <strong> Green & Red Technologies Ltd.</strong>
              </Typography>
            </div>

          </div> */}


      </Container>
    </div>
  );
}

export default Footer;
