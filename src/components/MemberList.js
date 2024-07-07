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
          <Grid item key={index}>
            <MemberCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MemberList;
