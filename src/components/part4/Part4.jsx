import { Box, Chip, Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import "./Part4.css";

function Part4() {
  return (
    <Grid container>
      <Grid item container xs={12}>
        <Container className="part-four-bg" maxWidth="xl">
          <Typography variant="h3" sx={{ p: 2, m: 3, mt: 10 }}>
            Features
          </Typography>
          {/* <Chip label="CUSTOM BUILDING" />
      <Chip label="RESIDENTIAL DEVELOPMENT" />
      <Chip label="RENOVATION AND EXPANSION" />
      <Chip label="PROJECT PLANNING" />
      <Chip label="COMMERCIAL AND INDUSTRIAL PROJECTS" /> */}

          <Container maxWidth="md" className="part-four-container">
            <div className="rect-sm-container">CUSTOM BUILDING</div>
            <div className="rect-sm-container">RESIDENTIAL DEVELOPMENT</div>
            <div className="rect-sm-container">RENOVATION AND EXPANSION</div>
            <div className="rect-sm-container">PROJECT PLANNING</div>
            <div className="rect-sm-container">
              COMMERCIAL AND INDUSTRIAL PROJECTS
            </div>
          </Container>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Part4;
