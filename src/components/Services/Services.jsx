import { HorizontalRule } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Project from "../ProjectDiscuss/Project";
import StaticAppBar from "../StaticAppBar/StaticAppBar";
import ServiceCard from "./ServiceCard";
import "./services.css";

function Services() {
  const servicesCards = [
    {
      cardHeading: "Design and planning",
      cardContent:
        "Helping clients to plan and design their construction projects, including creating detailed blueprints and schematics.",
    },
    {
      cardHeading: "Project management",
      cardContent:
        "Overseeing all aspects of the construction project, from start to finish, including scheduling, budgeting, and coordination with subcontractors.",
    },
    {
      cardHeading: "Site Preparation",
      cardContent:
        "Clearing and grading the construction site,installing utilities and infrastructure, and preparing the foundation for building.",
    },
    {
      cardHeading: "Building Construction",
      cardContent:
        " Building the structure, including laying the foundation, installing walls, roofs, and windows, and finishing the interior and exterior.",
    },
    {
      cardHeading: "Finishing and Decoration",
      cardContent:
        "Installing fixtures, finishes, and other decorative elements to complete the construction project.",
    },
    {
      cardHeading: "Maintenace and Repair",
      cardContent:
        "Providing ongoing maintenance and repair services to keep the construction project in good condition over time.",
    },
  ];
  const cards = servicesCards.map((card, index) => {
    return (
      <ServiceCard
        cardContent={card.cardContent}
        cardHeading={card.cardHeading}
      />
    );
  });
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
              padding: "50px 50px 50px 50px",
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
              Services
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="xl">
            <Box className="FlexContainer">
              {servicesCards.map((card, index) => (
                <ServiceCard
                  key={index}
                  cardContent={card.cardContent}
                  cardHeading={card.cardHeading}
                />
              ))}
            </Box>
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

export default Services;
