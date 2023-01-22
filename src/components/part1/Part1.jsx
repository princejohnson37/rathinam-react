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
      <>
        <Grid item xs={12} lg={6}>
          <Box className={className}>
            <Container maxWidth="xl" sx={{ textAlign: "left", margin: "50px" }}>
              <p className="part-one-head">Constructing</p>
              <p className="part-one-head">Spaces For You</p>
              <Typography
                className="part-two-sub"
                color="white"
                sx={{ fontSize: "1.5rem" }}
                mt={5}
              >
                We provide all kind of construction services <br></br> with
                advanced technology and precise quality.
              </Typography>
            </Container>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box className={classNameGridTwo}></Box>
          {/* <div>
            <img src={HomeImage} alt="" />
          </div> */}
        </Grid>
      </>
    </Grid>
  );
}

export default Part1;
