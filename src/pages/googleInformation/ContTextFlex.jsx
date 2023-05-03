import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const styled = {
    containerDiv: {
       minHeight: '15em',
       width: '100%',
    },
    containerSubDiv: {
        display: 'flex',
        '& > h1': {
            display: 'grid',
            placeItems: 'center',
            height: '100%',
            width: '35%',
            fontStyle: 'normal',
            fontweight: 800,
            fontSize: '36px',
            lineHeight: '57px',
            color: 'var(--color-gray-light)',
        },
    },
    containerSubDiv2: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alingContent: 'center',
        width: '65%',
        overflow: 'hidden',
        '& > p': {
            alingSelf: 'center',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            color: 'var(--color-gray-light)',
            lineHeight: '176%;',
            '& > span': {
                width: '100%',
                textAlign: 'center',
            }
        }
    }
}

/**
 * @author <cristian.machado@correounivalle.edu.co>
 * @param {*} props 
 * @returns 
 */
export default function ContTextFlex(props) {
    console.log(props);
    const titlePrimaryRef = React.useRef(null);
    const [_arrays_ref , set_arrays_ref] = React.useState([]);
    const newRefs = props.content['text_secundary'].map(() => React.createRef());


    React.useEffect(() => {
        if (titlePrimaryRef.current) {
            titlePrimaryRef.current.innerHTML = props.content['title_primary'];
        }
    }, [props.content['title_primary']]);


    React.useEffect(() => {
        set_arrays_ref(newRefs);
    }, [props.content['text_secundary']]);

    React.useEffect(() => {
        _arrays_ref.forEach((ref, index) => {
          if (ref.current) {
            console.log(ref.current,'ref.current');
            ref.current.innerHTML = props.content['text_secundary'][index];
          }
        });
    }, [newRefs]);
      
    return (
        <> 
           <Grid container sx={styled.containerDiv} style={{
                background: props.backgroundColor,
           }}>
                <Grid item xs={12} sx={styled.containerSubDiv}>
                     <Typography 
                          variant="h1"
                          ref={titlePrimaryRef} 
                     />
                      <Grid item xs={12} 
                            sx={styled.containerSubDiv2}
                            style={{
                                columns: props.content['text_secundary'].length,
                            }}
                      >
                        {
                        (props.content['text_secundary']).map((item, index) => {

                            return (
                                <Typography 
                                    key={index}
                                    variant="body1"
                                    ref={_arrays_ref[index]}
                                />
                            )
                                
                        })

                        }
                     </Grid>
                </Grid>
           </Grid>
        </>
    )

}