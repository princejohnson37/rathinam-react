import { HorizontalRule } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import StaticAppBar from "../StaticAppBar/StaticAppBar";
import "./services.css";

function Services() {
  return (
    <>
      <StaticAppBar position="sticky" />
      <Grid container bgcolor="#172333" height="100%" width="100%">
        <Grid item xs={12} sx={{ background: "#fff" }}>
          <Container
            maxWidth="xl"
            sx={{
              width: "90%",
              background: "#fff",
              color: "#172333",
              height: "167px",
              display: "flex",
              alignItems: "flex-start",
              padding: "50px 50px 50px 50px",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "Raleway",
                fontWeight: "900",
                fontSize: "2.5rem",
              }}
            >
              Services
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container
            maxWidth="xl"
            sx={{ padding: "250px 0 250px 0", width: "90%" }}
          >
            <Typography color="white" sx={{ fontSize: "1.75rem" }}>
              We are Rathinam Building Contracting, a premier construction
              company dedicated to providing exceptional service and quality
              work. We are a team of highly skilled and experienced
              professionals with a passion for building and a commitment to
              excellence.
              <br></br>
              <br></br>
              With years of experience in the industry, we have the knowledge
              and expertise to handle any construction project, big or small. We
              specialize in both residential and commercial construction, and
              take pride in our ability to bring our clients' visions to life.
              Our team includes architects, engineers, and construction experts
              who work closely with our clients every step of the way to ensure
              that their project is completed on time, within budget, and to
              their satisfaction. We use only the highest quality materials and
              the latest construction techniques to ensure that our projects are
              built to last.
              <br></br>
              <br></br>
              We are fully licensed and insured, and committed to safety on all
              of our job sites. Our goal is to build not only beautiful
              structures, but also lasting relationships with our clients. Thank
              you for considering Rathinam for your next construction project.
              Contact us today to schedule a consultation and let us help turn
              your construction dreams into reality.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Divider light fullWidth className="divider" />
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "50px 0 50px 0",
              width: "90%",
            }}
          >
            <Typography
              color="#fff"
              fontSize="54px"
              sx={{ paddingRight: "80px" }}
            >
              Do you have a <br />
              project to discuss?
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ background: "#00BFB4", borderRadius: "50px" }}
              className="about-us-btn"
            >
              E-Mail Us
            </Button>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default Services;
