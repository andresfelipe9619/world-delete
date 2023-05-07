import React from "react";
import FormTriangle from "../home/FormTriangleDinamic";
import { Grid, Typography, Button } from "@mui/material";

/**
 * @AUTHOR <cristian.machado@correounivalle.edu.co>
 * @description Page to join to teams
 * 
 * @returns {React.Component}
*/
const ReputationCrisis = () => {

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
                    Reputational crisis
                </Typography>
                <Typography 
                        sx={{  
                            maxWidth: "100%" , 
                            marginLeft: '1em',
                            marginTop: '1em',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '176%'
                        }}>
                    Don’t wait any longer for help if you are suffering from <br />
                    a reputational crisis. Contact us using the following <br />
                    form and we will get in touch with you in less than thirty <br />
                    (30) minutes.
                </Typography>
            </FormTriangle>
        </>
    );

};


export default ReputationCrisis;