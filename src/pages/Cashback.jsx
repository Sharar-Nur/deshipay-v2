import React, { useEffect } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

import HeaderOthers from "../components/HeaderOthers";
import Footer from "../components/Footer";

import offer_banner from "../assets/images/offer_banner.png";
import offer_bottom from "../assets/images/offer_bottom.png";
import offer_bottom2 from "../assets/images/offer_bottom2.png";
import cursiveTitle from "../assets/images/cursiveTitle.png";
import circle from "../assets/images/circle4.png";
import apple_store from "../assets/images/apple_store.png";
import google_playstore from "../assets/images/google_playstore.png";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import OffersFaq from "../components/OffersFaq";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "60px 0px",
  },
  title: {
    fontWeight: "500 !important",
    marginBottom: "20px !important",
    marginTop: "24px !important",
  },
  subTitle: {
    fontWeight: "500 !important",
    marginBottom: "20px !important",
    marginTop: "0px !important",
  },
  content: {
    fontSize: "1rem",
    marginBottom: "20px !important",
  },

  img: {
    maxWidth: "100%",
  },
  footer: {
    marginTop: "-80px",
  },
  card: {
    padding: "24px",
    boxShadow: "1px 1px 35px 1px #eee",
    borderRadius: "10px",
    marginTop: "32px",
    [theme.breakpoints.down("sm")]: {
      padding: "7px",
    },
  },
  ul: {
    margin: 0,
    paddingLeft: "0px !important",
  },
  li: {
    marginBottom: "16px",
    listStyle: "none",
    display: "flex",
    alignItems: "flex-start",
  },
  circle: {
    marginRight: "10px",
    display: "flex",
    position: "relative",
    top: 5,
  },
  offer_bottom: {
    backgroundImage: `url(${offer_bottom}),  linear-gradient(to  right,  #FCFCFC, #FAFAFA)`,
    height: "430px",
    // py={6} pl={16} pr={2}
    paddingTop: 48,
    paddingBottom: 84,
    paddingLeft: 128,
    paddingRight: 16,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
    },
  },
  offer_bottom2: {
    position: "relative",
    top: -60,
    right: -50,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Cashback = () => {
  const classes = useStyle();

  useEffect(() => {
    // let path = "/faq";
    // let pathName = location.pathname;
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderOthers title="Instant Cashback at ShareTrip" category="Offers" />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={12} style={{ width: "100%" }}>
              <Box className={classes.card}>
                <img src={offer_banner} alt="" className={classes.img} />
                <Typography variant="h3" className={classes.title}>
                  Instant Cashback at ShareTrip
                </Typography>
                <p>
                  Getting cashback in addition to payments sounds fantastic. As
                  a result, Deshi and ShareTrip have come up with a fantastic
                  cashback offer for you. Make any top up to ShareTrip and
                  receive up to BDT 500 Instant Cashback via Deshi payment.
                </p>
              </Box>
              <Box className={classes.card}>
                <Typography variant="h4" className={classes.subTitle}>
                  Campaign Details
                </Typography>

                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      You will only be eligible for this cashback if you pay
                      using the Deshi wallet.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      When you use your Deshi account to pay through the
                      merchant QR code or online gateway, you will be eligible
                      for a cashback of up to BDT 500.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      One user can get maximum up to BDT 500 during campaign
                      period.
                    </span>
                  </li>
                </ul>
                {/* <TableContainer
                  component={Paper}
                  style={{
                    boxShadow: "0px 0px 1px 0px #F5F5F5",
                    border: "1px solid #F5F5F5",
                    marginBottom: "24px",
                    marginTop: "24px",
                  }}
                >
                  <Table
                    sx={{
                      overflow: "hidden",
                      border: "0px solid rgba(0,0,0,0)",
                    }}
                    size="small"
                  >
                    <TableHead>
                      <TableRow
                        sx={{
                          border: "0px solid rgba(0,0,0,0)",
                          background: "#eee",
                        }}
                      >
                        <TableCell
                          align="center"
                          sx={{
                            border: "0px solid rgba(0,0,0,0)",
                          }}
                        >
                          Month
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "0px solid rgba(0,0,0,0)",
                          }}
                        >
                          Transaction Value (BDT)
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "0px solid rgba(0,0,0,0)",
                          }}
                        >
                          Cashback Amount (BDT)
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          rowSpan="2"
                          sx={{
                            border: "0px solid rgba(0,0,0,0)",
                          }}
                        >
                          June ‘22
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "0px solid rgba(0,0,0,0)",
                          }}
                        >
                          10,000
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "0px solid rgba(0,0,0,0)",
                          }}
                        >
                          500
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          align="center"
                          sx={{
                            border: "0px solid rgba(0,0,0,0)",
                          }}
                        >
                          5,000
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            border: "0px solid rgba(0,0,0,0)",
                          }}
                        >
                          250
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer> */}

                <ul className={classes.ul}>
                  {/* <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      You can get maximum cashback up to BDT 250 with a minimum
                      transaction value of BDT 5,000 and cashback up to BDT 500
                      with a minimum transaction value of BDT 10,000.
                    </span>
                  </li> */}

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      In a transaction you can get maximum cashback up to BDT
                      250 with a minimum transaction value of BDT 5,000.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      The payback amount will be deposited into the same Deshi
                      account from which you will pay.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      This campaign will run from 1st June, 2022 to 30th June 2022.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      You must have an active Deshi account to receive this cash
                      back.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      "ShareTrip" is entirely responsible for the information,
                      products, and services related to this Campaign. Under
                      this promotion, Deshi will only be responsible for the
                      cashback as a payment service provider.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      Deshi reserves the right to change, modify, or extend
                      these terms and conditions, as well as to cancel this
                      campaign, at any time and without warning.
                    </span>
                  </li>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      Any decision made by Deshi regarding this campaign will be
                      made in Deshi's sole discretion and will be considered
                      final.
                    </span>
                  </li>

                  {/* <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      Any decision made by Deshi regarding this campaign will be
                      made in Deshi's sole discretion and will be considered
                      final.
                    </span>
                  </li> */}
                </ul>
              </Box>

              <Box className={classes.card} mb={8}>
                <Typography variant="h4" className={classes.subTitle}>
                  Terms and Conditions
                </Typography>
                <Typography variant="body1" mb={3}>
                  Deshi announces that:
                </Typography>

                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      Deshi will never ask you to reveal your Deshi account's
                      One-time Password (OTP) or Personal Identification Number
                      (PIN), nor will they ask you to make any payment to
                      anyone.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      In the event of a dispute, you will initially contact
                      ShareTrip during the campaign period at the following
                      numbers: +8809617617617.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      It shall contact customers using only +8809617617617. For
                      any confusion or conflict with regards to this campaign,
                      you must end any other call and immediately call back to
                      +8809617617617 to ascertain the authenticity of the call
                      or for required information.
                    </span>
                  </li>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      Deshi will not be liable for any loss or damage resulting
                      from any of the aforementioned reasons or any other
                      third-party acts.
                    </span>
                  </li>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      In the event of a conflict between the English version and
                      the Bangla version of the terms and conditions, the
                      English version shall prevail.
                    </span>
                  </li>
                </ul>
              </Box>
              <Box className={classes.card}>
                <Typography variant="h4" className={classes.subTitle}>
                  FAQ
                </Typography>
                <Typography variant="body1" mb={2}>
                  Campaign Related Queries
                </Typography>
                <OffersFaq />
              </Box>
              {/* <Box className={classes.offer_bottom} mb={12}>
                <Grid container>
                  <Grid item md={7}>
                    <Typography
                      variant="h4"
                      style={{
                        fontFamily: ["Dancing Script", "sanscursive"].join(","),
                        background: "#fff",
                        borderRadius: 25,
                        padding: "7px 30px 7px 30px",
                        display: "inline-block",
                        color: "#03773C",
                      }}
                    >
                      Get the app now
                    </Typography>
                    <Typography
                      variant="h2"
                      style={{ color: "#fff", marginTop: "10px" }}
                    >
                      Carry us in your pocket!
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ color: "#fff", marginTop: "10px" }}
                    >
                      Let us be a part of your journey We promise to make it fun
                    </Typography>
                    <Box style={{ display: "flex" }}>
                      <span>
                        <img
                          src={apple_store}
                          alt=""
                          style={{ maxWidth: "100%" }}
                        />
                      </span>
                      <span>
                        <img
                          src={google_playstore}
                          alt=""
                          style={{ maxWidth: "100%" }}
                        />
                      </span>
                    </Box>
                  </Grid>
                  <Grid item md={5}>
                    <img
                      src={offer_bottom2}
                      alt=""
                      className={classes.offer_bottom2}
                    />
                  </Grid>
                </Grid>
              </Box> */}
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Cashback;
