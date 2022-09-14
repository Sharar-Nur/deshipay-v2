import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckIcon from "@mui/icons-material/Check";
import HeaderOthers from "../components/HeaderOthers";
import Footer from "../components/Footer";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "60px 0px",
  },
  title: {
    fontSize: "1.5rem !important",
    fontWeight: "500 !important",
    marginBottom: "20px !important",
  },
  content: {
    fontSize: "1rem",
    marginBottom: "20px !important",
  },
  subtitle: {
    fontSize: "1rem",
    marginBottom: "20px !important",
    fontWeight: "500 !important",
  },

  icon: {
    marginRight: 10,
    position: "relative",
    top: 5,
  },
  select: {
    marginBottom: 30,
  },
  footer: {
    marginTop: "-80px",
  },
}));

const Help = () => {
  const classes = useStyle();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderOthers title="Help" />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <div className={classes.select}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Table of Content
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Table of Content"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Who we are?</MenuItem>
                    <MenuItem value={10}>Who we are?</MenuItem>
                    <MenuItem value={10}>Who we are?</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <Typography className={classes.title}>Who we are?</Typography>
              <Typography className={classes.content}>
                The G&R group is made up of different companies. We will let you
                know which Revolut company you have a relationship with when you
                first apply for or use a Revolut product or service.
              </Typography>
              <Typography className={classes.content}>
                You can always tell which G&R company you have a primary
                relationship with by scrolling to the bottom of the ‘settings’
                section in the G&R app.
              </Typography>
              <Typography className={classes.content}>
                <CheckIcon className={classes.icon} />
                Allow you to manage and review your marketing choices at any
                time.
              </Typography>
              <Typography className={classes.content}>
                <CheckIcon className={classes.icon} />
                any of the services you can get access to through the Revolut
                app or website.
              </Typography>
              <Typography className={classes.content}>
                When we say ‘personal data’, we mean information which can be
                used to personally identify you (for example, a combination of
                your name and postal address).
              </Typography>
              <Typography className={classes.subtitle}>
                THIS POLICY CONTAINS IMPORTANT INFORMATION
              </Typography>
              <Typography className={classes.content}>
                This policy explains what information we collect, how we use it,
                and your rights if you want to change how we use your personal
                data.
              </Typography>
              <Typography className={classes.content}>
                If you have concerns about how we use your personal data, you
                can contact our Data Protection Officer at dpo@revolut.com.
              </Typography>
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

export default Help;
