import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import { Alert } from "@mui/material";
import { dateFormatter, PLANS } from "../../utils";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
});

function Plans({ profile, handleSelect }) {
  const { document, region, city, address, planLimit, planEndDate } = profile;
  const disabled = !document || !region || !city || !address;
  const isActivePlan = new Date(planEndDate) > new Date();
  // const selectedPlan = PLANS.find(planLimit);
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ px: 4, py: 2 }} elevation={3}>
        <CardContent>
          {disabled && (
            <Alert severity="warning" sx={{ mb: 2 }}>
              Para poder seleccionar un plan, debes haber completado la sección
              de información de pago primero.
            </Alert>
          )}
          {isActivePlan && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Actualmente tienes un plan activo hasta el{" "}
              <strong>{dateFormatter({ value: planEndDate })}</strong>
            </Alert>
          )}

          <Grid container item xs={12} spacing={5}>
            {PLANS.map((tier) => (
              <Grid item key={tier.title} xs={12}>
                <Card variant="outlined">
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) => theme.palette.grey[500],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                      >
                        {formatter.format(tier.price)}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mes
                      </Typography>
                    </Box>

                    {tier.description.map((line) => (
                      <Typography variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      disabled={
                        disabled || (planLimit === tier.limit && isActivePlan)
                      }
                      variant={"outlined"}
                      onClick={() => handleSelect(tier)}
                    >
                      Seleccionar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default Plans;
