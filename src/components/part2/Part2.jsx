import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import sketch from "../../images/part2Bg.png";
import "./Part2.css";

function Part2() {
  return (
    <Grid container>
      <Grid item xs={12} lg={6} sx={{ justifyContent: "center" }}>
        <img className="part-two-bg-img" src={sketch} alt="" />
      </Grid>
      <Grid item xs={12} lg={6} container>
        <Box className="part-two-text">
          <Typography variant="h3" sx={{ padding: "10px", fontWeight: "bold" }}>
            Dedication, exposure and a passion for perfection.
          </Typography>
          <Typography
            color="#172833"
            variant="h6"
            sx={{
              fontFamily: "Raleway",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "30px",
              textAlign: "right",
            }}
          >
            At Rathinam, we look for precise quality and perfection. From
            discussion to implementation phase, we continuously follows the
            process structure to ensure atmost perfection.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Part2;
