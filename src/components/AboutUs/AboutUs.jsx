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
import Footer from "../Footer/Footer";
import Project from "../ProjectDiscuss/Project";
import StaticAppBar from "../StaticAppBar/StaticAppBar";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <StaticAppBar position="sticky" />
      <Grid container bgcolor="#172333" height="100%" width="100%">
        <Grid item xs={12} sx={{ background: "#fff" }}>
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
              color: "#172333",
              height: "167px",
              display: "flex",
              alignItems: "flex-start",
              padding: "50px 0 50px 0",
              width: "90%",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "Raleway",
                fontWeight: "900",
                fontSize: "3.5rem",
                paddingTop: "30px",
              }}
            >
              About Us
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container
            maxWidth="xl"
            sx={{ padding: "150px 0 250px 0", width: "90%" }}
          >
            <Typography
              color="white"
              sx={{ fontFamily: "Raleway", fontSize: "28px" }}
            >
              We are Rathinam Building Contracting, a premier construction
              company dedicated to providing exceptional service and quality
              work. We are a team of highly skilled and experienced
              professionals with a passion for building and a commitment to
              excellence. <br></br>
              <br />
              With years of experience in the industry, we have the knowledge
              and expertise to handle any construction project, big or small. We
              specialize in both residential and commercial construction, and
              take pride in our ability to bring our clients' visions to life.
              <br></br>
              <br /> Our team includes architects, engineers, and construction
              experts who work closely with our clients every step of the way to
              ensure that their project is completed on time, within budget, and
              to their satisfaction. We use only the highest quality materials
              and the latest construction techniques to ensure that our projects
              are built to last. We are fully licensed and insured, and
              committed to safety on all of our job sites. Our goal is to build
              not only beautiful structures, but also lasting relationships with
              our clients. <br></br>
              <br />
              Thank you for considering Rathinam for your next construction
              project. Contact us today to schedule a consultation and let us
              help turn your construction dreams into reality.
            </Typography>
          </Container>
        </Grid>
        <Project />
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default AboutUs;
