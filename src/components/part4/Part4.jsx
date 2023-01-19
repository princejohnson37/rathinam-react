import { Chip, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./Part4.css";

function Part4() {
  return (
    <Container className="part-four-bg" maxWidth="xl">
      <Typography variant="h3">Features</Typography>
      <Chip label="CUSTOM BUILDING" />
      <Chip label="RESIDENTIAL DEVELOPMENT" />
      <Chip label="RENOVATION AND EXPANSION" />
      <Chip label="PROJECT PLANNING" />
      <Chip label="COMMERCIAL AND INDUSTRIAL PROJECTS" />
    </Container>
  );
}

export default Part4;
