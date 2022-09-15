import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "40px 0px",
  },
  title: {
    fontSize: "1.5rem !important",
    fontWeight: "500 !important",
    marginBottom: "20px !important",
    textAlign: "center",
  },
  title2: {
    fontSize: "1.5rem !important",
    fontWeight: "500 !important",
    marginBottom: "20px !important",
    marginTop: "60px !important",
    textAlign: "center",
  },
}));

const BioMetricBangla = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Typography className={classes.title2}>
        বায়োমেট্রিক প্রমাণীকরণ
      </Typography>

      <p>
        আপনি আপনার ইউজার আইডি এবং পাসওয়ার্ডের পরিবর্তে DeshiPay অ্যাপে লগ ইন
        করার জন্য টাচ আইডি অথবা ফেস আইডি অথবা ফিঙ্গারপ্রিন্ট ব্যবহার করতে পারেন।
        টাচ আইডি বা ফেস আইডি বা ফিঙ্গারপ্রিন্ট সক্ষম করতে আপনাকে অবশ্যই নিয়ম ও
        শর্তাবলীর সাথে সম্মত হতে হবে। অনুগ্রহ করে নিশ্চিত করুন যে আপনার ডিভাইসে
        টাচ আইডি বা ফেস আইডি বা ফিঙ্গারপ্রিন্ট চালু আছে যাতে এটি অ্যাপের জন্য
        সক্ষম হয়।
      </p>

      <p>
        আপনি স্বীকার করেন এবং সম্মত হন যে আপনার ডিভাইসে সংরক্ষিত বায়োমেট্রিক
        তথ্য সহ যে কেউ আপনার অ্যাকাউন্ট অ্যাক্সেস করার অধিকার পাবে এবং DeshiPay
        অ্যাপের মাধ্যমে লেনদেন শুরু করার জন্য অনুমোদিত হবে।
      </p>

      <p>
        দেশি আপনাকে পরামর্শ দেয় যে সমস্ত নিবন্ধিত বায়োমেট্রিক তথ্য দেশি অ্যাপের মাধ্যমে অ্যাক্সেস করা অ্যাকাউন্টগুলিতে লেনদেন শুরু করার অধিকারী ব্যক্তিদের রয়েছে তা পর্যালোচনা করে নিশ্চিত করুন। নীচে সম্মতি জানিয়ে, দেশি আপনার প্রতিনিধিত্বের উপর নির্ভর করে যে নিবন্ধিত বায়োমেট্রিক তথ্য সহ যে কেউ তথ্য দেখতে এবং দেশি অ্যাপের মাধ্যমে অ্যাক্সেস করা অ্যাকাউন্টগুলিতে লেনদেনের জন্য অনুমোদিত।
      </p>

      <p>
        দেশি টাচ আইডি বা ফেস আইডি প্রযুক্তি সরবরাহ করে না এবং আপনার বায়োমেট্রিক তথ্য সংরক্ষণ বা অ্যাক্সেস করে না।
      </p>

      <p>
        দেশি আপনার ডিভাইসে আপনার অনলাইন ব্যাংকিং পাসওয়ার্ড সংরক্ষণ করে না।
      </p>
    </div>
  );
};

export default BioMetricBangla;
