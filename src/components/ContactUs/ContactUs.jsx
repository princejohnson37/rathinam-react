import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../header/AppBar/AppBar";

function ContactUs() {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Typography bgcolor="#fff" color="black" varient="h3">
        Contact
      </Typography>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Container maxWidth="xl">
            <Typography>Rathinam Building Contracting</Typography>
            <Typography>
              RKM Building , Near Al Qiyadha Metro Station Abuhail, Dubai, UAE
              Tel : +971 55 401 3456 Mail : shabeerairport227@yahoo.com
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} lg={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7642324940944!2d55.349183714949575!3d25.27851538385838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d44265e948b%3A0xb3095660e734b638!2sRKM%20Building!5e0!3m2!1sen!2sin!4v1674588710703!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
