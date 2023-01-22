import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./Part3.css";

function Part3() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className="part-three-bg">
          <Typography variant="h5" color="#fff">
            SPECIALIZED IN CUSTOM BUILDING,
          </Typography>
          <Typography variant="h5" color="rgba(199, 188, 115, 1)">
            DEVELOPMENT AND LARGE-SCALE RENOVATIONS
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Part3;
