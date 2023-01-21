import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useWindowSize from "../../customHooks/useWindowSize";
import "./Part1.css";

function Part1() {
  let windowSize = useWindowSize();
  console.log(windowSize);
  let className = "bg-color-box";
  let classNameGridTwo = "bg-img-box";

  // classNameGridTwo = windowSize > 1024 ? "bg-img-box" : "bg-color-box";
  // className = windowSize <= 1024 ? "bg-img-box" : "bg-color-box";

  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Box className={className}>
          <Container maxWidth="xl">
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
      <Grid item xs={false} lg={6}>
        <Box className={classNameGridTwo}></Box>
      </Grid>
    </Grid>
  );
}

export default Part1;
