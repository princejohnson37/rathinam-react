import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

function Part5() {
  return (
    <Grid container sx={{ bgcolor: "#172833" }} maxWidth="xl">
      <Grid item xs={12} lg={6}>
        <Container maxWidth="xl">
          <Typography sx={{ p: 3, m: 3 }} color="white" variant="h3">
            Do You Have Project To Discuss
          </Typography>
        </Container>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Button
          variant="contained"
          sx={{
            background: "#00BFB4",
            borderRadius: "50px",
            marginTop: "50px",
          }}
        >
          Contact Us
        </Button>
      </Grid>
    </Grid>
  );
}

export default Part5;
