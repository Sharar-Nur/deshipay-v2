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
import HeaderOthersBangla from "../../components/componentsBangla/HeaderOthersBangla";
import FooterBangla from "../../components/componentsBangla/FooterBangla";

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

const FaqBangla = () => {
  const classes = useStyle();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  return (
    <>
      <HeaderOthersBangla title="Frequently asked question" />
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
                  <Typography>দেশি </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    দেশি (Deshi) গ্রীণ এন্ড রেড টেকনলোজিস লিমিটেড (Green and Red Technologies Limited)-এর একটি ই-ওয়ালেট অ্যাপ্লিকেশন যেটা iOS এবং Android দুই প্ল্যাটফর্মেই উপলব্ধ। বাংলাদেশ ব্যাংক কর্তৃক পেমেন্ট সার্ভিস প্রোভাইডার (PSP) হিসাবে লাইসেন্সপ্রাপ্ত গ্রীণ এন্ড রেড টেকনলোজিস-এর সার্ভিসটি জনসাধারণের জন্য স্মার্ট ফোন, ট্যাব ডিভাইস এবং ওয়েব সংস্করণে রয়েছে। অ্যাপটির উদ্দেশ্য হল সমাজকে ক্যাশলেস রাখা, জীবনকে আরও সহজ করে তোলা এবং ডিজিটাল বিশ্বে নির্বিঘ্ন এবং সুরক্ষিত একটি লাইফস্টাইল সেবা বাস্তবায়ন করা।
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
                    দেশি কি কি সেবা প্রদান করে?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography variant="body2">সেন্ড মানি</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">রিসিভ মানি</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Add money</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">ট্রান্সফার টু ব্যাংক</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">রিকোয়েস্ট মানি</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">মোবাইল রিচার্জ</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">বিল পেমেন্ট</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">স্ক্যান অ্যান্ড পে</Typography>
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
                  <Typography>একজন ব্যক্তি কিভাবে দেশি ডাউনলোড করতে পারবেন?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">অ্যান্ড্রয়েড ব্যবহারকারীর জন্য:</Typography>
                  <ol>
                    <li>
                      <Typography variant="body2">
                        গুগল প্লে স্টোর থেকে অ্যান্ড্রয়েড কনজিউমার অ্যাপটি ডাউনলোড করুন।
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        গুগল প্লে স্টোর থেকে অ্যান্ড্রয়েড মার্চেন্ট অ্যাপটি ডাউনলোড করুন।
                      </Typography>
                    </li>
                  </ol>
                  <Typography variant="body2">IOS ব্যবহারকারীর জন্য:</Typography>
                  <ol>
                    <li>
                      <Typography variant="body2">
                        অ্যাপল অ্যাপ স্টোর থেকে IOS কনজিউমার অ্যাপটি ডাউনলোড করুন।
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        অ্যাপল অ্যাপ স্টোর থেকে IOS মার্চেন্ট অ্যাপটি ডাউনলোড করুন।
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
                    দেশিতে কত ধরনের অ্যাকাউন্ট পাওয়া যায়?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    দেশিতে দুই ধরনের একাউন্ট রয়েছে
                  </Typography>
                  <ol>
                    <li>
                      <Typography variant="body2">ব্যক্তিগত বা কনজিউমার অ্যাকাউন্ট </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">মার্চেন্ট অ্যাকাউন্ট</Typography>
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
                    কীভাবে একটি দেশি ব্যক্তিগত অ্যাকাউন্ট তৈরি করবেন?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    একটি দেশি অ্যাকাউন্ট খুলতে আপনার একটি বাংলাদেশি নাগরিকত্ব সনদ বা জাতীয় পরিচয়পত্র (NID) লাগবে। প্রথমে আপনাকে রেজিস্টারে বাটনে ক্লিক করতে হবে। তারপর যে ফোন নম্বর দিয়ে আপনি অ্যাকাউন্টি খুলতে চান সেই নাম্বারটি টাইপ করে এবং একটি পাসওয়ার্ড প্রদান করুন। যাচাই করার জন্য আপনি আপনার ফোনে টেক্সট মেসেজের মাধ্যমে একটি OTP কোড পাবেন এবং এরপরে আপনাকে আপনার NID কার্ডের সামনের এবং পিছনের ছবি তুলতে হবে এবং নিজের একটি সেলফি তুলে দিতে হবে। এভাবে আপানার অ্যাকাউন্ট তৈরির কাজটি সম্পূর্ণ হয়ে গেলে তখন আপনি আমাদের হোম পেজে ফিরে যেতে পারবেন। নিবন্ধন সম্পন্ন হলে আপনি যে কোনো সময় লগইন করে দেশি অ্যাপ ব্যবহার করতে পারেন।
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
                    কিভাবে একটি দেশি মার্চেন্ট অ্যাকাউন্ট তৈরি করবেন?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    একটি দেশি মার্চেন্ট অ্যাকাউন্ট তৈরি করার জন্য অনুগ্রহ করে আমাদের দেশি সাপোর্ট টিমের সাথে ফোনে বা মেইলের মাধ্যমে যোগাযোগ করুন।
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
                  <Typography>কিভাবে দেশিতে লগ ইন করবেন?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    আপনি যে পাসওয়ার্ড সেট করেছেন তা ব্যবহার করে আপনার দেশি একাউন্টে লগ ইন করতে পারবেন।
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
                  <Typography>দেশি সেবা প্রাপ্তির জন্য কারা যোগ্য?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    যে কোন ব্যক্তি দেশি সেবা গ্রহন করার যোগ্য যাদের জাতীয় নিজস্ব পরিচয়পত্র (NID), ব্যাংক অ্যাকাউন্ট নাম্বার, ফোন নম্বর এবং ইমেল আইডি রয়েছে।
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <h4>দেশি দ্বারা প্রদান করা হয় যে সেবা</h4>

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
                    কিভাবে দেশি ওয়ালেট অ্যাপ দিয়ে মোবাইল ব্যালেন্স টপ-আপ/রিচার্জ করবেন?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        দেশির মূল ইন্টারফেস থেকে “মোবাইল রিচার্জ”-এ ট্যাপ করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        যে নাম্বারে টপ-আপ করবেন সে ফোন নম্বরটি টাইপ করুন বা ফোন লগ থেকে    নির্বাচন করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        বর্তমান অপারেটর নির্বাচন করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        প্রিপেইড/পোস্টপেইড প্ল্যান নির্বাচন করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        রিচার্জের পরিমাণ প্রদান করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">আপনার দেশি পিন (PIN) প্রদান করুন</Typography>
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
                    আমি কিভাবে আমার দেশি অ্যাকাউন্টে টাকা অ্যাড করব?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    <ul>
                      <li>
                        <Typography variant="body2">অ্যাড মানিতে ক্লিক করুন</Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          কার্ড অপশনে ক্লিক করুন
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          আপনি যে পরিমাণ টাকা দেশিতে অ্যাড করতে চান সেই এমাউন্ট লিখুন
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          তারপরে “পেমেন্ট ডিটেইলস” নামে একটি পৃষ্ঠা দেখা যাবে
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">কার্ড টাইপে ক্লিক করুন</Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          কার্ড নম্বর এবং সে সম্পর্কিত অন্যান্য সঠিক তথ্য টাইপ করুন এবং “পে”-তে ক্লিক করুন
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          তারপরে আপনি টাকা অ্যাড করা হয়েছে কিনা তা পরীক্ষা করতে ট্যাপ টু ব্যালেন্সে ট্যাপ করুন।
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
                  <Typography>আপনি কিভাবে দেশি থেকে টাকা পাঠাবেন?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    <ul>
                      <li>
                        <Typography variant="body2">
                          “সেন্ড মানি”-তে ক্লিক করুন
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          আপনি যে ফোন নম্বরে টাকা পাঠাতে চান সেই নাম্বারটি টাইপ করুন বা ফোন লগ থেকে    নির্বাচন করুন।
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          আপনি যে পরিমাণ টাকা পাঠাতে চান তা টাইপ করুন।
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          দেশি পিন নাম্বারটি প্রদান করুন
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          তারপর “নেক্সট”-এ ক্লিক করুন
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
                  <Typography>কিভাবে দেশি -এর মাধ্যমে পেমেন্ট করবেন?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    <ul>
                      <li>
                        <Typography variant="body2">
                          পেমেন্ট আইকনে ক্লিক করুন
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          মার্চেন্ট অ্যাকাউন্ট নম্বরটি টাইপ করুন বা কিউআর কোড স্ক্যান করুন এবং পেমেন্ট করুন
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          দেশি পিন প্রদান করুন এবং “নিশ্চিত করুন”-এ ক্লিক করুন
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
                    দেশি থেকে কি টাকা তোলা/ট্রান্সফার করা সম্ভব?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    দেশি অ্যাকাউন্ট থেকে টাকা তোলা/ট্র্যান্সফার করা একেবারে সম্ভব।
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
                  <Typography>কিভাবে দেশির মাধ্যমে অর্থ স্থানান্তর করবেন?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    <ul>
                      <li>
                        <Typography variant="body2">
                          ট্রান্সফারে ক্লিক করুন
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          “ব্যাংক”-এ ক্লিক করুন এবং আপনার দেশি অ্যাকাউন্টে যোগ করা টাকা আপনি যে ব্যাংকটিতে স্থানান্তর করতে চান তা বেছে নিন। যদি আগে থেকেই কোনো ব্যাংক অ্যাকাউন্ট যোগ করা না থাকে তাহলে প্রথমে একটি ব্যাংক অ্যাকাউন্ট যোগ করে নিন।
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          টাকার পরিমাণ এবং পিন নাম্বারটি লিখুন
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body2">
                          তারপর ট্রান্সফার শুরু করতে “নিশ্চিত করুন”-এ ক্লিক করুন।
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
                    দেশি থেকে অন্য ব্যাংক অ্যাকাউন্টে অর্থ স্থানান্তর করতে কতক্ষণ সময় লাগে?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    এক ব্যাংক থেকে অন্য ব্যাংক অ্যাকাউন্টে টাকা ট্রান্সফার করতে ন্যূনতম ৪৮-৭২ ঘন্টা সময় লাগে।
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
                    আমি কি কোনো লেনদেনের পরে নোটিফিকেশন পাব?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    সমস্ত নোটিফিকেশন অ্যাপটিতে সংরক্ষিত অবস্থায় থাকে যা আপনি অ্যাপটির উপরের ডানদিকে (বেলের মতো আইকন) পাবেন।
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
                    আমি কিভাবে আমার আগের লেনদেনের ইতিহাস দেখতে পারি?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    আপনি প্রধান মেনুর নিচের দিকে লেনদেন নামের অপশনটিতে ক্লিক করে দেশি অ্যাপ থেকে আপনার আগের লেনদেনের ইতিহাস দেখতে পারেন।
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
                    দেশিতে টাকা যোগ করার জন্য কি কোন চার্জ প্রযোজ্য?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    অ্যাড-মানিতে কোনো চার্জ লাগবে না।
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
                    সর্বশেষ অফার এবং প্রচারগুলি কীভাবে দেখবেন?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    প্রধান মেনু থেকে “অফার এবং প্রমোশনস” নামের অপশনটিতে ক্লিক করুন নির্ধারিত ওয়েবসাইটে পুনঃনির্দেশিত করার জন্য পছন্দের ডিসকাউন্ট অফারে ক্লিক করুন।
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
                    ভ্রমণের জন্য আমি কিভাবে ফ্লাইট এবং হোটেল রুম বুক করতে পারি?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    প্রধান মেনু থেকে ShareTrip আইকনে ক্লিক করুন। এটি আপনাকে শেয়ারট্রিপের পোর্টালে পুনঃনির্দেশিত করবে যেখানে আপনি সরাসরি ফ্লাইট এবং হোটেল বুক করতে পারবেন এবং দেশি ওয়ালেট থেকে অর্থ প্রদান করতে পারবেন।
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
                    দেশিতে কি একাধিক ব্যাংক অ্যাকাউন্ট সংযোগ করা সম্ভব?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    হ্যাঁ একাধিক ব্যাংক অ্যাকাউন্ট সংযোগ করা সম্ভব।
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
                  <Typography>আমি কি ভিসা/মাস্টারকার্ড থেকে টাকা যোগ করতে পারি?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    হ্যাঁ আপনি দেশিতে ভিসা/মাস্টার, ডেবিট এবং ক্রেডিট কার্ড উভয় থেকে টাকা যোগ করতে পারেন।
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
                    অন্য MFS (বিকাশ, নগদ, রকেট, উপায়) বা ওয়ালেটে (ipay, dmoney, cashbaba) কি টাকা পাঠানো সম্ভব?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    এই মুহূর্তে এই লেনদেন গুলো উপলব্ধ নেই।
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
                  <Typography>কিভাবে অ্যাপ থেকে ভাউচার কিনবেন??</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        অফার এবং প্রচার ক্লিক করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        আপনি যে পছন্দের ভাউচারটি কিনতে চান তাতে ক্লিক করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        দেশি পিন টাইপ করুন এবং নিশ্চিত করে ওকেত ক্লিক করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        এর পরে পুনরায় মেন মেনুতে ফিরে যেতে পারবেন।
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
                    অ্যাপ থেকে সর্বশেষ আপডেট কিভাবে জানবেন?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    প্রতিবার অ্যাপ আপডেট হলেই আপনাকে সর্বদা জানানো হবে।
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
                    আমি কি অন্য ব্যক্তির ব্যাংক অ্যাকাউন্টে টাকা পাঠাতে পারি?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">হ্যা এটা সম্ভব।</Typography>
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
                  <Typography>আমি কি এটিএম থেকে টাকা তুলতে পারি?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    বর্তমানে আমরা কোনো এটিএম থেকে আপনার দেশি ব্যালেন্স তোলার জন্য এই সেবাটি দিতে পারছি না।
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <h4>গ্রাহক সেবা</h4>
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
                    কোনো ডেবিট/ক্রেডিট কার্ড থেকে কি দেশি রিফিল করা সম্ভব?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    অবশ্যই, আপনি যেকোনো ডেবিট/ক্রেডিট কার্ড থেকে রিফিল করতে পারেন।
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
                    অভিযোগ করার পদ্ধতি কি?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    গ্রাহক একাধিক উপায়ে অভিযোগ করতে পারেন
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        সরাসরি আমাদের 24*7 হেল্পলাইনে কল করতে পারেন।
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        support@deshipay.com সরাসরি আমাদের ইমেল করতে পারেন।
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
                    যদি আমি আমার মোবাইল সেট পরিবর্তন করি, আমাকে কি আবার নিবন্ধন করতে হবে?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    আবার নিবন্ধন করতে হবে না। একটি নতুন ডিভাইস থেকে লগইন করার সাথে সাথে আপনি আপনার দেশি নাম্বারে একটি OTP পাবেন। সফলভাবে OTP যাচাই করে আপনি নতুন ডিভাইসে দেশি পুনরায় ব্যাবহার করতে পারবেন।
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <h4>নিরাপত্তা</h4>
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
                    প্রতিটি লেনদেনের আগে কি কোন পিন রাখতে হয়?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    হ্যাঁ একটি ৪-সংখ্যার পিন নম্বর রয়েছে যা যেকোনো দেশি লেনদেনের আগে প্রয়োজন ৷ আপনার নিরাপত্তা নিশ্চিত করার জন্য।
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
                  <Typography>নিরাপত্তার জন্য কীভাবে দেশি পিন রিসেট করবেন?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        দেশি-এর জন্য একটি পিন সেট করতে অ্যাপ বাম প্যানেলে  ট্যাপ করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">অ্যাকাউন্ট সেটিংস এ ট্যাপ করুন</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        লেনদেন পিন আপডেট এ ট্যাপ করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        আপানার পুরানো ৪-সংখ্যার নম্বর লিখুন৷
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        একটি নতুন পাসওয়ার্ড সেট করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">পাসওয়ার্ড নিশ্চিত করুন</Typography>
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
                    আমার অ্যাকাউন্টের পাসওয়ার্ড পরিবর্তন করতে আমি কী করতে পারি?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        দেশি অ্যাপ অ্যাকাউন্ট সেটিং এ যাবেন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">পাসওয়ার্ড আপডেট এ ট্যাপ করুন</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        পুরানো পাসওয়ার্ড টি লিখুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        নতুন পাসওয়ার্ড টি সেট করুন
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">আপডেটে ট্যাপ করুন</Typography>
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
                    আমি পেমেন্ট প্রক্রিয়া সম্পূর্ণ করতে না পারলে আমার কী করা উচিত?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    আপনি কেবল পুনরায় লগইন করতে পারেন এবং প্রক্রিয়াটি আবারও করতে পারেন বা তারপরও আপনার প্রক্রিয়াটি সম্পূর্ণ না হলে আপনি আমাদের হেল্পলাইনে কল করুন।
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
                    আমি যদি লেনদেন পরে কোনো নিশ্চিতকরণ বিজ্ঞপ্তি না পাই তাহলে আমি কি করব?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    যখনই আপনি এই সমস্যার সম্মুখীন হবেন, অনুগ্রহ করে আমাদের হেল্পলাইনে যোগাযোগ করুন বা আপনি আমাদের মেইল আইডি-তে একটি ইমেলও পাঠাতে পারেন।
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
                    দেশি হেল্পলাইনের অপারেশন আওয়ার কি?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    আপনি আমাদের হটলাইন ০১৯৫৮১৫৪২৮১ এবং ০১৯৫৮১৫৪২৮০ এ যোগাযোগ করতে পারেন।
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
                    ব্যক্তিগত অ্যাপের জন্য লেনদেনের সীমা কী?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">ক্রম নাম্বার</TableCell>
                            <TableCell align="left">বর্ণনা</TableCell>
                            <TableCell align="left">পরিমাণ (BDT)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>১</TableCell>
                            <TableCell>
                              যে কোন সময়ে সর্বোচ্চ ব্যালেন্স
                            </TableCell>
                            <TableCell>৪,০০,০০০</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>২</TableCell>
                            <TableCell>
                              প্রতি লেনদেনে যেকোনো চ্যানেলের মাধ্যমে অর্থ যোগ করুন
                            </TableCell>
                            <TableCell>৫০,০০০</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>৩</TableCell>
                            <TableCell>প্রতি মাসে টাকা যোগ করুন</TableCell>
                            <TableCell>৪,০০,০০০</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>৪</TableCell>
                            <TableCell>
                              ক্রয় (ব্যক্তিগত থেকে ব্যবসায়িক)
                            </TableCell>
                            <TableCell>সীমাবদ্ধ নয়</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>৫</TableCell>

                            <TableCell colSpan={2}>
                              <Typography variant="h6">সেন্ড মানি</Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- প্রতি লেনদেনের সীমা</TableCell>
                            <TableCell>৫০,০০০</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- দৈনিক সীমা </TableCell>
                            <TableCell>১,০০,০০০</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- মাসিক সীমা</TableCell>
                            <TableCell>৪,০০,০০০</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell>৬</TableCell>

                            <TableCell colSpan={2}>
                              <Typography variant="h6">
                                ব্যাংক একাউন্ট ট্রান্সফার
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- প্রতি লেনদেনের সীমা</TableCell>
                            <TableCell>৫০,০০০</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- দৈনিক সীমা</TableCell>
                            <TableCell>১,০০,০০০</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell>- মাসিক সীমা</TableCell>
                            <TableCell>৪,০০,০০০</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell colSpan={3} align="center">
                              দ্রষ্টব্য: "দেশি তার বিবেচনার ভিত্তিতে লেনদেনের সীমা কাঠামো পরিবর্তন করার অধিকার সংরক্ষণ করে।
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
        <FooterBangla />
      </div>
    </>
  );
};

export default FaqBangla;
