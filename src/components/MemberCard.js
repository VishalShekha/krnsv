// src/components/MemberCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const MemberCard = ({ member }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={member.photo}
          alt={member.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {member.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.position}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MemberCard;
