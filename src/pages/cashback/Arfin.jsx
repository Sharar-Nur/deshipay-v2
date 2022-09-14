import React, { useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import HeaderOthers from "../../components/HeaderOthers";
import Footer from "../../components/Footer";
import offer_bottom from "../../assets/images/offer_bottom.png";
import circle from "../../assets/images/circle4.png";
import { Typography, } from "@mui/material";
import { Box } from "@mui/system";
import arfin_banner from '../../assets/images/Arfin_banner.png';



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

const Arfin = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [])

  const classes = useStyle();
  return (
    <>
      <HeaderOthers title="Discount on Arfin" category="Offers" />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={12} style={{ width: "100%" }}>
              <Box className={classes.card}>
                <img src={arfin_banner} alt="" className={classes.img} />
                <Typography variant="h3" className={classes.title}>
                  Arfin Gift vouchers for Deshi users
                </Typography>
                <p>
                  Now you can purchase amazing gift vouchers from Deshi at special prices and enjoy a 10% discount on any
                  product purchase from Arfin. Campaign period 1st August 2022 to 31st January 2023.
                </p>
                <ul>
                  <li>BDT 10000 on BDT 9000</li>
                  <li>BDT 5000 on BDT 4500.</li>
                  <li>BDT 3000 on BDT 2700.</li>
                </ul>
              </Box>
              <Box className={classes.card}>
                <Typography variant="h4" className={classes.subTitle}>
                  Details
                </Typography>

                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      The voucher code will be activated against the customer phone number and can be found in the app under the vouchers section.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      The voucher will be activated as soon as the payment has been made to purchase the voucher
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      Customers will be allowed to buy regular price products (Fresh merchandise) that means already discounted products (old merchandise/clearance merchandise) will not be sold through gift vouchers.
                    </span>
                  </li>
                </ul>

                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      To redeem the voucher customer needs to provide the voucher code number to the outlet cashier.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      Customer has to buy a product equal to or more than the value of his voucher.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      Customers can purchase multiple vouchers under one account.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      One customer can use single voucher or multiple vouchers in a single invoice or multiple invoices.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      Customer must use the entire value of the voucher in a single transaction. One can purchase multiple items using one Voucher. If the total payable value exceeds the Gift Voucher value, an extra amount can be paid through Deshi, cash or any other method available at the outlet.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      Arfin will take care of customer claims regarding product issues.
                    </span>
                  </li>
                </ul>
              </Box>
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

export default Arfin;