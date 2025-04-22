import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, Grid, Divider } from '@mui/material';

const General = () => {
  const location = useLocation();
  const study = location.state?.study;

  if (!study) {
    return (
      <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          No case study data provided.
        </Typography>
      </Box>
    );
  }

  // Helper to render content with headings, paragraphs, bullet points, and images
  const renderContent = (content) => {
    if (!Array.isArray(content)) {
      return (
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: '1rem', sm: '1.15rem' },
            lineHeight: 1.8,
            color: '#374151'
          }}
        >
          {content}
        </Typography>
      );
    }

    return content.map((block, idx) => {
      // Bullet point: if block starts with '- '
      if (typeof block === 'string' && block.trim().startsWith('- ')) {
        return (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, pl: 2 }}>
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                bgcolor: 'primary.main',
                borderRadius: '50%',
                mt: '8px',
                mr: 1.5,
                flexShrink: 0
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1.15rem' },
                lineHeight: 1.8,
                color: '#374151'
              }}
            >
              {block.replace(/^- /, '')}
            </Typography>
          </Box>
        );
      }
      // Heading level 2
      if (typeof block === 'string' && block.trim().startsWith('##')) {
        return (
          <Typography
            key={idx}
            variant="h5"
            sx={{
              mt: 4,
              mb: 2,
              fontWeight: 700,
              color: 'primary.main',
              fontFamily: 'Montserrat, Arial'
            }}
          >
            {block.replace(/^##\s*/, '')}
          </Typography>
        );
      }
      // Heading level 1
      if (typeof block === 'string' && block.trim().startsWith('#')) {
        return (
          <Typography
            key={idx}
            variant="h4"
            sx={{
              mt: 5,
              mb: 2,
              fontWeight: 800,
              color: 'primary.main',
              fontFamily: 'Montserrat, Arial'
            }}
          >
            {block.replace(/^#\s*/, '')}
          </Typography>
        );
      }
      // Image: if block is an object with type 'image'
      if (typeof block === 'object' && block.type === 'image' && block.src) {
        return (
          <Box
            key={idx}
            sx={{
              width: '100%',
              my: 3,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              component="img"
              src={block.src}
              alt={block.alt || 'Case Study'}
              sx={{
                maxWidth: '100%',
                maxHeight: 320,
                borderRadius: 3,
                boxShadow: 2
              }}
            />
          </Box>
        );
      }

      if (
        typeof block === 'string' &&
        (block.startsWith('http://') || block.startsWith('https://')) ) {
        return (
          <Box
            key={idx}
            sx={{
              width: '100%',
              my: 3,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              component="img"
              src={block}
              alt="Case Study"
              sx={{
                maxWidth: '100%',
                maxHeight: 320,
                borderRadius: 3,
                boxShadow: 2
              }}
            />
          </Box>
        );
      }
      // Default: paragraph
      return (
        <Typography
          key={idx}
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: '1rem', sm: '1.15rem' },
            lineHeight: 1.8,
            color: '#374151'
          }}
        >
          {block}
        </Typography>
      );
    });
  };

  return (
    <Box sx={{ bgcolor: 'linear-gradient(135deg, #f5f7fa 0%, #e0ecfc 100%)', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Paper
        elevation={6}
        sx={{
          maxWidth: 900,
          mx: 'auto',
          p: { xs: 2, sm: 4, md: 6 },
          borderRadius: 4,
          boxShadow: '0 8px 32px 0 rgba(44,62,80,0.10)',
          background: 'linear-gradient(120deg, #e3f0ff 0%, #f8fafc 100%)'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontFamily: 'Montserrat, Arial',
            color: 'primary.main',
            letterSpacing: 1,
            textAlign: 'center'
          }}
        >
          {study.title}
        </Typography>
        <Divider sx={{ mb: 3, maxWidth: 120, mx: 'auto' }} />
        <Typography
          variant="subtitle2"
          sx={{
            color: 'text.secondary',
            mb: 3,
            textAlign: 'center',
            fontFamily: 'Inter, Arial'
          }}
        >
          {study.author && <>By {study.author} • </>}{study.date}
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {study.image && (
            <Grid item xs={12} md={study.image2 ? 6 : 12}>
              <Box
                component="img"
                src={study.image}
                alt={study.title}
                sx={{
                  width: '100%',
                  height: { xs: 200, md: 260 },
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: 2
                }}
              />
            </Grid>
          )}
          {study.image2 && (
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={study.image2}
                alt={study.title + " 2"}
                sx={{
                  width: '100%',
                  height: { xs: 200, md: 260 },
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: 2
                }}
              />
            </Grid>
          )}
        </Grid>
        {renderContent(study.content)}
      </Paper>
    </Box>
  );
};

export default General;