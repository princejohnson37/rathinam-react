import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./services.css";

function ServiceCard({ cardHeading, cardContent }) {
  return (
    // <Grid item xs={12} lg={6}>
    <Card sx={{}} className="single-card">
      <CardContent>
        <Typography className="card-header" sx={{ fontSize: 14 }} gutterBottom>
          {cardHeading}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className="card-body">{cardContent}</Typography>
      </CardContent>
    </Card>
    // </Grid>
  );
}

export default ServiceCard;
