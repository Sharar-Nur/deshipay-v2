import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import HeaderOthersBangla from "../../components/componentsBangla/HeaderOthersBangla";
import FooterBangla from "../../components/componentsBangla/FooterBangla";
import PersonalTCBangla from "../../components/componentsBangla/PersonalTCBangla";
import MerchantTCBangla from "../../components/componentsBangla/MerchnatTCBangla";
import BioMetricBangla from "../../components/componentsBangla/BioMetricBangla";

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

const TermsConditionBangla = () => {
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
      <HeaderOthersBangla title="Terms & Condition" />
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
                    <MenuItem value="personal">???????????????????????????</MenuItem>
                    <MenuItem value="merchant">???????????????????????????</MenuItem>
                    <MenuItem value="biometric">
                      ???????????????????????????????????? ??????????????????????????????
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>

              {doc === "personal" && <PersonalTCBangla />}
              {doc === "merchant" && <MerchantTCBangla />}
              {doc === "biometric" && <BioMetricBangla />}
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

export default TermsConditionBangla;
