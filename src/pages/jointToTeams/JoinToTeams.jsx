import React from "react";
import FormTriangle from "../home/FormTriangleDinamic";
import { Grid, Typography, Button } from "@mui/material";

/**
 * @AUTHOR <cristian.machado@correounivalle.edu.co>
 * @description Page to join to teams
 * 
 * @returns {React.Component}
*/
const JoinToTeams = () => {

  return (
    <>
      <FormTriangle styleHeader={true} styleContainer={{paddingTop: '7em'}}>
            <Typography 
                    variant={"h1"} 
                    component={"h2"} 
                    sx={{  maxWidth: "40%" , 
                           marginLeft: '0.45em',
                           fontSize: '36px',
                           fontStyle: 'normal',
                           fontWeight: 400
                    }}>
              Join the team
            </Typography>
      </FormTriangle>
    </>
  );

};

export default JoinToTeams;
