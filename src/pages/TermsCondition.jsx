import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import HeaderOthers from "../components/HeaderOthers";
import Footer from "../components/Footer";
import PersonalTC from "../components/PersonalTC";
import MerchantTC from "../components/MerchnatTC";
import BioMetric from "../components/BioMetric";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "60px 0px",
  },
  title: {
    fontSize: "1.5rem !important",
    fontWeight: "500 !important",
    marginBottom: "20px !important",
    textAlign: "center",
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
  center: {
    textAlign: "center",
  },
}));

const TermsCondition = () => {
  const classes = useStyle();
  const location = useLocation();
  let navigate = useNavigate();

  const [doc, setDoc] = useState("");

  const handleChange = (e) => {
    setDoc(e.target.value);
    navigate(`/terms-condition?content=${e.target.value}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, -1);
    const search = location.search;
    if (search) {
      const query = new URLSearchParams(search).get("content");
      setDoc(query);
    } else {
      setDoc("personal");
    }
  }, []);

  return (
    <>
      <HeaderOthers title="Terms & Condition" />
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
                    value={doc}
                    label="Table of Content"
                    onChange={handleChange}
                  >
                    <MenuItem value="personal">Personal</MenuItem>
                    <MenuItem value="merchant">Merchant</MenuItem>
                    <MenuItem value="biometric">
                      Biometric Authentication
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>

              {doc === "personal" && <PersonalTC />}
              {doc === "merchant" && <MerchantTC />}
              {doc === "biometric" && <BioMetric />}
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

export default TermsCondition;
