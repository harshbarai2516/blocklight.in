import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Box,
  useMediaQuery,
  useTheme,
  Divider,
  Badge,
  Slide,
  Paper
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search,
  Home,
  TrendingUp,
  Article,
  Book,
  AccountCircle,
  Notifications
} from '@mui/icons-material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LinkIcon from '@mui/icons-material/Link';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { useNavigate } from 'react-router-dom';

const Navibar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [learnAnchorEl, setLearnAnchorEl] = useState(null);
  const [mobileLearnAnchorEl, setMobileLearnAnchorEl] = useState(null);
  const [marketAnchorEl, setMarketAnchorEl] = useState(null);
  const [mobileMarketAnchorEl, setMobileMarketAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLearnMenuOpen = Boolean(learnAnchorEl);
  const isMobileLearnMenuOpen = Boolean(mobileLearnAnchorEl);
  const isMarketMenuOpen = Boolean(marketAnchorEl);
  const isMobileMarketMenuOpen = Boolean(mobileMarketAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLearnMenuOpen = (event) => {
    setLearnAnchorEl(event.currentTarget);
  };

  const handleLearnMenuClose = () => {
    setLearnAnchorEl(null);
  };

  const handleMobileLearnMenuOpen = (event) => {
    setMobileLearnAnchorEl(event.currentTarget);
  };

  const handleMobileLearnMenuClose = () => {
    setMobileLearnAnchorEl(null);
  };

  const handleMarketMenuOpen = (event) => setMarketAnchorEl(event.currentTarget);
  const handleMarketMenuClose = () => setMarketAnchorEl(null);

  const handleMobileMarketMenuOpen = (event) => {
    setMobileMarketAnchorEl(event.currentTarget);
  };

  const handleMobileMarketMenuClose = () => {
    setMobileMarketAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        sx: {
          borderRadius: 3,
          minWidth: 220,
          boxShadow: '0 8px 32px 0 rgba(44,62,80,0.10)'
        }
      }}
    >
      <MenuItem onClick={() => { navigate('/'); handleMobileMenuClose(); }}>
        <IconButton size="large" color="primary">
          <Home />
        </IconButton>
        <Typography sx={{ ml: 1, fontWeight: 600 }}>Home</Typography>
      </MenuItem>
      <MenuItem onClick={() => { navigate('/casestudy'); handleMobileMenuClose(); }}>
        <IconButton size="large" color="primary">
          <Badge badgeContent={4} color="error">
            <Article />
          </Badge>
        </IconButton>
        <Typography sx={{ ml: 1, fontWeight: 600 }}>Case Studies</Typography>
      </MenuItem>
      <MenuItem onClick={handleMobileMarketMenuOpen}>
        <IconButton size="large" color="primary">
          <TrendingUp />
        </IconButton>
        <Typography sx={{ ml: 1, fontWeight: 600 }}>Market Analysis</Typography>
      </MenuItem>
      <Menu
        id="mobile-market-menu"
        anchorEl={mobileMarketAnchorEl}
        open={isMobileMarketMenuOpen}
        onClose={handleMobileMarketMenuClose}
        PaperProps={{
          sx: {
            borderRadius: 3,
            minWidth: 200,
            boxShadow: '0 8px 32px 0 rgba(44,62,80,0.10)'
          }
        }}
      >
        <MenuItem onClick={() => { handleMobileMarketMenuClose(); handleMobileMenuClose(); navigate('/daily'); }}>
          <ShowChartIcon sx={{ mr: 1, color: 'primary.main' }} /> Daily Analysis
        </MenuItem>
        <MenuItem onClick={() => { handleMobileMarketMenuClose(); handleMobileMenuClose(); navigate('/weekly'); }}>
          <TrendingUp sx={{ mr: 1, color: 'secondary.main' }} /> Weekly Analysis
        </MenuItem>
        <MenuItem onClick={() => { handleMobileMarketMenuClose(); handleMobileMenuClose(); navigate('/longterm'); }}>
          <Article sx={{ mr: 1, color: 'success.main' }} /> Longterm Analysis
        </MenuItem>
      </Menu>
      <MenuItem onClick={handleMobileLearnMenuOpen}>
        <IconButton size="large" color="primary">
          <LightbulbIcon />
        </IconButton>
        <Typography sx={{ ml: 1, fontWeight: 600 }}>Learn</Typography>
      </MenuItem>
      <Menu
        id="mobile-learn-menu"
        anchorEl={mobileLearnAnchorEl}
        open={isMobileLearnMenuOpen}
        onClose={handleMobileLearnMenuClose}
        PaperProps={{
          sx: {
            borderRadius: 3,
            minWidth: 200,
            boxShadow: '0 8px 32px 0 rgba(44,62,80,0.10)'
          }
        }}
      >
        <MenuItem onClick={() => { handleMobileLearnMenuClose(); handleMobileMenuClose(); navigate('/crypto101'); }}>
          <MenuBookIcon sx={{ mr: 1, color: 'primary.main' }} /> Crypto 101
        </MenuItem>
        <MenuItem onClick={() => { handleMobileLearnMenuClose(); handleMobileMenuClose(); navigate('/blockchain101'); }}>
          <LinkIcon sx={{ mr: 1, color: 'secondary.main' }} /> Blockchain 101
        </MenuItem>
        <MenuItem onClick={() => { handleMobileLearnMenuClose(); handleMobileMenuClose(); navigate('/trading101'); }}>
          <ShowChartIcon sx={{ mr: 1, color: 'success.main' }} /> Trading 101
        </MenuItem>
      </Menu>
      <MenuItem onClick={() => { navigate('/blog'); handleMobileMenuClose(); }}>
        <IconButton size="large" color="primary">
          <Book />
        </IconButton>
        <Typography sx={{ ml: 1, fontWeight: 600 }}>Blogs</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Slide in direction="down" timeout={600}>
        <AppBar
          position="sticky"
          color="default"
          elevation={0}
          sx={{
            borderBottom: `1.5px solid ${theme.palette.divider}`,
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 16px 0 rgba(44,62,80,0.06)'
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ minHeight: 72 }}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  mr: 3,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 900,
                  letterSpacing: 2,
                  color: theme.palette.primary.main,
                  fontFamily: 'Montserrat, Arial',
                  textShadow: '0 2px 8px rgba(25,118,210,0.06)'
                }}
              >
                Blocklight.in
              </Typography>

              {isMobile && (
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="primary"
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              )}

              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                  fontWeight: 900,
                  letterSpacing: 2,
                  color: theme.palette.primary.main,
                  fontFamily: 'Montserrat, Arial',
                  textShadow: '0 2px 8px rgba(25,118,210,0.06)'
                }}
              >
                Blocklight.in
              </Typography>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  ml: 4,
                  gap: 1
                }}
              >
                <Button
                  onClick={() => navigate('/')}
                  startIcon={<Home />}
                  sx={{
                    my: 2,
                    color: 'text.primary',
                    fontWeight: 600,
                    fontFamily: 'Montserrat, Arial',
                    px: 2.5,
                    borderRadius: 2,
                    letterSpacing: 1,
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      background: 'rgba(25,118,210,0.07)'
                    }
                  }}
                >
                  Home
                </Button>
                <Button
                  startIcon={<TrendingUp />}
                  sx={{
                    my: 2,
                    color: 'text.primary',
                    fontWeight: 600,
                    fontFamily: 'Montserrat, Arial',
                    px: 2.5,
                    borderRadius: 2,
                    letterSpacing: 1,
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      background: 'rgba(25,118,210,0.07)'
                    }
                  }}
                  aria-controls={isMarketMenuOpen ? 'market-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={isMarketMenuOpen ? 'true' : undefined}
                  onClick={handleMarketMenuOpen}
                >
                  Market Analysis
                </Button>
                <Menu
                  id="market-menu"
                  anchorEl={marketAnchorEl}
                  open={isMarketMenuOpen}
                  onClose={handleMarketMenuClose}
                  PaperProps={{
                    sx: {
                      borderRadius: 3,
                      minWidth: 220,
                      boxShadow: '0 8px 32px 0 rgba(44,62,80,0.10)'
                    }
                  }}
                >
                  <MenuItem onClick={() => { handleMarketMenuClose(); navigate('/daily'); }}>
                    <ShowChartIcon sx={{ mr: 1, color: 'primary.main' }} />
                    Daily Analysis
                  </MenuItem>
                  <MenuItem onClick={() => { handleMarketMenuClose(); navigate('/weekly'); }}>
                    <TrendingUp sx={{ mr: 1, color: 'secondary.main' }} />
                    Weekly Analysis
                  </MenuItem>
                  <MenuItem onClick={() => { handleMarketMenuClose(); navigate('/longterm'); }}>
                    <Article sx={{ mr: 1, color: 'success.main' }} />
                    Longterm Analysis
                  </MenuItem>
                </Menu>
                <Button
                  onClick={() => navigate('/casestudy')}
                  startIcon={<Article />}
                  sx={{
                    my: 2,
                    color: 'text.primary',
                    fontWeight: 600,
                    fontFamily: 'Montserrat, Arial',
                    px: 2.5,
                    borderRadius: 2,
                    letterSpacing: 1,
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      background: 'rgba(25,118,210,0.07)'
                    }
                  }}
                >
                  Case Studies
                </Button>
                <Button
                  startIcon={<LightbulbIcon />}
                  sx={{
                    my: 2,
                    color: 'text.primary',
                    fontWeight: 600,
                    fontFamily: 'Montserrat, Arial',
                    px: 2.5,
                    borderRadius: 2,
                    letterSpacing: 1,
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      background: 'rgba(25,118,210,0.07)'
                    }
                  }}
                  aria-controls={isLearnMenuOpen ? 'learn-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={isLearnMenuOpen ? 'true' : undefined}
                  onClick={handleLearnMenuOpen}
                >
                  Learn
                </Button>
                <Menu
                  id="learn-menu"
                  anchorEl={learnAnchorEl}
                  open={isLearnMenuOpen}
                  onClose={handleLearnMenuClose}
                  MenuListProps={{
                    'aria-labelledby': 'learn-button',
                  }}
                  PaperProps={{
                    sx: {
                      borderRadius: 3,
                      minWidth: 200,
                      boxShadow: '0 8px 32px 0 rgba(44,62,80,0.10)'
                    }
                  }}
                >
                  <MenuItem onClick={() => { handleLearnMenuClose(); navigate('/crypto101'); }}>
                    <MenuBookIcon sx={{ mr: 1, color: 'primary.main' }} /> Crypto 101
                  </MenuItem>
                  <MenuItem onClick={() => { handleLearnMenuClose(); navigate('/blockchain101'); }}>
                    <LinkIcon sx={{ mr: 1, color: 'secondary.main' }} /> Blockchain 101
                  </MenuItem>
                  <MenuItem onClick={() => { handleLearnMenuClose(); navigate('/trading101'); }}>
                    <ShowChartIcon sx={{ mr: 1, color: 'success.main' }} /> Trading 101
                  </MenuItem>
                </Menu>
                <Button
                  onClick={() => navigate('/blog')}
                  startIcon={<Book />}
                  sx={{
                    my: 2,
                    color: 'text.primary',
                    fontWeight: 600,
                    fontFamily: 'Montserrat, Arial',
                    px: 2.5,
                    borderRadius: 2,
                    letterSpacing: 1,
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      background: 'rgba(25,118,210,0.07)'
                    }
                  }}
                >
                  Blogs
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
      {renderMobileMenu}
    </Box>
  );
};

export default Navibar;