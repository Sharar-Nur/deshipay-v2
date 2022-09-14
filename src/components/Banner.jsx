import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import banner_nagad from "../assets/images/banner_nagad.png";


const useStyle = makeStyles((theme) => ({
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
  banner_bottom: {
    [theme.breakpoints.up("sm")]: {
      marginBlock: "30px",
    },
  },
  header_subtitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem !important",
    },
  },
}));

const Banner = () => {
  const classes = useStyle();




  return (

    <div>
      <div className={classes.banner}>

        <img src={banner_nagad} useMap="#image-map" alt="Nagad to Deshi" className="w-full" id="home-banner-img"></img>

        <map id="image-map" name="image-map">
          <area target="_blank" alt="Deshi" title="Deshi" href="https://play.google.com/store/apps/details?id=com.deshi.personal" coords="179,68,33,27" shape="rect" />
        </map>
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
                  borderRadius: 10,
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
                        <a href="#business">Deshi for Business</a>
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

export default Banner;
