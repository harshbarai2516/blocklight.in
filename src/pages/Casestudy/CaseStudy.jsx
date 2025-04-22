import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Divider,
  CircularProgress,
  Pagination,
  useTheme
} from '@mui/material';
import { TrendingUp, AccountTree, Insights } from '@mui/icons-material';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const iconMap = {
  "Supply Chain": <AccountTree color="primary" sx={{ fontSize: 32 }} />,
  "Bitcoin": <TrendingUp color="primary" sx={{ fontSize: 32 }} />,
  "AI & Blockchain": <Insights color="primary" sx={{ fontSize: 32 }} />
};

const CARDS_PER_PAGE = 9;

const CaseStudy = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'casestudy'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCaseStudies(data);
      } catch (error) {
        setCaseStudies([]);
      }
      setLoading(false);
    };
    fetchCaseStudies();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(caseStudies.length / CARDS_PER_PAGE);
  const paginatedStudies = caseStudies.slice(
    (page - 1) * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE
  );

  return (
    <Box
      sx={{
        bgcolor: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '100vh',
        py: { xs: 5, md: 8 },
        px: { xs: 1, md: 0 }
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          mb: 6,
          textAlign: 'center',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 5,
          boxShadow: '0 4px 32px 0 rgba(44,62,80,0.10)',
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 6 }
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 1,
            fontFamily: 'Montserrat, Arial',
            color: theme.palette.primary.main,
            letterSpacing: 1,
            fontSize: { xs: '2rem', md: '2.7rem' }
          }}
        >
          Case Studies
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#374151',
            fontFamily: 'Inter, Arial',
            mb: 2,
            fontWeight: 400,
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}
        >
          Real-world insights into blockchain, crypto, and emerging tech.
        </Typography>
        <Box
          sx={{
            width: 80,
            height: 5,
            bgcolor: 'primary.main',
            borderRadius: 3,
            mx: 'auto',
            my: 2
          }}
        />
        <Divider sx={{ maxWidth: 300, mx: 'auto', mb: 2 }} />
      </Box>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{
              maxWidth: 1200,
              mx: 'auto',
              mb: 4,
              minHeight: 200
            }}
          >
            {paginatedStudies.length === 0 && (
              <Grid item xs={12}>
                <Typography variant="h6" color="text.secondary" align="center">
                  No case studies found.
                </Typography>
              </Grid>
            )}
            {paginatedStudies.map((study, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={study.id || idx}
                sx={{
                  display: 'flex'
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 5,
                    overflow: 'hidden',
                    boxShadow: '0 6px 32px 0 rgba(44,62,80,0.10)',
                    transition: 'transform 0.35s cubic-bezier(.21,1.02,.73,1), box-shadow 0.35s',
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(2px)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                    minHeight: 390,
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.035)',
                      boxShadow: '0 12px 40px 0 rgba(44,62,80,0.18)',
                      background: 'rgba(255,255,255,0.98)'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="170"
                      image={study.image}
                      alt={study.title}
                      sx={{
                        objectFit: 'cover',
                        filter: 'brightness(0.97) saturate(1.08)',
                        transition: 'filter 0.3s',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        minHeight: 170
                      }}
                    />
                    <Chip
                      label={study.tag}
                      color="primary"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        fontWeight: 600,
                        letterSpacing: 1,
                        bgcolor: 'primary.main',
                        color: '#fff',
                        boxShadow: '0 2px 8px 0 rgba(25,118,210,0.10)'
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      {iconMap[study.tag] || <Insights color="primary" sx={{ fontSize: 32 }} />}
                      <Typography variant="subtitle2" sx={{ ml: 1, fontWeight: 600, color: 'primary.main', fontFamily: 'Montserrat, Arial' }}>
                        {study.tag}
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontFamily: 'Montserrat, Arial', color: '#22223b', minHeight: 56 }}>
                      {study.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#374151', mb: 2, fontFamily: 'Inter, Arial', minHeight: 64 }}>
                      {study.summary}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        mt: 'auto',
                        borderRadius: 2,
                        fontWeight: 600,
                        fontFamily: 'Montserrat, Arial',
                        boxShadow: '0 2px 8px 0 rgba(25,118,210,0.10)',
                        textTransform: 'none',
                        fontSize: '1rem'
                      }}
                      fullWidth
                      onClick={() => navigate('/general', { state: { study } })}
                    >
                      Read Full Study
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                color="primary"
                size="large"
                sx={{
                  '& .MuiPaginationItem-root': {
                    borderRadius: 2,
                    fontWeight: 600,
                    fontFamily: 'Montserrat, Arial'
                  }
                }}
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default CaseStudy;