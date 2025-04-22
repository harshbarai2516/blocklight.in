import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Analytics, TrendingUp, AccountTree, School } from '@mui/icons-material';

const features = [
  {
    icon: <Analytics fontSize="large" color="primary" />,
    title: "Market Analytics",
    content: "Real-time data visualization and predictive market trends analysis.",
  },
  {
    icon: <TrendingUp fontSize="large" color="primary" />,
    title: "Portfolio Insights",
    content: "Deep analysis of your investment portfolio with risk assessment.",
  },
  {
    icon: <AccountTree fontSize="large" color="primary" />,
    title: "Trading Signals",
    content: "AI-powered trading signals with 85% historical accuracy.",
  },
  {
    icon: <School fontSize="large" color="primary" />,
    title: "Blockchain Education",
    content: "From fundamentals to advanced on-chain analysis.",
  },
];

const Homec = () => (
  <Box
    sx={{
      background: 'linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%)',
      py: { xs: 4, md: 8 },
      px: { xs: 2, md: 6 },
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        mb: 4,
        textAlign: 'center',
        color: 'primary.main',
        letterSpacing: 1,
      }}
    >
      Explore Our Features
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
        gap: 4,
        maxWidth: 1400,
        mx: 'auto',
      }}
    >
      {features.map((feature, idx) => (
        <Paper
          key={idx}
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
            background: 'rgba(255,255,255,0.97)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-8px) scale(1.03)',
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
            },
            textAlign: 'center',
          }}
        >
          {feature.icon}
          <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1 }}>
            {feature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {feature.content}
          </Typography>
        </Paper>
      ))}
    </Box>
  </Box>
);

export default Homec;