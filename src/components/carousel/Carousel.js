import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Box from "@mui/material/Box";

// const images_content = require.context("../../assets/banners", true);

const DefaultSettings = {
  autoPlay: false,
  animation: "slide",
  indicators: false,
  duration: 500,
  navButtonsAlwaysVisible: true,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: false,
  swipe: true,
};

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box sx={{ my: 6 }}>
      <Carousel
        index={activeIndex}
        onChange={handleCarouselChange}
        NextIcon={<RightButton />}
        PrevIcon={<LeftButton />}
        {...DefaultSettings}
      >
        {items.map((item, index) => {
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
            />
          );
        })}
      </Carousel>

      <Stepper activeStep={activeIndex}>
        {items.map((item, i) => (
          <Step key={i} onClick={() => handleCarouselChange(i)}>
            <StepLabel>{item.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

const Banner = (props) => {
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={4} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        <Button variant="outlined" className="ViewButton">
          View Now
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={4} key={item.Name} sx={{ height: "100%" }}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
};

const items = [
  {
    Name: "Electronics",
    Caption: "Electrify your friends!",
    contentPosition: "left",
    Items: [
      {
        Name: "Macbook Pro",
        Image: "https://source.unsplash.com/featured/?macbook",
      },
      {
        Name: "iPhone",
        Image: "https://source.unsplash.com/featured/?iphone",
      },
    ],
  },
  {
    Name: "Home Appliances",
    Caption: "Say no to manual home labour!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Washing Machine WX9102",
        Image: "https://source.unsplash.com/featured/?washingmachine",
      },
      {
        Name: "Learus Vacuum Cleaner",
        Image: "https://source.unsplash.com/featured/?vacuum,cleaner",
      },
    ],
  },
  {
    Name: "Decoratives",
    Caption: "Give style and color to your living room!",
    contentPosition: "right",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: "https://source.unsplash.com/featured/?lamp",
      },
      {
        Name: "Floral Vase",
        Image: "https://source.unsplash.com/featured/?vase",
      },
    ],
  },
];

const LeftButton = () => (
  <svg
    width="40"
    height="36"
    viewBox="0 0 40 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 22L18 18L22 14"
      stroke="#FF6262"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="39.5"
      y="35.5"
      width="39"
      height="35"
      rx="17.5"
      transform="rotate(180 39.5 35.5)"
      stroke="#FF6262"
    />
  </svg>
);

const RightButton = () => (
  <svg
    width="40"
    height="36"
    viewBox="0 0 40 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 14L22 18L18 22"
      stroke="#FF6262"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="0.5" y="0.5" width="39" height="35" rx="17.5" stroke="#FF6262" />
  </svg>
);

export default CustomCarousel;
