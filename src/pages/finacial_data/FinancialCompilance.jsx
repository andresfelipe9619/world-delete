import React from "react";
import FormTriangle from "../home/FormTriangle";
import { Grid, Typography, Button } from "@mui/material";
import BannerText from "../googleInformation/BannerText";

/**
 * @AUTHOR <cristian.machado@correounivalle.edu.co>
 * @description Page to join to teams
 * 
 * @returns {React.Component}
*/
const FinancialCompilance = (props) => {

  return (
    <>
      <BannerText 
            url={props.url} 
            content={(props.json.FinancialCompilance)} 
      />
      <FormTriangle />
    </>
  );


};

export default FinancialCompilance;
