import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2"
              sx={{
                fontWeight: 600,
                fontFamily: 'Montserrat, Arial',
                color: 'white',
                letterSpacing: 1,
              }}>
            Blocklight is your premier source for crypto news,
            market insights, and in-depth articles—delivering accurate,
            timely, and actionable information for blockchain enthusiasts 
            and investors. We cut through the noise with data-driven
            analysis, project breakdowns, and trend reports,
            helping you stay ahead in the fast-moving 
            crypto space. Whether you're tracking DeFi, regulations, or
            emerging technologies, Blocklight provides the trusted
            knowledge you need to navigate Web3 with confidence.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <br />
            <Link href="/casestudy" color="inherit" underline="hover">
              CaseStudy
            </Link>
            <br />
            <Link href="/blog" color="inherit" underline="hover">
              Blog
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: support@blocklight.com</Typography>
            <Typography variant="body2">Phone: +91 8605846854</Typography>
            <Typography variant="body2">Address: Maharashtra, India</Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: 'center',
            mt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            pt: 2,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Blocklight Inc. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;