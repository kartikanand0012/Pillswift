import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";

interface CarouselItem {
  image: string;
  heading: string;
  subheading: string;
  text: string;
  ctaText: string;
  ctaLink: string;
}

interface CarouselComponentProps {
  items: CarouselItem[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ items }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <Carousel
        navButtonsAlwaysVisible
        indicators={false}
        animation="slide"
        autoPlay={true}
        interval={5000} // Slow down the sliding interval
        duration={1000} // Slow down the sliding transition duration
        navButtonsProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 0,
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

interface ItemProps {
  item: CarouselItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <Paper
      elevation={3}
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "90vh",
        color: "#fff",
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        padding: "20px",
        textAlign: "left",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "80%",
          marginBottom: "20px", // Adjusted for spacing from the bottom
          marginLeft: "20px", // Adjusted for spacing from the left
          left: "15%",
          bottom: "20%",
        }}
      >
        <Typography variant="h3" gutterBottom>
          {item.heading}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {item.subheading}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {item.text}
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: "#01754f", marginTop:'1%' }}
          href={item.ctaLink}
        >
          {item.ctaText}
        </Button>
      </Box>
    </Paper>
  );
};

export default CarouselComponent;
