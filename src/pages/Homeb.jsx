// Add this to your Home.jsx or as a new component and import it

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import InsightsIcon from '@mui/icons-material/Insights';
import CaseIcon from '@mui/icons-material/WorkOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const offerings = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Beginner to Advanced Crypto Learning',
    desc: 'Step-by-step guides and lessons for all levels, from Crypto 101 to advanced trading strategies.',
  },
  {
    icon: <InsightsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Expert Insights on Blockchain & On-Chain Analytics',
    desc: 'Get deep dives and actionable analytics from experienced crypto professionals.',
  },
  {
    icon: <CaseIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Case Studies & Real-World Applications',
    desc: 'Understand how blockchain is transforming industries with real-world examples.',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Trading & Investment Strategies',
    desc: 'Daily trade ideas, market analysis, and unique data mashups for traders and investors.',
  },
];

const Homeb = () => (
  <Box
    sx={{
      py: { xs: 6, md: 10 },
      background: 'linear-gradient(135deg, #766478 0%, #b39ddb 100%)',
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        mb: 4,
        textAlign: 'center',
        color: '#3a4438',
        letterSpacing: 1,
      }}
    >
      What we offer?
    </Typography>
    <Grid
      container
      spacing={4}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
        gap: 4,
        maxWidth: 1400,
        mx: 'auto',
        mb: 4,
      }}
    >
      {offerings.map((item, idx) => (
        <Grid
          item
          xs={12}
          md={4}
          key={idx}
          sx={{ display: 'flex', margin: 3, justifyContent: 'space-around', mb: 4 }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 4,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 3,
              background: 'rgba(255,255,255,0.9)',
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
              textAlign: 'center',
            }}
          >
            {item.icon}
            <Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.desc}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Homeb;