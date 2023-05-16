import React from "react";
import LegalPage from "./LegalPage";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const GDPR = () => {
  return (
    <LegalPage
      biggerRight
      left={() => (
        <Box
          display={"flex"}
          flexDirection={"column"}
          className={"layout-content-padding"}
        >
          <Typography variant={"h2"} sx={{ fontWeight: "bold" }}>
            GDPR
          </Typography>
        </Box>
      )}
      right={() => (
        <Box
          display={"flex"}
          flexDirection={"column"}
          className={"layout-content-padding"}
        >
          <Typography variant={"caption"} gutterBottom>
            On this website, we respect and monitor the personal data of our
            users.
          </Typography>
          <Typography variant={"caption"} gutterBottom>
            As a user, you should know that your rights are guaranteed. At World
            Delete, we have dedicated ourselves to creating a safe and trusted
            space.
          </Typography>
        </Box>
      )}
      content={() => (
        <Box
          display={"flex"}
          className={"layout-content-padding"}
          flexDirection={"column"}
          sx={{
            width: "100%",
            bgcolor: (theme) => theme.palette.common.white,
            color: (theme) => theme.palette.common.black,
          }}
        >
          <Paragraph
            title={"Your Privacy Is Important to Us"}
            content={
              "In this privacy declaration, we explain what personal data we collect from our users and how they are used. We encourage you to carefully read these terms before providing your personal data on our website."
            }
          />
          <Paragraph
            title={
              "It’s important to us that you know that as a user you should know your rights are guaranteed."
            }
            content={
              "At World Delete, we have dedicated ourselves to creating a safe and trusted space and for this reason, we want to share our principles regarding your privacy:"
            }
          />
          <Paragraph
            title={"Responsible for processing"}
            content={
              "Contract, maintain and continue fulfilment of the contracts for products and services that you have with World Delete."
            }
          />
        </Box>
      )}
    />
  );
};

function Paragraph({ title, content }) {
  return (
    <>
      <Typography variant={"h3"} sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant={"body2"} sx={{ mb: 4, width: "80%" }}>
        {content}
      </Typography>
    </>
  );
}

export default GDPR;
