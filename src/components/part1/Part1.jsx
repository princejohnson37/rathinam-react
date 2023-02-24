import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useWindowSize from "../../customHooks/useWindowSize";
import "./Part1.css";
import HomeImage from "./photo.png";

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
            <Container maxWidth="xl" sx={{ textAlign: "left", margin: "50px" }}>
              <h1 className="part-one-head">
                Constructing <br />
                Spaces For You
              </h1>
              <h3
                className="part-two-sub"
              >
                We provide all kind of construction services <br></br> with
                advanced technology and precise quality.
              </h3>
            </Container>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          {/* <Box className={classNameGridTwo}></Box> */}
          <Container className={classNameGridTwo}>
            {/* <img src={HomeImage} alt="" />*/}
            {/* <Box className={classNameGridTwo}></Box>  */}
          </Container>
        </Grid>
    </Grid>
  );
}

export default Part1;
