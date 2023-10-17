import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const sections = ['#servicios', '#proyectos'];
const pages = ['Inicio', 'Proyectos', 'Servicios'];
const settings = ['Perfil', 'Cuenta', 'Panel de Control', 'Cerrar Sesión'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

    if (location.pathname === '/nosotros') {
      navigate('/');
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleInicioClick = () => {
    navigate('/');
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', height: '100px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
  <Box sx={{ paddingLeft: '28px' }}>
    <img src={logo} alt="Logo" style={{ width: '110px', height: '100px', cursor: 'pointer' }} />
  </Box>
</a>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="cuenta del usuario actual"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => {
                const formattedPage = page.charAt(0).toUpperCase() + page.slice(1).toLowerCase();

                return (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {page === 'Servicios' || page === 'Proyectos' ? (
                      <ScrollLink
                        to={page.toLowerCase()}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={10}
                        style={{
                          textDecoration: 'none',
                           cursor: 'pointer',
                        }}
                      >
                        {formattedPage}
                      </ScrollLink>
                    ) : (
<Typography textAlign="center">
                        {formattedPage}
                      </Typography>
                    )}
                  </MenuItem>
                );
              })}

              <MenuItem key="Sobre Nosotros" onClick={handleCloseNavMenu}>
                <ScrollLink
                  to="nosotros"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={10}
                  style={{
                    textDecoration: 'none',
                     cursor: 'pointer',
                  }}
                >
                  Sobre Nosotros
                </ScrollLink>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={handleInicioClick}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
               letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'pointer',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => {
              const formattedPage = page.charAt(0).toUpperCase() + page.slice(1).toLowerCase();

              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    textTransform: 'none', // Evita la transformación de texto a minúsculas
                    // fontFamily: "Inter, sans-serif",
                   }}
                >
                  {page === 'Servicios' || page === 'Proyectos' ? (
                    <ScrollLink
                      to={page.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={10}
                      style={{
                        textDecoration: 'none',fontSize:"32px"
                      }}
                    >
                      {formattedPage}
                    </ScrollLink>
                  ) : (
                    <ScrollLink
                      to={page.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={10}
                      style={{
                        textDecoration: 'none',
                        fontSize:"32px"
                      }}
                    >
                      {formattedPage}
                    </ScrollLink>
                  )}
                </Button>
              );
            })}
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block', textTransform: 'none' }}
            >
              <NavLink to="/nosotros" style={{ textDecoration: 'none' }}>
                <Typography style={{  fontFamily: "'Oswald', sans-serif" 
 }} fontSize="32px" paddingTop="10px" color="rgba(30, 30, 30, 1)" gutterBottom>
                  Sobre Nosotros
                </Typography>
              </NavLink>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <NavLink to="/nosotros" style={{ textDecoration: 'none', color: 'inherit',fontFamily: "'Oswald', sans-serif" , fontWeight: "700"  }}>
                  <Typography textAlign="center">Sobre Nosotros</Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
