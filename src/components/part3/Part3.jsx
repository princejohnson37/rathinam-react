import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./Part3.css";

function Part3() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className="part-three-bg">
          <h1 className="part-three-text-main">
            SPECIALIZED IN CUSTOM BUILDING,
          </h1>
          <h1 className="part-three-text-sub">
            DEVELOPMENT AND <br></br>LARGE-SCALE RENOVATIONS
          </h1>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Part3;
