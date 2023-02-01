import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

function Project() {
  return (
    <Grid item xs={12}>
      <Divider light className="divider" />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "50px 0 50px 0",
          width: "90%",
        }}
      >
        <Typography color="#fff" fontSize="54px" sx={{ paddingRight: "30%" }}>
          Do you have a <br />
          project to discuss?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            textTransform: "none",
            fontSize: "1.5rem",
            background: "#00BFB4",
            borderRadius: "50px",
            fontFamily: "Raleway",
            fontWeight: "900",
            marginTop: "60px",
          }}
          className="about-us-btn"
          href="mailto:info@rathinamcontracting.com"
        >
          E-Mail Us
        </Button>
      </Container>
    </Grid>
  );
}

export default Project;
