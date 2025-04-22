import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Homea = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'linear-gradient(90deg, #e3f2fd 0%, #bbdefb 100%)',
      borderRadius: 4,
      boxShadow: 3,
      p: { xs: 3, md: 6 },
      mt: 6,
      mb: 6,
      maxWidth: 1200,
      mx: 'auto',
      gap: 6,
    }}
  >
    <Box sx={{ flex: 1 }}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#1a237e' }}>
        Considering investing in crypto?
      </Typography>
      <Typography variant="h6" sx={{ mb: 3, color: '#263238' }}>
        Your go-to source for crypto education, daily market analysis, and all the latest news in one concise article.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: '#37474f' }}>
        From beginner basics to advanced on-chain insights, we simplify crypto for you. Stay informed, stay ahead!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ borderRadius: 2, px: 4, py: 1.5, fontWeight: 600 }}
        onClick={() => window.location.href = '/blog'}
      >
        Blogs
      </Button>
    </Box>
    <Box
      component="img"
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
      alt="Crypto Investing"
      sx={{
        width: { xs: '100%', md: 400 },
        height: { xs: 220, md: 320 },
        objectFit: 'cover',
        borderRadius: 3,
        boxShadow: 2,
      }}
    />
  </Box>

);

export default Homea;