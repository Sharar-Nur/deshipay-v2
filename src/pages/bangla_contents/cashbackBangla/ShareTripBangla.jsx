import React from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import offer_banner from "../../../assets/images/offer_banner.png";
import offer_bottom from "../../../assets/images/offer_bottom.png";
import circle from "../../../assets/images/circle4.png";
import { Typography, } from "@mui/material";
import { Box } from "@mui/system";
import OffersFaqBangla from '../../../components/componentsBangla/OffersFaqBangla';
import FooterBangla from '../../../components/componentsBangla/FooterBangla';
import HeaderOthersBangla from '../../../components/componentsBangla/HeaderOthersBangla';


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

const ShareTripBangla = () => {
  const classes = useStyle();
  return (
    <>
      <HeaderOthersBangla title="শেয়ার ট্রিপে ইনস্ট্যান্ট ক্যাশব্যাক" category="Offers" />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={12} style={{ width: "100%" }}>
              <Box className={classes.card}>
                <img src={offer_banner} alt="" className={classes.img} />
                <Typography variant="h3" className={classes.title}>
                  শেয়ার ট্রিপে ইনস্ট্যান্ট ক্যাশব্যাক
                </Typography>
                <p>
                  পেমেন্ট করে ক্যাশব্যাক পাওয়া দারুন উপভোগীয় একটি ব্যাপার। দেশি এবং শেয়ার ট্রিপ আপনাদের জন্য চমৎকার একটি ক্যাশব্যাক অফার নিয়ে এসেছে। দেশি একাউন্ট দিয়ে শেয়ার ট্রিপ টপ আপে পাচ্ছেন ৫০০ টাকা পর্যন্ত ইনস্ট্যান্ট ক্যাশব্যাক।
                </p>
              </Box>
              <Box className={classes.card}>
                <Typography variant="h4" className={classes.subTitle}>
                  ক্যাম্পেইন বিস্তারিত
                </Typography>

                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      শুধুমাত্র দেশি ওয়ালেট ব্যবহার করে আপনি এই ক্যাশব্যাকটি পাবেন।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      দেশি একাউন্টের মাধ্যমে মার্চেন্ট কিউ আর অথবা অনলাইন গেটওয়ে পেমেন্টে সর্বোচ্চ ৫০০ টাকা পর্যন্ত ক্যাশব্যাক পাবেন।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      দেশি একাউন্ট ব্যবহারকারী পুরো ক্যাম্পেইন চলাকালীন সময়ের মধ্যে সর্বোচ্চ ৫০০ টাকা ক্যাশব্যাক পাবে।
                    </span>
                  </li>
                </ul>


                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      In a transaction you can get maximum cashback up to BDT
                      250 with a minimum transaction value of BDT 5,000.
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      দেশির যে একাউন্ট থেকে পেমেন্ট করা হবে ক্যাশব্যাকটি সেই একাউন্টেই জমা করা হবে।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      ক্যাম্পেইনটি ০১ জুন, ২০২২ থেকে চালু হবে।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      ক্যাশব্যাক গ্রহন করার জন্য দেশি একাউন্টটি অবশ্যই সচল থাকতে হবে।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      ক্যাম্পেইন এর পন্য, সেবা এবং তথ্য সম্পর্কিত সকল বিষয়ে শেয়ার ট্রিপ পুরোপুরি দায়বদ্ধ থাকবে। দেশি পেমেন্ট সেবা প্রদানকারী প্রতিষ্ঠান হিসেবে শুধুমাত্র ক্যাশব্যাক সম্পর্কিত বিষয়ে দায়বদ্ধ থাকবেন।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      দেশি এই শর্তাবলী পরিবর্তন/পরিবর্ধন করার কিংবা কোন প্রকার পূর্ব ঘোষণা ছাড়াই পুরো অফারটি বাতিল করার অধিকার সংরক্ষণ করে।
                    </span>
                  </li>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      এই ক্যাম্পেইন সংক্রান্ত যে কোন সিদ্ধান্ত দেশি কর্তৃক সংরক্ষিত এবং দেশি-এর সিদ্ধান্তই চূড়ান্ত বলে গণ্য হব।
                    </span>
                  </li>
                </ul>
              </Box>

              <Box className={classes.card} mb={8}>
                <Typography variant="h4" className={classes.subTitle}>
                  শর্তাবলি
                </Typography>
                <Typography variant="body1" mb={3}>
                  দেশি ঘোষণা করে যে:
                </Typography>

                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      দেশি বা দেশির কোন প্রতিনিধি, কোন সময়েই গ্রাহকের কাছে তার অ্যাকাউন্টের ওয়ান টাইম পাসওয়ার্ড (ওটিপি) কিংবা পার্সোনাল আইডেন্টিফিকেশন নাম্বার (পিন) নাম্বার চাইবে না।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      ক্যাম্পেইন চলাকালীন সময়ে কোন প্রকার সমস্যা বা বিরোধের ক্ষেত্রে প্রাথমিকভাবে শেয়ার ট্রিপ এর +৮৮০৯৬১৭৬১৭৬১৭ এই নম্বরে যোগাযোগ করতে হবে।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      ইহা গ্রাহককে শুধুমাত্র +৮৮০৯৬১৭৬১৭৬১৭ নাম্বার থেকেই যোগাযোগ করবে। এই ক্যাম্পেইন এর আওতায় দেশির মাধ্যমে টাকা প্রদানের ক্ষেত্রে যে কোন প্রকার বিভ্রান্তি বা দ্বিধা নিশ্চিত হবার জন্য গ্রাহক +৮৮০৯৬১৭৬১৭৬১৭ নাম্বারে কল করতে পারেন।
                    </span>
                  </li>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      উপরের ঘোষণাগুলোর পরও তৃতীয় কোন পক্ষের কোন কার্যের জন্য গ্রাহকের কোন ক্ষতি সাধিত হলে দেশি কর্তৃপক্ষ দায়ী থাকবে না।
                    </span>
                  </li>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      উক্ত শর্তাবলী বাংলা এবং ইংরেজি উভয় ভাষায় উল্লেখিত হবে এবং বাংলা ও ইংরেজির মধ্যে কোন বিষয় সংঘর্ষ হলে তখন ইংরেজি ভাষা প্রাধান্য পাবে।
                    </span>
                  </li>
                </ul>
              </Box>
              <Box className={classes.card}>
                <Typography variant="h4" className={classes.subTitle}>
                  FAQ
                </Typography>
                <Typography variant="body1" mb={2}>
                  ক্যাম্পেইন সম্পর্কিত প্রশ্ন
                </Typography>
                <OffersFaqBangla />
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

export default ShareTripBangla;