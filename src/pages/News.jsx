import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Box,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
  Paper
} from '@mui/material';
import {
  Search,
  Whatshot,
  Business,
  SportsEsports,
  Science,
  HealthAndSafety,
  MoreVert,
  BookmarkBorder,
  Share,
  TrendingUp
} from '@mui/icons-material';

const News = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample news data
  const trendingNews = [
    {
      id: 1,
      title: 'Global Tech Conference Announces Revolutionary AI Breakthroughs',
      summary: 'Researchers unveil new AI models that outperform human capabilities in several benchmark tests.',
      category: 'Technology',
      date: '2 hours ago',
      image: 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg',
      author: 'Tech Insights',
      trending: true,
      bookmarked: false
    },
    {
      id: 2,
      title: 'Stock Markets Reach All-Time High Amid Economic Recovery',
      summary: 'Major indices surge as vaccination rates improve and consumer spending rebounds globally.',
      category: 'Business',
      date: '5 hours ago',
      image: 'https://source.unsplash.com/random/600x400/?stock',
      author: 'Financial Times',
      trending: true,
      bookmarked: false
    },
    {
      id: 3,
      title: 'New Study Reveals Benefits of Mediterranean Diet',
      summary: 'Long-term research confirms significant health improvements for followers of Mediterranean eating patterns.',
      category: 'Health',
      date: '1 day ago',
      image: 'https://source.unsplash.com/random/600x400/?food',
      author: 'Health Journal',
      trending: true,
      bookmarked: false
    },
    {
      id: 4,
      title: 'SpaceX Launches Next Generation of Starlink Satellites',
      summary: 'The company successfully deployed 60 new satellites as part of its global internet coverage plan.',
      category: 'Science',
      date: '1 day ago',
      image: 'https://source.unsplash.com/random/600x400/?space',
      author: 'Space News',
      trending: true,
      bookmarked: false
    },
    {
      id: 5,
      title: 'Olympic Committee Announces Host City for 2032 Games',
      summary: 'After extensive evaluation, the IOC has selected the next destination for the Summer Olympics.',
      category: 'Sports',
      date: '2 days ago',
      image: 'https://source.unsplash.com/random/600x400/?olympics',
      author: 'Sports Daily',
      trending: true,
      bookmarked: false
    },
    {
      id: 6,
      title: 'Renewable Energy Investments Surpass Fossil Fuels for First Time',
      summary: 'Global shift to clean energy accelerates as investment patterns show historic change.',
      category: 'Environment',
      date: '3 days ago',
      image: 'https://source.unsplash.com/random/600x400/?energy',
      author: 'Green Planet',
      trending: false,
      bookmarked: false
    }
  ];

  const categories = [
    { label: 'All', icon: <Whatshot /> },
    { label: 'Crypto', icon: <Business /> },
    { label: 'Bitcoin', icon: <SportsEsports /> },
    { label: 'Blockchain', icon: <Science /> },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleBookmark = (id) => {
    // In a real app, you would update state or make an API call here
    console.log(`Toggled bookmark for article ${id}`);
  };

  const filteredNews = trendingNews.filter(news => {
    // Filter by search query
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         news.summary.toLowerCase().includes(searchQuery.toLowerCase());
    // Filter by category if not "All"
    const matchesCategory = activeTab === 0 || 
                           news.category.toLowerCase() === categories[activeTab].label.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Trending carousel (show top 3 trending)
  const trendingCarousel = trendingNews.filter(n => n.trending).slice(0, 3);

  return (
    <Box sx={{ bgcolor: '#f6f8fa', minHeight: '100vh' }}>
      {/* Hero Header */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #1976d2 0%, #00c6fb 100%)',
          color: '#fff',
          py: { xs: 5, md: 8 },
          mb: 3,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, fontFamily: 'Montserrat, Arial' }}>
            NewsTrends
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontFamily: 'Inter, Arial' }}>
            The latest in crypto, business, science, and more—curated for you.
          </Typography>
          {/* <Box sx={{ mt: 3, maxWidth: 400 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search news..."
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: '#1976d2' }} />
                  </InputAdornment>
                ),
                sx: { bgcolor: '#fff', borderRadius: 2 }
              }}
            />
          </Box> */}
        </Container>
      </Box>

      {/* Category Tabs */}
      <Container maxWidth="lg">
        <Paper elevation={2} sx={{ mb: 4, borderRadius: 3 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant={isMobile ? 'scrollable' : 'standard'}
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              px: 2,
              pt: 1,
              '& .MuiTab-root': { fontWeight: 600, fontFamily: 'Inter, Arial' }
            }}
            TabIndicatorProps={{
              style: { background: 'linear-gradient(90deg, #1976d2 0%, #00c6fb 100%)', height: 4, borderRadius: 2 }
            }}
          >
            {categories.map((category, index) => (
              <Tab 
                key={index} 
                label={isMobile ? null : category.label}
                icon={category.icon}
                iconPosition={isMobile ? 'top' : 'start'}
                sx={{ minWidth: 72 }}
              />
            ))}
          </Tabs>
        </Paper>

        {/* Trending Carousel */}
        <Box sx={{ mb: 5 }}>
          {/* <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mb: 2, letterSpacing: 1 }}>
            <TrendingUp sx={{ mr: 1, verticalAlign: 'middle' }} />
            TRENDING NOW
          </Typography> */}
          <Grid container spacing={3}>
            {trendingCarousel.map(news => (
              <Grid item xs={12} md={4} key={news.id}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: 3,
                    background: 'linear-gradient(120deg, #e3f0ff 0%, #f8fafc 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={news.image}
                    alt={news.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  {/* <Chip
                    label="TRENDING"
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      zIndex: 2,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  /> */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {news.category} • {news.date}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.summary}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ width: 28, height: 28, mr: 1, bgcolor: 'primary.main', color: '#fff', fontWeight: 700 }}>
                        {news.author.charAt(0)}
                      </Avatar>
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>{news.author}</Typography>
                    </Box>
                    <Box>
                      <IconButton size="small" onClick={() => toggleBookmark(news.id)}>
                        <BookmarkBorder fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <Share fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <MoreVert fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* News Grid */}
        <Grid container spacing={4}>
          {filteredNews.map((news) => (
            <Grid item xs={12} sm={6} md={4} key={news.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  boxShadow: 2,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-6px) scale(1.02)',
                    boxShadow: 6,
                  },
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#fff',
                }}
              >
                {news.trending && (
                  <Chip
                    label="TRENDING"
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      zIndex: 2,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  />
                )}
                <CardMedia
                  component="img"
                  height="160"
                  image={news.image}
                  alt={news.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="body2" color="text.secondary">
                    {news.category} • {news.date}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 700 }}>
                    {news.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.summary}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 28, height: 28, mr: 1, bgcolor: 'primary.main', color: '#fff', fontWeight: 700 }}>
                      {news.author.charAt(0)}
                    </Avatar>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{news.author}</Typography>
                  </Box>
                  <Box>
                    <IconButton size="small" onClick={() => toggleBookmark(news.id)}>
                      <BookmarkBorder fontSize="small" />
                    </IconButton>
                    <IconButton size="small">
                      <Share fontSize="small" />
                    </IconButton>
                    <IconButton size="small">
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredNews.length === 0 && (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
            textAlign: 'center'
          }}>
            <Search sx={{ fontSize: 48, color: 'text.disabled', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              No articles found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search or filter criteria
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default News;