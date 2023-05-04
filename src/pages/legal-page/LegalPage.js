import React from "react";
import Grid from "@mui/material/Grid";

const LegalPage = ({ left, right, content, biggerRight = false }) => {
  return (
    <Grid container sx={{ py: 3, px: 6 }} justifyContent={"space-between"}>
      <Grid item xs={12} md={biggerRight ? 3 : 4}>
        {left()}
      </Grid>
      <Grid item xs={12} md={biggerRight ? 9 : 4}>
        {right()}
      </Grid>
      <Grid item md={12} sx={{ mt: 6 }}>
        {content()}
      </Grid>
    </Grid>
  );
};

export default LegalPage;
