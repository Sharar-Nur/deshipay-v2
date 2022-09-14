import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import Faq from "./pages/Faq";
import Offers from "./pages/Offers";
import { useState, createContext, useEffect } from "react";
import HomeBangla from './pages/bangla_contents/HomeBangla';
import TermsConditionBangla from "./pages/bangla_contents/TermsConditionBangla";
import FaqBangla from "./pages/bangla_contents/FaqBangla";
import PrivacyPolicyBangla from "./pages/bangla_contents/PrivacyPolicyBangla";
import OffersBangla from "./pages/bangla_contents/OffersBangla"
import ShareTrip from "./pages/cashback/ShareTrip";
import Arfin from "./pages/cashback/Arfin";
import ShareTripBangla from "./pages/bangla_contents/cashbackBangla/ShareTripBangla";
import ArfinBangla from "./pages/bangla_contents/cashbackBangla/ArfinBangla";
import Nagad from "./pages/cashback/Nagad";
import NagadBangla from "./pages/bangla_contents/cashbackBangla/NagadBangla";

const theme = createTheme({
  palette: {
    primary: {
      main: "#08A858",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1.1rem",
    },
    subtitle1: {
      fontSize: "1.1rem",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 500,
    },
  },
});

export const LanguageSelector = createContext();

function App() {

  const [language, setLanguage] = useState(window.localStorage.getItem('language'));

  useEffect(() => {
    if (language === "" || language === undefined || language === null || language === "null") {
      setLanguage("EN");
    }
  }, [language])





  return (
    <LanguageSelector.Provider value={[language, setLanguage]}>
      <ThemeProvider theme={theme}>
        <Routes>
          {language === "EN" ?
            <>
              <Route path="/" exact element={<Home />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/offers/shareTripOne" element={<ShareTrip />} />
              <Route path="/offers/arfin" element={<Arfin />} />
              <Route path="/offers/nagad" element={<Nagad />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-condition" element={<TermsCondition />} />
              <Route path="/faq" element={<Faq />} />
            </>
            :
            <>
              <Route path="/" exact element={<HomeBangla />} />
              <Route path="/offers" element={<OffersBangla />} />
              <Route path="/offers/shareTrip" element={<ShareTripBangla />} />
              <Route path="/offers/arfin" element={<ArfinBangla />} />
              <Route path="/offers/nagad" element={<NagadBangla />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyBangla />} />
              <Route path="/terms-condition" element={<TermsConditionBangla />} />
              <Route path="/faq" element={<FaqBangla />} />
            </>
          }
        </Routes>
      </ThemeProvider>
    </LanguageSelector.Provider>
  );
}

export default App;
