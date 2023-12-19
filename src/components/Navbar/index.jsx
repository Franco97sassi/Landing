import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, IconButton, Drawer, MenuItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/fondopnga.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [targetSection, setTargetSection] = useState('');
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionElement = document.getElementById(targetSection);
    if (sectionElement) sectionElement.scrollIntoView({ behavior: 'smooth' });
  }, [targetSection]);

  const handleNavLinkClick = (path, sectionId) => {
    navigate(path);
    setTargetSection(sectionId);
    setDrawerOpen(false);
  };
const handleDrawerToggle = () => {
  setDrawerOpen(!drawerOpen);
};
  const drawerContent = (
    <Box sx={{ width: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.85)', height: '100%', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center' }}>
      <MenuItem onClick={() => handleNavLinkClick('/', 'landing')}>Inicio</MenuItem>
      <MenuItem onClick={() => handleNavLinkClick('/', 'proyectos')}>Proyectos</MenuItem>
      <MenuItem onClick={() => handleNavLinkClick('/nosotros', 'servicios')}>Servicios</MenuItem>
      <MenuItem onClick={() => handleNavLinkClick('/nosotros', 'nosotros')}>Sobre Nosotros</MenuItem>
    </Box>
  );
  
  return (
    <AppBar position="sticky" sx={{ background: scrolled ? 'white' : 'black', color: scrolled ? 'black' : 'white', transition: 'background-color 0.3s', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box component="a" href="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ width: '110px', height: '100px' }} />
          </Box>
          <IconButton size="large" aria-label="menu" onClick={handleDrawerToggle} color="inherit" sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} sx={{ '& .MuiDrawer-paper': { bgcolor: 'black', color: 'red' } }}>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
    <IconButton onClick={handleDrawerToggle}>
      <CloseIcon sx={{ color: 'white' }} />
    </IconButton>
  </Box>
  {drawerContent}
</Drawer>
           
 <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end',gap:"1rem" }}>
  <NavLink to="/" onClick={() => handleNavLinkClick('/', 'landing')} style={{    fontFamily: "'Poppins', sans-serif",
 color: scrolled ? 'black' : 'white',  textDecoration: 'none' }}>Inicio</NavLink>
  <NavLink to="/" onClick={() => handleNavLinkClick('/', 'proyectos')} style={{     fontFamily: "'Poppins', sans-serif",
color: scrolled ? 'black' : 'white',  textDecoration: 'none' }}>Proyectos</NavLink>
  <NavLink to="/nosotros" onClick={() => handleNavLinkClick('/nosotros', 'servicios')} style={{     fontFamily: "'Poppins', sans-serif",
color: scrolled ? 'black' : 'white', textDecoration: 'none' }}>Servicios</NavLink>
  <NavLink to="/nosotros" onClick={() => handleNavLinkClick('/nosotros', 'nosotros')} style={{     fontFamily: "'Poppins', sans-serif",
color: scrolled ? 'black' : 'white',  textDecoration: 'none' }}>Sobre Nosotros</NavLink>
</Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
