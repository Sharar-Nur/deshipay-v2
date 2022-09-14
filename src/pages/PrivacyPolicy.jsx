import React, { useEffect } from "react";
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
}));

const PrivacyPolicy = () => {
  const classes = useStyle();

  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);


  return (
    <>
      <HeaderOthers title="Privacy Policy" />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={12}>

              <Typography className={classes.title}>Deshi Privacy Policy</Typography>

              <p>This privacy policy and terms and conditions has been created to give a detailed explanation of how we collect, process and use the "Personal Data” of our esteemed customers online. It applies to all Deshi customers and users (referred to as "Users" generally), as well as to all of the company's goods and services. For a clear explanation of how we gather, safeguard, or otherwise manage your personal data in compliance with our App, please carefully read our privacy statement.</p>

              <h4>Overview:</h4>
              <p>Any use of our website, mobile application, electronic communications, and/or other services (the "Platform") for any reason is subject to the terms and conditions of this Privacy Policy. The Platform may ask for specific personal information from you, such as your National ID number, passport number, driver's license number, tax identification number (TIN), and/or bank account information, in order to operate the Platform and to lower the risk of fraud, money laundering, and financing of terrorism. We handle the processing of your information with the highest care and in accordance with the conditions of this Privacy Policy. Any confidential information, personally identifiable information, or other information pertaining to any Platform User is referred to as "information" in this Privacy Policy.</p>
              <p>Without your express permission, we will not rent or sell your information to third parties for their marketing needs. If we must disclose your information with a third party to provide the service you have requested, we will do so strictly under the restrictions outlined in this Privacy Policy . You are in charge of reading the privacy policy statements of any third-party websites you access through the Platform or that you use to access the Platform. Deshi will not be held accountable for any third party's privacy practices. </p>

              <h4>Information:</h4>
              <p>You must enter your name, phone number, email address, NID, driving license number, passport number, birth registration number, and any other necessary identifying details while creating a Deshi account or using Deshi services. </p>
              <p>This data will be stored on your device and won't be in any way collected, sold, traded, or otherwise transferred to other parties. Our main objective is to undertake internal research on your demographics, demands, and interests in order to give you a secure, effective, easy-going service and to safeguard your interest. We take appropriate steps to protect your information.</p>
              <p>The software makes use of third-party services that could gather data that could be used to identify you. Link to the app's third-party service providers' privacy policies Play Services by Google.</p>

              <h4>Device Recognition:</h4>
              <p>Deshi gathers data from your interactions with its platform, services, content, and advertising, including, but not limited to, device ID, device type, including hardware model, operating system, and version, unique device identifiers, location, geo-location data, computer and connection information, statistics on page views, traffic to and from the sites, ad data, IP address, and data collected by cookies and other tracking technologies.</p>

              <h4>Transactional Details:</h4>
              <p>Your commercial and/or personal transaction information shall be recorded for the purpose of complying with anti-money laundering and counter terrorism obligations under the applicable Laws and its subsequent amendments, including but not limited to the Money Laundering Prevention Act 2012 and Anti-Terrorism Act 2009), and any other applicable rules and regulations of the Government of the People's Republic of Bangladesh. ; Deshi and other pertinent government authorities may conduct a background check on your company by gathering information about you, your business, its directors, shareholders, partners, officials, and employees, as appropriate, if you send or receive an unusually large amount through the Deshi Services or are suspected of engaging in any suspicious transaction. Deshi maintains the right to periodically access and analyze consumer and/or business information at its sole discretion and is empowered to close an account based on data gleaned from these background checks and reviews.</p>

              <h4 >Log Data:</h4>
              <p>When you use Deshi service and there is an issue with the app, we collect log data—also known as information from third parties—on your phone. Your device's Internet Protocol ("IP") address, name, operating system version, the app's configuration when using our service, the time and date of your use of the service, and other statistics could all be included in this Log Data.</p>

              <h4>Website Traffic and Web Catches:</h4>
              <p>Your IP address, browser information, and time-related information for accessing the Platform shall be saved on our server for the purpose of maintaining seamless and effective Deshi Services. We may also get the web addresses of websites that routed you to or from the Platform. In order to make the Platform more user-friendly, session cookies, web cookies, pixel tags, web beacons, and other similar technologies will be used to store small text or picture files on your computer or device.</p>

              <h4>Disclosure of Personal Information:</h4>
              <p>In order to comply with legal obligations, uphold our rules, address claims that a listing or other content infringes on the rights of third parties, or safeguard the rights, property, or safety of others, we may be required to release personal information. Such information will be made public in accordance with the country's applicable laws and regulations. We might also divulge your private information for the following: </p> <br />
              <p>
                1.	In response to a verified request regarding a criminal investigation or alleged illegal activity, law enforcement or other governmental officials. In such cases, we will make information about the investigation public. <br />
                2.	Relevant Members/Partners/Vendors/Payment Gateway/Bank/Financial Institutes to provide joint content and services (like registration, transactions, fund collection, and customer support), to assist in identifying and preventing potentially illegal activities and policy violations, and to serve as a resource for decisions regarding their goods, services, and communications <br />
                3.	contractors for services that support our business processes (such as fraud investigations, bill collection, affiliate and rewards programs and co-branded credit cards). <br />
                4.	Other parties you've specifically requested we provide your information to (or about whom you are otherwise explicitly notified and consent to when using a specific service). <br />
                5.	In conjunction with an investigation into fraud, intellectual property infringement, piracy, or other illegal activities, we may, in our sole discretion, deem it necessary or suitable for any confidentiality Privacy Policy between Deshi and any other organization. In such situations, we will provide the information you need. <br />
                6.	Other businesses, should we intend to merge with them or be bought out by them. In the event that such a combination takes place, we will demand that the resulting business adhere to this privacy statement with regard to your personal data. You will be notified in advance if your personal information is used in a manner that is against this policy.) <br />
                7.	Without limiting the foregoing, we will not otherwise disclose your personal information to law enforcement, other government officials, or other third parties without a subpoena, court order, or substantially similar legal procedure, except when we believe in good faith that the disclosure of information is necessary to prevent imminent physical harm or financial loss or to remedy a situation where there is potential for serious harm.
              </p>

              <h4>Updating and Having Access to Your Information:</h4>
              <p>Through the profile settings on your account, you can update your information. You can ask us to update any personal information we may have about you that you feel is incorrect, incomplete, or inaccurate.</p>
              <p>You can contact us at any time to ask for access to any personal information we may have on you. The administrative and other related charges may be deducted from your payment as a fee.</p>

              <h4>Limitation of Transfer</h4>
              <p>The User's use of this Platform is personal to them and cannot be shared with anyone else. It is your responsibility to keep your password(s) secure. The internet is frequently a secure environment, there may occasionally be service outages or other unforeseen circumstances. Deshi will therefore not be held liable for any data lost while communicating information over the internet</p>

              <h4>Use of the Data Collected</h4>
              <p>
                •	Your information will be gathered, processed, and kept on servers in Bangladesh in order to give you a seamless, secure, effective, and personalized experience with the Platform. <br />
                •	In order to finish the processing of Deshi Services or to confirm any crucial facts or activities, such as looking into suspicious or unlawful transactions or responding to customer care requests, complaints, or claims, we will also communicate with you using the information you provided.<br />
                •	When you send a Deshi service request, your basic information, including name, phone number, email address, transaction amount, transaction time, etc. may be shared with other Deshi service.<br />
                •	For the completion of your desired Deshi Services, a number of third parties, including the regulatory body, mobile operator, and other service providers, may need access to certain information. Only where it is necessary to comply with legal obligations, uphold our rules, address complaints that a listing or other content violates the rights of Deshi or others, or safeguard the rights, property, or safety of anyone, will we provide the necessary information to third parties. According to the nation's applicable rules and regulations, this information must be reported. As previously said, without your express permission, we do not divulge your personal information to third parties for their marketing reasons.<br />
                •	The auditors may access your data and transaction history to ensure that our records are accurate. The use of your personally identifiable information for any other purpose, however, shall not be permitted by auditors.
              </p>

              <h4>Service Providers:</h4>
              <p>A "cookie" is a little data point that a web server stores. In order to facilitate our Service, to deliver the Service on our behalf, to conduct Service-related services, or to help us analyze how our Service is used, we may hire third-party businesses and people. Your Personal Information is accessible to these outside parties. They'll use this to carry out the tasks we've given them on our behalf. They must, however, refrain from sharing or utilizing any of the information for any other reason.</p>

              <h4>Security</h4>
              <p>The key to your account is your password. Use distinct numbers, letters, and special characters as specified by the Deshi platform, and keep your account password a secret. Remember that you are accountable for all actions made under your account if you share your password or other personal information with others. You could lose a lot of control over your wallet and personal information if you lose your password, and you might also be subject to legally binding measures being performed on your behalf.</p>

              <h4>Links to Other Sites</h4>
              <p>Links to other websites may be found on this service. A third-party link will send you to that specific website if you click on it. Please be aware that we do not run these external websites. As a result, before continuing, we highly suggest you to study the Privacy Policies of these websites. We would like to let you know that we have no control over, and accept no liability for, any third-party sites or services' content, privacy policies, or practices.</p>

              <h4>Acquisitions or Mergers</h4>
              <p>If Deshi merges with other company or is acquired by another company, the successor company will have access to your information maintained by Deshi.</p>

              <h4>Privacy of Children</h4>
              <p>Anyone under the age of 13 is not intended for these services. Children under 13 are not intentionally subjected to our collection of personally identifying information. If we learn that a child under 13 has given Deshi their personal information, we delete it from our servers right away. We kindly ask that you get in touch with us if you're a parent or guardian and discover that your child has given us personal information so that we can take the appropriate measures.</p>
              <p>By updating the terms on this website, we may change this privacy statement at any moment. Following their initial posting on the website, all modified terms automatically take effect right away. As a result, it is advised that you periodically check this page for updates. Any time we make a change, we'll post a notice about it (or a revised Policy) on this page to let you know. These modifications take effect as soon as they are published on this page.</p>
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

export default PrivacyPolicy;
