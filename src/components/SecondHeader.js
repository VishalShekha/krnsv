import React from "react";
import { Box, Typography } from "@mui/material";

const SecondHeader = ({ Path }) => {
  let title;

  switch (Path) {
    case "/":
      title = "Our Gurus";
      break;
    case "/events":
      title = "Events";
      break;
    case "/about-us/mission":
      title = "Mission";
      break;
    case "/about-us/team":
      title = "Team";
      break;
    case "/members":
      title = "Members";
      break;
    default:
      title = "Home";
      break;
  }

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        backgroundImage:
          "url(https://m.media-amazon.com/images/I/41WuM1ASZwL.__AC_SY300_SX300_QL70_FMwebp_.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value to control the dimness
          zIndex: 1,
        }}
      />
      <Typography variant="h1" sx={{ position: "relative", zIndex: 2 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default SecondHeader;
