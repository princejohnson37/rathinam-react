import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Project from "../ProjectDiscuss/Project";
import StaticAppBar from "../StaticAppBar/StaticAppBar";
import "./ContactUs.css";

function ContactUs() {
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
              Contact Us
            </Typography>
          </Container>
        </Grid>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", flexWrap: "wrap", width: "90%" }}
        >
          <Grid item xs={12} lg={6}>
            <Box sx={{ paddingY: "50px" }}>
              <Typography className="contact-us-header">
                Rathinam Building Contracting
              </Typography>
            </Box>
            <Typography className="contact-us-details">
              RKM Building , Near Al Qiyadha Metro Station Abuhail, Dubai, UAE
              <br></br>
              Tel : 04 5823015
              <br></br>
              Mail : info@rathinamcontracting.com
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7642324940944!2d55.349183714949575!3d25.27851538385838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d44265e948b%3A0xb3095660e734b638!2sRKM%20Building!5e0!3m2!1sen!2sin!4v1674588710703!5m2!1sen!2sin"
                width="516"
                height="246"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Container>

        <Project />
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
