//import React
import React from "react";
import FormTriangle from '../home/FormTriangle';
import { Grid, Typography, Button } from "@mui/material";
import bannerGoolge from '../../assets/googleInformation/bannerGoogleInformation.png';

const styled = {
     containerDiv: {
        minHeight: '35vh',
        overflow: 'hidden',
        '& img': {
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        },
        '& > div': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 1)', 
            opacity: 0.5, 
          },
          '& > div': {
            display: 'grid',
            justifyItems: 'center',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax( min(98%, 30em), 1fr))',
            gridGap: '2%',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hiddent',
            '& > div': {
                marginTop: '35%'
            },
            '& > div.item_text_long': {
                width: '70%'
            }

          }



        },
        '@media (max-width: 768px)': {
            minHeight: '75vh',
            '& img': {
              height: '-webkit-fill-available',
            },
            '& > div': {
          
              '& > div': {
                justifyItems: 'start',
                marginLeft: '3%',
               
                '& > div.item_text_long': {
                   display: 'none'
                },
                '& > div:not(.item_text_long)': {
                  width: '60%'
                }

              }

            }

        }
     },
     titleStyle: {
      fontStyle: 'normal',
      fontweight: '500',
      fontSize: '24px',
      color: 'var( --color-gray-light)',
      '@media (max-width: 768px)': {
          color: 'var(--color-white-normal)',  
          fontweight: '400',   
       }
     },
     textNormal: {
        fontStyle: 'normal',
        fontweight: '500',
        fontSize: '16px',
        color: 'var(--color-gray)',
        '@media (max-width: 768px)': {
          color: 'var(--color-white-normal)', 
          fontweight: '400', 
        }   
     },
     olConatainer: {
       paddingInlineStart: '0px'
     }
}

/**
 * @author: <cristian.machado@correounivalle.edu.co>
 * @returns {JSX.Element} GoogleInformationPage
 */
export default function GoogleInformationPage(props) {

  React.useEffect(() => {
    addClassHeader();
  }, []);
  
  return (
    <>
      <Grid container sx={styled.containerDiv}>
          <Grid item xs={12}>
            <img src={bannerGoolge} alt="banner" />    
            <Grid item xs={12}>
              <Grid item xs={12} >
                <Typography sx={styled.titleStyle}>
                      Erasing Google information
                </Typography>
                <ol className="ol_style_container">
                    <li>
                        <Typography sx={styled.textNormal}>
                            We erase any type of prejuducial information that could
                        </Typography>
                    </li>
                    <li>
                        <Typography sx={styled.textNormal}>
                            appear in the search engine and that affect your
                        </Typography>
                    </li>
                    <li>
                        <Typography sx={styled.textNormal}>
                            reputation. ¡100% guarantee!
                        </Typography>
                    </li>
                </ol>
              </Grid>
              <Grid className="item_text_long" item xs={12} >

                <ol className="ol_style_container item">
                    <li>
                        <Typography sx={styled.textNormal}>
                          Negative information in Internet is every day easier to detect, everyone who can access 
                          the Internet could make a research in Google typing your Name and Surname 
                          or your company data and easly obtain every kind of information without 
                          any filter or limit.
                        </Typography>
                    </li>
                    <li>
                        <Typography sx={styled.textNormal}>
                        The majority of the users do not distinguishbetween fake news or false content generated 
                        for anonymous users with the aim of prejudicate your digital reputation or yout company credibility. 
                        That’s why World Delete developed know-how that permit us to guarantee our job.
                        </Typography>
                    </li>
                </ol>
              </Grid>
            </Grid> 
          </Grid>
      </Grid>
      <FormTriangle />
    </>
  );
}

function addClassHeader() {
  const header = document.querySelector('#header_component');
  const header_heigth = document.querySelector('#_height_header_');

  if (!header.classList.contains('header__google_information')) {
      header.classList.add('header__google_information');
      header_heigth.classList.add('_height_header_');
  }

}