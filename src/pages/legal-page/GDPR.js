import React from "react";
import LegalPage from "./LegalPage";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const GDPR = () => {
  return (
    <LegalPage
      biggerRight
      left={() => (
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant={"h2"} sx={{ fontWeight: "bold", mb: 4 }}>
            GDPR
          </Typography>
        </Box>
      )}
      right={() => (
        <Box display={"flex"} flexDirection={"column"}>
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
          flexDirection={"column"}
          sx={{
            mx: -6,
            p: 6,
            bgcolor: (theme) => theme.palette.common.white,
            color: (theme) => theme.palette.common.black,
          }}
        >
          <Paragraph
            title={"Typical contractual purposes"}
            content={
              "Contract, maintain and continue fulfilment of the contracts for products and services that you have with World Delete."
            }
          />
          <Paragraph
            title={"Purposes that require your consent"}
            content={
              "Development of commercial actions regarding offered services. Attend to user information requirements on the web, with the consent of the user."
            }
          />
          <Paragraph
            title={"Purposes related to legitimate interests of world delete"}
            content={
              "Development of general commercial actions, in particular, to offer and recommend World Delete services.\n" +
              "Process user information petitions through the webpage of World Delete, with the consent of the user."
            }
          />
          <Paragraph
            title={"Conservation criteria"}
            content={
              "Your personal data is saved while you have a mercantile and/or commercial relationship and they will be deleted when they are no longer needed for the reason they were collected."
            }
          />
          <Paragraph
            title={"Recipients"}
            content={
              "We do not share your data with third parties. In the case of including other recipients in the future, we will request explicit permission from users before processing."
            }
          />
          <Typography variant={"h3"} sx={{ mt: 4, mb: 4 }}>
            What rights do you have?
          </Typography>
          <Grid container sx={{ mb: 4 }}>
            <Grid item container sm={6} flexDirection={"column"}>
              <Typography variant={"h3"} sx={{ mb: 3 }}>
                You can exercise the following rights:{" "}
              </Typography>
              <Grid container>
                <Grid item container sm={6} flexDirection={"column"}>
                  <Typography variant={"body2"} sx={{ mb: 2 }}>
                    Opposition
                  </Typography>
                  <Typography variant={"body2"} sx={{ mb: 2 }}>
                    Access
                  </Typography>
                  <Typography variant={"body2"} sx={{ mb: 2 }}>
                    Rectification
                  </Typography>
                  <Typography variant={"body2"} sx={{ mb: 2 }}>
                    Suppression (right to oblivion)
                  </Typography>
                </Grid>
                <Grid item container sm={6} flexDirection={"column"}>
                  <Typography variant={"body2"} sx={{ mb: 2 }}>
                    Limitation
                  </Typography>
                  <Typography variant={"body2"} sx={{ mb: 2 }}>
                    Portability
                  </Typography>
                  <Typography variant={"body2"} sx={{ mb: 2 }}>
                    Revocation of permission
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container sm={6} flexDirection={"column"}>
              <Typography variant={"body2"} sx={{ mb: 4 }}>
                You can exercise these rights and, in general, consult all
                related information of the treatment of your personal data, by
                emailing info@world-delete.com.
              </Typography>{" "}
              <Typography variant={"body2"} sx={{ mb: 4 }}>
                You must include a copy of an official photo document, such as a
                DNI.
              </Typography>{" "}
              <Typography variant={"body2"} sx={{ mb: 4 }}>
                You can also present any complaint to the Spanish Agency of Data
                Protection. Necessary information can be found at: www.aepd.es.
              </Typography>
            </Grid>
          </Grid>

          <Paragraph
            title={"Any doubts?"}
            content={
              "Don’t hesitate to contact us by email: info@world-delete.com. if you need any clarification regarding the Privacy Policy of world-delete.com."
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
