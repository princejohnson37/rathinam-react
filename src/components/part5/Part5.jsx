import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";

function Part5() {
  return (
    <Grid  container sx={{ bgcolor: "#172833",display: 'flex', alignItems: 'flex-start',justifyContent: 'space-evenly' }}>
      <Grid item xs={12} lg={8}>
        <Container maxWidth="xl">
          <h2 className="footer-heading">
            Do You Have Project
            <br /> To Discuss?
          </h2>
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        lg={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Container>
          <Button
            variant="contained"
            sx={{
              background: "#00BFB4",
              borderRadius: "50px",
              marginTop: "50px",
              "&:hover": {
                backgroundColor: "#01716a",
              },
            }}
            href="/contactus"
          >
            Contact Us
          </Button>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Part5;
