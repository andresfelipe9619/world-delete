//import React
import React from "react";
import FormTriangle from '../home/FormTriangle';
import { Grid, Typography, Button } from "@mui/material";
import bannerGoolge from '../../assets/googleInformation/bannerGoogleInformation.png';
import socialNetwork from '../../assets/googleInformation/socialNetwork.png';
import blogsForums from '../../assets/googleInformation/blogsForums.png';
import digitalMedia from '../../assets/googleInformation/digitalMedia.png';
import videosPhotografias from '../../assets/googleInformation/videosPhotografias.png';
import mentionsComments from '../../assets/googleInformation/mentionsComments.png';

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
  console.log(props);

  React.useEffect(() => {
    addClassHeader();
  }, []);

  const json_data = {
      '1': {
        'img': bannerGoolge
      },
      '2': {
        'img': socialNetwork
      },
      '3': {
        'img': blogsForums
      },
      '4': {
        'img': digitalMedia
      },
      '5': {
        'img': videosPhotografias
      },
      '6': {
        'img': mentionsComments
      }
  }
  
  return (
    <>
      <Grid container sx={styled.containerDiv}>
          <Grid item xs={12}>
            <img src={json_data[props.type]['img']} alt="banner" />    
            <Grid item xs={12}>
              <Grid item xs={12} >
                <Typography sx={styled.titleStyle}>
                      {props.content['title']}
                </Typography>
                <ol className="ol_style_container">
                    
                        <Typography sx={styled.textNormal}>
                            reputation. ¡100% guarantee!
                        </Typography>
                    {
                      props.content['text_1'].map((item, index) => {
                        return (
                          <li key={index}>
                            <Typography sx={styled.textNormal}>
                              {item}
                            </Typography>
                          </li>
                        )
                      })
                    }
                </ol>
              </Grid>
              <Grid className="item_text_long" item xs={12} >

                <ol className="ol_style_container item">
                     {
                        props.content['text_2'].map((item, index) => {
                          return (
                            <li key={index}>
                              <Typography sx={styled.textNormal}>
                                {item}
                              </Typography>
                            </li>
                          )
                        })
                     }
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