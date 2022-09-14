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

const Faq = () => {
  const classes = useStyle();

  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  const location = useLocation();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <>
      <HeaderOthers title="Frequently asked question" />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={12} style={{ width: "100%" }}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>ABOUT DESHI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Deshi is an e-wallet application of Green and Red
                    Technologies Limited available in iOS and Android.The smart
                    phone/tab devices and web versions are products of G&R
                    licensed as a Payment Service Provider (PSP) by Bangladesh
                    Bank.The purpose of the app is to keep the society cashless,
                    make life convenient and to implement a Lifestyle Service
                    which is seamless and secure in the Digital world.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content2"
                  id="panel1bh-header2"
                >
                  <Typography>
                    What are the services provided by Deshi?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography variant="body2">Send Money</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Receive Money</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Add money</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Transfer to Bank</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Request money</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Mobile Recharge</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Bill Payment</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Scan and pay</Typography>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content3"
                  id="panel1bh-header3"
                >
                  <Typography>How can a person download Deshi?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">For Android user:</Typography>
                  <ol>
                    <li>
                      <Typography variant="body2">
                        Download Android personal from Google Playstore
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Download Android Merchant from Google Playstore
                      </Typography>
                    </li>
                  </ol>
                  <Typography variant="body2">For iOS USER:</Typography>
                  <ol>
                    <li>
                      <Typography variant="body2">
                        Download iOS personal from Apple App Store
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Download iOS Merchant from Apple App Store
                      </Typography>
                    </li>
                  </ol>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content4"
                  id="panel1bh-header4"
                >
                  <Typography>
                    How many types of accounts are available in Deshi?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    There are two types of account in deshi which are
                  </Typography>
                  <ol>
                    <li>
                      <Typography variant="body2">Personal Account</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Merchant Account</Typography>
                    </li>
                  </ol>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content5"
                  id="panel1bh-header5"
                >
                  <Typography>
                    How to create a Deshi Personal Account?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    To open a Deshi you will need a valid Bangladeshi NID. You
                    have to click on the register then put the phone number you
                    want to open the account with and choose a password. You
                    will get a OTP code on your phone as a text message to
                    verify it's you.After that you will need to take a picture
                    of your NID Card’s front and back. After that you will have
                    to take a selfie of yourself then you are good to go. You
                    can log in anytime and use deshi.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content6"
                  id="panel1bh-header6"
                >
                  <Typography>
                    How to create a Deshi Merchant Account?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Kindly contact support to create a Deshi Merchant Account.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content7"
                  id="panel1bh-header7"
                >
                  <Typography>How to log into Deshi?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    You can simply log into your Deshi by putting the password
                    you will set.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content8"
                  id="panel1bh-header8"
                >
                  <Typography>Who is eligible for Deshi services?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Anybody with a valid NID,Bank Accounts,phone number and
                    email id.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <h4>Services that are provided by Deshi</h4>

              <Accordion
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content9"
                  id="panel1bh-header9"
                >
                  <Typography>
                    How to Top-Up/Recharge Mobile Balance with my Deshi wallet?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        Tap on ‘Mobile Recharge’ from Deshi main interface
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Type in phone number or select desired contact from
                        phone log
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Choose Current Operator
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Select Prepaid/Postpaid phone plan
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Insert recharge amount
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Enter Deshi PIN</Typography>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel10"}
                onChange={handleChange("panel10")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content10"
                  id="panel1bh-header10"
                >
                  <Typography>
                    How do I add money to my Deshi account?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    <ul>
                      <li>
                        <Typography variant="body2">Click add money</Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Click card to deshi
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Write the amount you want to add to Deshi
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Then there will be a page named payment Details
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">Click card type</Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Put the card number and other details of the chosen
                          card and click pay
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Then you can tap for balance to check if the money has
                          been added
                        </Typography>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel11"}
                onChange={handleChange("panel11")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content11"
                  id="panel1bh-header11"
                >
                  <Typography>How do you send money from Deshi?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    <ul>
                      <li>
                        <Typography variant="body2">
                          Click send money
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Put the phone number you want to send money to.
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          And write the amount you want to send to the number
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Insert Deshi PIN
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Then click on next
                        </Typography>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel12"}
                onChange={handleChange("panel12")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content12"
                  id="panel1bh-header12"
                >
                  <Typography>How to make payment Through Deshi?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    <ul>
                      <li>
                        <Typography variant="body2">
                          Click on the payment icon
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Put the merchant account number or scan qr code and
                          pay
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Insert Deshi PIN and click on confirm
                        </Typography>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel13"}
                onChange={handleChange("panel13")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content13"
                  id="panel1bh-header13"
                >
                  <Typography>
                    Is it possible to withdraw/Transfer money from Deshi?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Transfer money from your Deshi is absolutely possible.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel14"}
                onChange={handleChange("panel14")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content14"
                  id="panel1bh-header14"
                >
                  <Typography>HOW TO Transfer money through Deshi?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    <ul>
                      <li>
                        <Typography variant="body2">
                          Click on transfer
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Click on bank and choose the bank you want to withdraw
                          money that you have added in your Deshi account. If no
                          bank account was already added you will have to add a
                          bank account first
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Enter amount and PIN
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          Then click on confirm to initiate transfer
                        </Typography>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel15"}
                onChange={handleChange("panel15")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content15"
                  id="panel1bh-header15"
                >
                  <Typography>
                    How long does it take to Transfer money from Deshi to
                    another bank account?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Actually,it will take a minimum of 48-72 hours to transfer
                    money from one bank to another bank account.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel17"}
                onChange={handleChange("panel17")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content17"
                  id="panel1bh-header17"
                >
                  <Typography>
                    Will I get notification after any transaction?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    All notifications are stored in the app which you will see
                    in the top right corner (Bell like icon).
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel18"}
                onChange={handleChange("panel18")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content18"
                  id="panel1bh-header18"
                >
                  <Typography>
                    How can I see my previous transaction history?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    You can view your previous transaction history from Deshi
                    app by clicking on Transaction from the main menu
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel19"}
                onChange={handleChange("panel19")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content19"
                  id="panel1bh-header19"
                >
                  <Typography>
                    Is there any charge applicable to add money in my Deshi?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    There will not be any charge on add-money
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel20"}
                onChange={handleChange("panel20")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content20"
                  id="panel1bh-header20"
                >
                  <Typography>
                    How to see the latest offer and promotions?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Click on offers and promotions from the main menu. Click on
                    preferred discount offer to be redirected to merchant's
                    website.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel21"}
                onChange={handleChange("panel21")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content21"
                  id="panel1bh-header21"
                >
                  <Typography>
                    How can I book flights and hotel Rooms for traveling?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    From the main menu click on the ShareTrip icon. It will
                    redirect you to the portal where you will be able to
                    directly book flights and hotels and pay from the Deshi
                    Wallet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel22"}
                onChange={handleChange("panel22")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content22"
                  id="panel1bh-header22"
                >
                  <Typography>
                    Is it possible in Deshi to connect multiple Bank accounts?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Yes it is possible to connect multiple bank accounts
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel23"}
                onChange={handleChange("panel23")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content23"
                  id="panel1bh-header23"
                >
                  <Typography>Can I add money from Visa/MasterCard?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Yes you can add money from both Deshi Visa/Master Debit and
                    Credit cards.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel24"}
                onChange={handleChange("panel24")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content24"
                  id="panel1bh-header24"
                >
                  <Typography>
                    Is it possible to send money to other MFS (Rocket,bkash) or
                    Wallet (upay, ipay)
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    No option is available at the moment
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel25"}
                onChange={handleChange("panel25")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content25"
                  id="panel1bh-header25"
                >
                  <Typography>How to buy vouchers from the App??</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        Click on offers and promotions
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Click on preferred voucher that you want to buy
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Enter Deshi PIN and click confirm
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        After that there will be option to go to home or view
                        cart
                      </Typography>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel26"}
                onChange={handleChange("panel26")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content26"
                  id="panel1bh-header26"
                >
                  <Typography>
                    How to know the latest updates from the app?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    You will always be notified each time the app updates.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel27"}
                onChange={handleChange("panel27")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content27"
                  id="panel1bh-header27"
                >
                  <Typography>
                    Can I send money to another person's bank account?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">Yes it is possible</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel28"}
                onChange={handleChange("panel28")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content28"
                  id="panel1bh-header28"
                >
                  <Typography>Can I withdraw money from an ATM?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Currently we are not giving this service to withdraw your
                    Deshi balance from any ATM.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <h4>Customer services</h4>
              <Accordion
                expanded={expanded === "panel29"}
                onChange={handleChange("panel29")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content29"
                  id="panel1bh-header29"
                >
                  <Typography>
                    Is this possible to Refill Deshi from any debit/credit card?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Definitely,you can refill from any debit/credit cards.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel30"}
                onChange={handleChange("panel30")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content30"
                  id="panel1bh-header30"
                >
                  <Typography>
                    what is the procedure to make a complaint?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Customer can raise complaint in multiple ways:
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        Can directly call our 24X7 helpline
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Can Email directly to us at support@deshipay.com
                      </Typography>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel31"}
                onChange={handleChange("panel31")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content31"
                  id="panel1bh-header31"
                >
                  <Typography>
                    In case I change my mobile set, do I need to register again?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    No need to register again . Login from a new device you will
                    receive an OTP. After successfully verification OTP a new
                    device will be added.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <h4>Security</h4>
              <Accordion
                expanded={expanded === "panel32"}
                onChange={handleChange("panel32")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content32"
                  id="panel1bh-header32"
                >
                  <Typography>
                    Is there any PIN to put before every transaction?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Yes there is a 4-digit PIN number that is required before
                    any Deshi transaction for ensuring your security.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel33"}
                onChange={handleChange("panel33")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content33"
                  id="panel1bh-header33"
                >
                  <Typography>How to Reset Deshi PIN for security?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        To set a PIN for Deshi Tap from the left panel of the
                        app
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Account setting</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Update Transaction pin
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Enter a old 4-digit number
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Set a new password
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Confirm password</Typography>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel34"}
                onChange={handleChange("panel34")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content34"
                  id="panel1bh-header34"
                >
                  <Typography>
                    What can I do to change my account password?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        Deshi App account setting
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Update password</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Put the old password
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Put the new password
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Tap on UPDATE</Typography>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel35"}
                onChange={handleChange("panel35")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content35"
                  id="panel1bh-header35"
                >
                  <Typography>
                    What should I do if I cannot complete the payment process?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    You can simply re-login and do the process or if still you
                    fail you call our helpline.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel36"}
                onChange={handleChange("panel36")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content36"
                  id="panel1bh-header36"
                >
                  <Typography>
                    What shall I do if I do not get any Confirmation
                    Notification after any transaction?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Whenever you face this problem please contact our helpline
                    and you can also send an email regarding this.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel37"}
                onChange={handleChange("panel37")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content37"
                  id="panel1bh-header37"
                >
                  <Typography>
                    What is the operation hour of the Deshi helpline?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    You can reach our hotline 01958154281 and 01958154280
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel38"}
                onChange={handleChange("panel38")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content38"
                  id="panel1bh-header38"
                >
                  <Typography>
                    What are the transaction limits for the Personal App?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">Sl. No</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Amount (BDT)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>
                              Maximum balance at any point of time
                            </TableCell>
                            <TableCell>4,00,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>
                              Add Money through any channel per transaction
                            </TableCell>
                            <TableCell>50,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>Add Money Per Month</TableCell>
                            <TableCell>4,00,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>4</TableCell>
                            <TableCell>
                              Purchase (Personal to Business)
                            </TableCell>
                            <TableCell>No Limit</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>5</TableCell>

                            <TableCell colSpan={2}>
                              <Typography variant="h6">Send Money</Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- Per transaction limit</TableCell>
                            <TableCell>50,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- Daily limit</TableCell>
                            <TableCell>1,00,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- Monthly limit</TableCell>
                            <TableCell>4,00,000</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell>6</TableCell>

                            <TableCell colSpan={2}>
                              <Typography variant="h6">
                                Transfer to Bank A/C
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- Per transaction limit</TableCell>
                            <TableCell>50,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- Daily limit</TableCell>
                            <TableCell>1,00,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- Monthly limit</TableCell>
                            <TableCell>4,00,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan={3} align="center">
                              Note: *Deshi reserves the right to change the
                              limit structure at its discretion.
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Typography>
                </AccordionDetails>
              </Accordion>
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

export default Faq;
