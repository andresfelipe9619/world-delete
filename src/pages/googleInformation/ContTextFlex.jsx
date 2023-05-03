import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const styled = {
    containerDiv: {
       minHeight: '15em',
       width: '100%',
       background: 'var(--color-black-semit-lite)',
    }
}

export default function ContTextFlex(props) {

    return (
        <> 
           <Grid container sx={styled.containerDiv}>
                <Grid item xs={12}>
                </Grid>
           </Grid>
        </>
    )

}