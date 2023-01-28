import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import React from "react";
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
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "Raleway",
                fontWeight: "900",
                fontSize: "80px",
              }}
            >
              Contact Us
            </Typography>
          </Container>
        </Grid>
        <Container maxWidth="xl" sx={{ display: "flex", flexWrap: "wrap" }}>
          <Grid item xs={12} lg={6}>
            <Box sx={{ paddingY: "50px" }}>
              <Typography className="contact-us-header">
                Rathinam Building Contracting
              </Typography>
            </Box>
            <Typography className="contact-us-details">
              RKM Building , Near Al Qiyadha Metro Station Abuhail, Dubai, UAE
              Tel : +971 55 401 3456 Mail : shabeerairport227@yahoo.com
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

        <Grid item xs={12}>
          <Divider light fullWidth className="divider" />
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "50px 0 50px 0",
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

      {/* <Container
        maxWidth="xl"
        sx={{ paddingTop: "100px", background: "#172833" }}
      >
        <Box className="">
          <Typography
            bgcolor="#fff"
            variant="h3"
            color="#172833"
            sx={{ background: "#fff" }}
            height="5%"
          >
            Contact
          </Typography>
        </Box>
        <Grid container>
          
          <Grid item xs={12}>
            <Container
              maxWidth="xl"
              sx={{
                position: "absolute",
                left: "0",
                right: "0",
                margin: "0 auto",
              }}
            >
              <Typography variant="h4">
                Do You Have A Project To Discuss?
              </Typography>
              <Button variant="contained">E-Mail</Button>
            </Container>
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
}

export default ContactUs;
