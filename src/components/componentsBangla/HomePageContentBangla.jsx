import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import screen1 from "../../assets/images/screen1.png";
import screen2 from "../../assets/images/screen2.png";

import circle2 from "../../assets/images/circle2.png";
import circle3 from "../../assets/images/circle3.png";
import arrow1 from "../../assets/images/arrow1.png";
import arrow2 from "../../assets/images/arrow2.png";

import icon1 from "../../assets/images/icon/one.png";
import icon2 from "../../assets/images/icon/two.png";
import icon3 from "../../assets/images/icon/three.png";
import icon4 from "../../assets/images/icon/four.png";
import icon5 from "../../assets/images/icon/five.png";
import icon6 from "../../assets/images/icon/six.png";
import icon7 from "../../assets/images/icon/seven.png";
import icon8 from "../../assets/images/icon/eight.png";

import { makeStyles } from "@mui/styles";
import FooterBangla from "./FooterBangla";
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

const HomePageContentBangla = () => {

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
                          <span className={classes.brand_color}>দেশি </span>
                          <br /> গ্রাহক
                        </Typography>
                        <Typography variant="subtitle1">
                          প্রতিদিন আকর্ষনীয় ক্যাশব্যাক এবং ডিসকাউন্ট অফার উপভোগ করুন এবং আপনার টাকা থেকে আরও বেশি কিছু পান।
                        </Typography>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon1} alt="" />
                          <Typography variant="h6">
                            সেন্ড/রিকয়েস্ট মানি
                            <span className={classes.subtitle1}>
                              এই ফিচারটি আপনাকে আপনার প্রিয়জনের প্রয়োজনে বিনা খরচে অর্থ পাঠাতে সাহায্য করবে। তাৎক্ষনিক অর্থের প্রয়োজনে সহজভাবে অনুরোধ করুন এবং টাকা গ্রহন করুন।
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon2} alt="" />
                          <Typography variant="h6">
                            এক্সাইটিং ডিল/ ভাউচারস
                            <span className={classes.subtitle1}>
                              দেশি ওয়ালেটে রয়েছে অসংখ্য জনপ্রিয় ব্র্যান্ডের সুপার সেভার ডিল ও ডিসকাউন্ট ভাউচার যা আপনি সহজেই কিনতে পারবেন এবং উপহার দিতে পারবেন।
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon3} alt="" />
                          <Typography variant="h6">
                            বিল পেমেন্ট
                            <span className={classes.subtitle1}>
                              আপনার ওয়ালেট থেকে সরাসরি কয়েকটি ক্লিকের মাধ্যমে সহজেই আপনার ইউটিলিটি, আইএসপি, ডিটিএইচ এবং অন্যান্য বিল সমূহ পরিশোধ করুন।
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon4} alt="" />
                          <Typography variant="h6">
                            স্ক্যান এন্ড পে
                            <span className={classes.subtitle1}>
                              দ্রুত, এবং নিরাপদে QR স্ক্যান করুন এবং আপনার ওয়ালেট থেকে সরাসরি মার্চেন্টদের অর্থ প্রদান করুন। দেশির ব্যবহারের মাধ্যমে ক্যাশলেস দুনিয়ায় প্রবেশ করুন।
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
                          <span className={classes.brand_color}>দেশি</span>{" "}
                          <br /> ফর বিজনেস
                        </Typography>
                        <Typography variant="subtitle1">
                          আমরা উদ্ভাবনী সমাধান সরবরাহ করি যা আপনাকে অর্থ গ্রহণ করতে, অর্থ প্রদান করতে, আপনার ব্যবসা পরিচালনা করতে এবং দক্ষতার সাথে বৃদ্ধি পেতে সহায়তা করবে।
                        </Typography>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon5} alt="" />
                          <Typography variant="h6">
                            অনলাইন
                            <span className={classes.subtitle1}>
                              অনলাইন পেমেন্টের মাধ্যমে আপনার ব্যবসা বাড়ান যা আপনাকে আপনার ব্যবসার প্রসারিত করার উৎসাহিত করবে।
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon6} alt="" />
                          <Typography variant="h6">
                            ইন পার্সন
                            <span className={classes.subtitle1}>
                              আপনার গ্রাহকদের অর্থ পরিশোধ কার্যক্রম সহজ এবং সুবিধাজনক ভাবে দেশি অ্যাপের মাধ্যমে যোগাযোগবিহীন পেমেন্ট গ্রহন করুন।
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon7} alt="" />
                          <Typography variant="h6">
                            QR কোড
                            <span className={classes.subtitle1}>
                              Deshi QR কোড দিয়ে টাচ ফ্রি পেমেন্ট গ্রহন করে আপনার ব্যবসা আপগ্রেড করুন।
                            </span>
                          </Typography>
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <div className={classes.icon_block}>
                          <img src={icon8} alt="" />
                          <Typography variant="h6">
                            ফোন/ই-মেইল
                            <span className={classes.subtitle1}>
                              শুধু ফোন বা ইমেলের মাধ্যমে একটি শেয়ারযোগ্য পেমেন্ট লিঙ্ক তৈরি করে আপনার গ্রাহকদের কাছে দূর থেকে অর্থ অনুরোধ এবং সংগ্রহ করুন।
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
      <FooterBangla />
    </>
  );
};

export default HomePageContentBangla;
