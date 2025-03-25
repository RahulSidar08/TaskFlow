import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#333", color: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {/* Section 1 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
            Welcome to TaskFlow, your go-to task management app designed to simplify your daily workflow. Our goal is to help you stay organized, prioritize tasks efficiently, and boost productivity. 
            </Typography>
          </Grid>

          {/* Section 2 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">Email: rahulsidar2056@gmail.com</Typography>
            <Typography variant="body2">Phone: +91 12345 67890</Typography>
          </Grid>

          {/* Section 3 - Social Media */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton href="https://facebook.com" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="https://www.instagram.com/rahul_sidar__/" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box textAlign="center" mt={3}>
          <Typography variant="body2">© {new Date().getFullYear()} TaskFlow. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
