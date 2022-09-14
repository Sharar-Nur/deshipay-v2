import React, { useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import offer_bottom from "../../../assets/images/offer_bottom.png";
import circle from "../../../assets/images/circle4.png";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import arfin_banner from '../../../assets/images/Arfin_banner.png';
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

const ArfinBangla = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const classes = useStyle();
  return (
    <>
      <HeaderOthersBangla title="Instant Cashback at Arfin" category="Offers" />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={12} style={{ width: "100%" }}>
              <Box className={classes.card}>
                <img src={arfin_banner} alt="" className={classes.img} />
                <Typography variant="h3" className={classes.title}>
                  দেশি ইউজারদের জন্য আরফিনের গিফট ভাউচার
                </Typography>
                <p>
                  এখন আপনি বিশেষ মূল্যে দেশি থেকে আরফিনের গিফট ভাউচার কিনতে পারেন এবং ক্যাম্পেইন পিরিয়ড ১ লা আগস্ট ২০২২ থেকে ৩১ শে জানুয়ারি ২০২৩ পর্যন্ত ভউচারে পণ্য ক্রয়ে ১০% ছাড় উপভোগ করতে পারেন৷

                </p>
                <ul>
                  <li>১০০০০ টাকায় ৯০০০ টাকা</li>
                  <li>৫০০০   টাকায় ৪৫০০ টাকা</li>
                  <li>৩০০০   টাকায় ২৭০০ টাকা</li>
                </ul>
              </Box>
              <Box className={classes.card}>
                <Typography variant="h4" className={classes.subTitle}>
                  বিস্তারিত
                </Typography>

                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      ভাউচার কোডটি গ্রাহকের ফোন নম্বরের বিপরীতে সক্রিয়/ সচল করা হবে এবং গিফট ভাউচার গুলো অ্যাপের ভাউচার বিভাগের পাওয়া যাবে
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      দেশি থেকে ভাউচার কেনার সাথে সাথে ভাউচারটি সক্রিয়/ সচল হয়ে যাবে
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      গ্রাহকদের নিয়মিত মূল্যের পণ্য (নতুন পণ্যদ্রব্য) কেনার অনুমতি দেওয়া হবে যার মূল্য ইতিমধ্যেই ছাড় পণ্য মুলের মধ্যে আছে(পুরানো পণ্যদ্রব্য/ক্লিয়ারেন্স পণ্য) যা উপহার ভাউচারের অন্তর্ভুক্ত হিসেবে বিক্রি করা হবে না
                    </span>
                  </li>
                </ul>

                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      ভাউচার রিডিম করার সময় গ্রাহককে তার ভাউচার কোড নম্বরটি আউটলেট ক্যাশিয়ারকে প্রদান করতে হবে।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      গ্রাহককে তার ভাউচারের মূল্যের সমান বা তার বেশি মুলের পণ্য কিনতে হবে।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      গ্রাহকরা একটি অ্যাকাউন্টের অধীনে একাধিক ভাউচার ক্রয় করতে পারেন।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      একজন গ্রাহক একটি বিলের বা একাধিক বিলের জন্য একটি ভাউচার বা একাধিক ভাউচার ব্যবহার করতে পারেন ।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      গ্রাহককে একটি মাএ লেনদেনে  মধ্যে ভাউচারের সম্পূর্ণ মূল্য ব্যবহার করতে হবে। একটি  ভাউচার ব্যবহার করে এক বা একাধিক আইটেম ক্রয় করতে পারেন। যদি মোট প্রদেয় মূল্য ভাউচারের মূল্য ছাড়িয়ে যায়, তাহলে আউটলেতটের উপলব্ধি দেশি, নগদঅর্থ বা অন্য কোনো পদ্ধতির মাধ্যমে অতিরিক্ত অর্থ প্রদান  করা যেতে পারে।
                    </span>
                  </li>

                  <li className={classes.li}>
                    <img src={circle} alt="" className={classes.circle} />
                    <span>
                      আরফিন তার গ্রাহকের দাবির বা পণ্যের সম্পর্কিত সমস্যার খেয়াল নেবে।
                    </span>
                  </li>
                </ul>
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

export default ArfinBangla;