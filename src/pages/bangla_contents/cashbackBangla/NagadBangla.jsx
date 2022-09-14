import React, { useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import {
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import nagad_banner from '../../../assets/images/Nagad_banner.png';
import HeaderOthersBangla from '../../../components/componentsBangla/HeaderOthersBangla';
import FooterBangla from '../../../components/componentsBangla/FooterBangla';


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
}));

const NagadBangla = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const classes = useStyle();
    return (
        <>
            <HeaderOthersBangla title="Discount on Arfin" category="Offers" />
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
                <FooterBangla />
            </div>
        </>
    );
};

export default NagadBangla;