import React from 'react';
import { Box, Container, Typography, Grid, Divider, useTheme } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

const Homed = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(/gray-high-rise-building.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        color: 'white',
        py: 10,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
              fontSize: '2.8rem',
            },
          }}
        >
          Why Blocklight Stands Out
        </Typography>

        <Divider
          sx={{
            borderColor: 'primary.main',
            width: 100,
            height: 4,
            mx: 'auto',
            mb: 6,
          }}
        />

        <Typography
          variant="h5"
          component="p"
          sx={{
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
            mb: 8,
            lineHeight: 1.6,
          }}
        >
          At Blocklight, we go beyond surface-level crypto content. We provide:
        </Typography>

        <Grid container spacing={4}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: 4,
          maxWidth: 1400,
          mx: 'auto',
          mb: 4,
        }}>
          {[
            {
              title: 'In-Depth Education',
              text: 'From beginner fundamentals to advanced on-chain analysis, we break down complex topics in a clear, structured way.',
            },
            {
              title: 'Case Studies & Real-World Insights',
              text: 'We analyze real blockchain events, trading patterns, and historical data to give you actionable knowledge.',
            },
            {
              title: 'Unique Trading Insights',
              text: 'Our proprietary probabilistic trading approach helps you assess crypto market patterns based on session-based price action.',
            },
            {
              title: 'Yes Hype, Just Clarity',
              text: 'We focus on facts, data, and fundamental insights—cutting through the noise of speculation and misleading narratives.',
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  maxWidth: 400,
                  p: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 2,
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                }}
              >
                <CheckCircleOutline
                  sx={{
                    color: 'primary.main',
                    fontSize: 32,
                    mb: 2,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h5"
          component="p"
          sx={{
            textAlign: 'center',
            mt: 8,
            fontWeight: 600,
            '& span': {
              color: 'primary.main',
            },
          }}
        >
          With <span>Blocklight</span>, you don't just follow the market—you{' '}
          <span>understand</span> it.
        </Typography>
      </Container>
    </Box>
  );
};

export default Homed;