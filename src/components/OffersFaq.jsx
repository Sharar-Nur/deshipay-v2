import React, { useEffect } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useLocation } from "react-router-dom";
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

const OffersFaq = () => {
  const classes = useStyle();

  const location = useLocation();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    // let path = "/faq";
    // let pathName = location.pathname;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>How much is the Cashback?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Total cashback is BDT 500. Per transaction cashback limit is BDT 250
            with a minimum transaction of BDT 5,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>How can we get BDT 500 Cashback?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            By making payment (top-up) to ShareTrip B2B panel through Deshi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>How many times will I get the cashback?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            In one account you will get a maximum of BDT 500 cashback. Per
            transaction maximum cashback is BDT 250 with a minimum transaction
            of BDT 5,000
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
            Is there any charge when we Top-up in ShareTrip B2B panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            ShareTrip will not charge anything on Top-up.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel55"}
        onChange={handleChange("panel55")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
            Is there any charges on any transaction of Deshi?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Interestingly there is no charges on send money, mobile recharge and
            other services of Deshi During the campaign period.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>How many times I will be able to pay?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Maximum 100 times we make payment to merchants per day and 500 times
            per month.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>How much I will be able to pay?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Using one Deshi account we can pau up to BDT 400,000 per day and per
            month.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
            How long will this offer last and when will we get the cashback?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            It’s a 1 month campaign so this offer is valid through out June’22
            and the cashback is instant.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default OffersFaq;
