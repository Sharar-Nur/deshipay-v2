import React, { useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import HeaderOthers from "../../components/HeaderOthers";
import Footer from "../../components/Footer";
import offer_bottom from "../../assets/images/offer_bottom.png";
import { Typography, } from "@mui/material";
import { Box } from "@mui/system";
import nagad_banner from '../../assets/images/Nagad_banner.png';


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

const Nagad = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const classes = useStyle();
    return (
        <>
            <HeaderOthers title="Add Money from Nagad" category="Offers" />
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item md={12} style={{ width: "100%" }}>
                            <Box className={classes.card}>
                                <img src={nagad_banner} alt="" className={classes.img} />
                                <Typography variant="h3" className={classes.title}>
                                    Deshi add money from Nagad
                                </Typography>
                                <p>
                                    Keeping in mind of your convenience Deshi, for the first time ever, came up with add money feature from Nagad.
                                </p>
                                <p>
                                    Now you can instantly add money to your Deshi wallet from Nagad with <strong>free of charge.</strong>
                                </p>
                            </Box>
                            <Box className={classes.card}>
                                <Typography variant="h4" className={classes.subTitle}>
                                    Process Details
                                </Typography>

                                <p>Login to Deshi >> Select “Add Money” >> Select “MFS to Deshi” >> Select “Nagad”</p>
                                <p>Enter amount >> Select “Next” </p>
                                <p>Now you will be redirected to Nagad interface</p>
                                <p>Enter your Deshi wallet number >> Select “Proceed” </p>
                                <p>An OTP will be shared to your number >> Enter OTP and verify >> Enter PIN and select “Proceed” </p>
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

export default Nagad;