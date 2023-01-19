import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./Part1.css";

function Part1() {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Box className="bg-color-box">
          <Container>
            <Typography variant="h3" color="white">
              Constructing Spaces For You
            </Typography>
            <Typography varient="h5" color="white">
              We provide all kind of construction services with advanced
              technology and precise quality.
            </Typography>
          </Container>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className="bg-img-box"></Box>
      </Grid>
    </Grid>
  );
}

export default Part1;
