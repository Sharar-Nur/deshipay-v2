import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
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

const BioMetric = () => {
  const classes = useStyle();

  return (
    <div>
      <Typography className={classes.title}>
        Biometric Authentication
      </Typography>

      <p>
        You can use touch id ® or face id ® or fingerprint to log in to the Deshi app instead of your user id and password. You must agree to the terms and conditions to enable touch id or face id or fingerprint. Please ensure that touch id or face id or fingerprint is also enabled on your device in order to enable it for the app.
      </p>

      <p>
        You acknowledge and agree that anyone with saved biometric information on your device will have authority to access your accounts and will be authorized to initiate transactions through the Deshi app.
      </p>

      <p>
        Deshi advises you to review and confirm that all registered biometric information belongs to individuals with authority to initiate transactions on accounts accessed through the Deshi app. By agreeing below, Deshi relies on your representation that anyone with registered biometric information is authorized to view information and transact on the accounts accessed through the Deshi app.
      </p>

      <p>
        Deshi does not provide the touch id or face id technology and does not save or access your biometric information.
      </p>

      <p>
        Deshi does not save your online banking password to your device.
      </p>
    </div>
  );
};

export default BioMetric;
