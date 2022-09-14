import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/email.svg";
import pin from "../../assets/images/pin.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.png";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 140,
    paddingTop: 40,
    background: "#FCFCFC",
    // background: "#F0F0F0",
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
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: 130,

      flexDirection: "column-reverse",
      padding: "35px 10px",
    },
  },
  menu_item: {
    color: "#666 !important",
    padding: "0px 20px !important",
    textTransform: "capitalize !important  ",
    // display: "block !important",

    "&:hover": {
      color: "#00AA61 !important",
    },
  },
  bottom_menu: {
    flex: 1,
    display: "flex",
    // justifyContent: "space-between",
    justifyContent: "flex-end",
  },
  copyright: {
    fontSize: "0.9rem !important",
    color: "#666 !important",
    [theme.breakpoints.down("sm")]: {
      // textAlign: 'left !important'
    },
  },
}));
function FooterBangla({ language }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" id="contact">
        <Grid container spacing={3}>
          <Grid item md={5}>
            <img src={logo} alt="" style={{ marginBottom: 20 }} />
            <Typography variant="body2" className={classes.content}>
              দেশী আবিষ্কার করুন, এটি আপনাকে ডিজিটাল ফাইন্যান্স ইকোসিস্টেমে সংযুক্ত করবে। এখন থেকে সকল ফাইন্যান্স আপনার মোবাইল অ্যাপেই থাকবে। দেশী  আপনার অর্থনৈতিক জীবনকে সমৃদ্ধশালী করবে। এটা সুবিন্যস্ত অভিজ্ঞতার মাধ্যমে ভোক্তাদের অর্থপ্রদান, ঋণদান, ব্যাংকিং, ব্যক্তিগত/ব্যবসায়িক অর্থায়নে সহায়তা করে। আজই আপনার দেশি অ্যাকাউন্ট খুলুন।
              <br />
              <br />
              আপনার দেশীতে একটি অ্যাকাউন্ট থাকা মানেই- আপনি কিছু চমকপ্রদ জিনিস করতে পারবেন- দেশী এর মাধ্যমে টাকা পেতে এবং টাকা পেমেন্ট করতে আপনার ব্যাংক অ্যাকাউন্টটি লিংক করুন। রিয়েল-টাইম নটিফিকেশনের মাধ্যমে তাৎক্ষনিক আপডেট পেয়ে যাবেন। স্বয়ংক্রিয়ভাবে ক্যাশব্যাক পাওয়ার মাধ্যমে মুদি সপ, ফ্যাশন, ভ্রমণ এবং আরও অনেক কিছুতে দেশী দিয়ে পেমেন্টের মাধ্যমে অর্থ সাশ্রয় করুন।
            </Typography>
          </Grid>
          <Grid item md={5}>
            <Typography variant="h6">যোগাযোগ করুন </Typography>
            <div className={classes.icon_block}>
              <img src={phone} alt="" />
              <Typography variant="body2">
                +৮৮০ ৯৬১৭৩৪৩৪৩৪
              </Typography>
            </div>
            <div className={classes.icon_block}>
              <img src={email} alt="" />
              <Typography variant="body2">support@deshipay.com</Typography>
            </div>
            <div className={classes.icon_block}>
              <img src={pin} alt="" />
              <Typography variant="body2">
                ১৫৮/ই, তানিম স্কয়্যার, ৫ম ফ্লোর, <br />
                কামাল আতাতুর্ক এভিনিউ, বনানী, <br />
                ঢাকা-১২১৩, বাংলাদেশ।
              </Typography>
            </div>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h6">গেট সোশ্যাল</Typography>
            <div className={classes.icon_block_wrapper}>
              <a
                className={classes.icon_block}
                href="https://www.facebook.com/PayWithDeshi"
                target="_blank"
              >
                <img src={facebook} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  ফেইসবুক
                </Typography>
              </a>
              <a
                className={classes.icon_block}
                href="https://twitter.com/PaywithDeshi"
                target="_blank"
              >
                <img src={twitter} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  টুইটার
                </Typography>
              </a>
              <a
                className={classes.icon_block}
                href="https://www.linkedin.com/company/paywithdeshi"
                target="_blank"
              >
                <img src={linkedin} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  লিঙ্কডইন{" "}
                </Typography>
              </a>
              <a
                className={classes.icon_block}
                href="https://www.instagram.com/paywithdeshi"
                target="_blank"
              >
                <img src={instagram} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  ইন্সটাগ্রাম
                </Typography>
              </a>
              {/* <div className={classes.icon_block}>
                <img src={youtube} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Youtube
                </Typography>
              </div> */}
            </div>
          </Grid>
        </Grid>
        <div
          className={classes.footer_bottom}
        // justifyContent="center"
        // alignContent="center"
        >
          <div>
            <Typography variant="body1" className={classes.copyright}>
              &copy; কপিরাইট ২০২২। দেশী একটি
              <strong> গ্রীন এন্ড রেড টেকনোলজিস লিমিটেড</strong> প্রতিষ্ঠান, সর্বস্বত্ব সংরক্ষিত।
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
      </Container>
    </div>
  );
}

export default FooterBangla;
