import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Container, Typography, Box } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width : "100wh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "blue",
        color: "#fff",
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to Our Platform
        </Typography>
        <Typography variant="h6" paragraph>
          Stay Organized & Boost Productivity with Our Smart To-Do App!
        </Typography>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2, borderRadius: 3, px: 4 }}
          >
            Get Started
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default HeroSection;
