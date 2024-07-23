// src/components/MemberList.js
import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MemberCard from "./MemberCard";
import members from "../members";

const MemberList = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        {members.map((member, index) => (
          <Grid item key={index} xs={12} sm={4} md={4} lg={4} xl={4}>
            <MemberCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MemberList;

/*
xs={12}: 1 card per row on extra-small screens.
sm={6}: 2 cards per row on small screens.
md={4}: 3 cards per row on medium screens.
lg={3}: 4 cards per row on large screens.
xl={2}: 6 cards per row on extra-large screens.
*/
