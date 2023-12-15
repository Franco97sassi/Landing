// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import logo from '../../assets/fondopnga.png';
// import "./index.css";
// import 'typeface-roboto';
// import 'typeface-mulish';
// import { useMediaQuery } from '@mui/material';

// const pages = ['Inicio', 'Proyectos', 'Servicios', 'Sobre Nosotros'];

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();
//   const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 0) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleServicesClick = () => {
//     navigate('/nosotros');
//     handleCloseNavMenu();
//   };

//   const handleProjectsClick = () => {
//     const section = document.getElementById('proyectos');
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//     handleCloseNavMenu();
//   };

//   const handleAboutUsClick = () => {
//     if (window.location.pathname !== '/nosotros') {
//       navigate('/nosotros');
//     } else {
//       const section = document.getElementById('nosotros');
//       if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//     handleCloseNavMenu();
//   };

//   const linkTextStyle = {
//     textDecoration: 'none',
//     color: scrolled ? 'black' :isNonMobileScreens? 'white':"black",
//     fontFamily: "'Poppins', sans-serif",
//     textTransform: "none",
//     fontSize: "1rem",
//     fontWeight: 600,
//   };

//   return (
//     <AppBar
//       position="sticky"
//       style={{
//         background: scrolled ? 'white' : 'black',
//         color: scrolled ? 'black' : 'white',
//         height: '100px',
//         transition: 'background-color 0.3s'
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
           
//           {/* Mobile */}

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="cuenta del usuario actual"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={(event) => setAnchorElNav(event.currentTarget)}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>

//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={
//                   page === 'Servicios' 
//                   ? handleServicesClick 
//                   : page === 'Proyectos' 
//                   ? handleProjectsClick 
//                   : page === 'Sobre Nosotros' 
//                   ? handleAboutUsClick 
//                   : handleCloseNavMenu
//                 }>
//                   {/* <Typography textAlign="center" style={linkTextStyle}>
//                     {page}
//                   </Typography> */}
//                   <ScrollLink
//                   to={page.toLowerCase()}
//                   spy={true}
//                   smooth={true}
//                   offset={0}
//                   duration={10}
//                   style={linkTextStyle}
//                 >
//                   {page}
//                 </ScrollLink>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//             <Box sx={{ paddingLeft: '28px' }}>
//               <img src={logo} alt="Logo" style={{ width: '110px', height: '100px', cursor: 'pointer' }} />
//             </Box>
//           </a>

//           {/* Desktop */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={
//                   page === 'Servicios' 
//                   ? handleServicesClick 
//                   : page === 'Proyectos' 
//                   ? handleProjectsClick 
//                   : page === 'Sobre Nosotros' 
//                   ? handleAboutUsClick 
//                   : handleCloseNavMenu
//                 }
//                 sx={{
//                   my: 2,
//                   color: scrolled ? 'black' : 'white',
//                   display: 'block',
//                   textTransform: 'none',
//                 }}
//               >
//                 <ScrollLink
//                   to={page.toLowerCase()}
//                   spy={true}
//                   smooth={true}
//                   offset={0}
//                   duration={10}
//                   style={linkTextStyle}
//                 >
//                   {page}
//                 </ScrollLink>
//               </Button>
//             ))}
//           </Box>
//           {/* Desktop */}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Navbar;















































import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../../assets/fondopnga.png';
import { Drawer, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [targetSection, setTargetSection] = useState(null);
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const [anchorElNav, setAnchorElNav] = useState(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     if (offset > 0) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
   const handleCloseNavMenu = () => {
     setAnchorElNav(null);
  };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setTargetSection(null); // Resetear después de hacer scroll
      }
    }
  }, [targetSection]);

  const handleNavigateAndScroll = (e, path, sectionId) => {
    e.preventDefault();
    setTargetSection(sectionId);
    navigate(path);
  };
  const linkTextStyle = {
    textDecoration: 'none',
    color: scrolled ? 'black' :isNonMobileScreens? 'white':"black",
    fontFamily: "'Poppins', sans-serif",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 600,
  };
  const linkTextStyle1 = {
    textDecoration: 'none',
    color: scrolled ? 'black' :isNonMobileScreens? 'white':"black",
    fontFamily: "'Poppins', sans-serif",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 600,
    marginBottom:"1rem"
  };
  return (
    <AppBar
      position="sticky"
      style={{
        background: scrolled ? 'white' : 'black',
        color: scrolled ? 'black' : 'white',
        height: '100px',
        transition: 'background-color 0.3s'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile (si lo necesitas) */}
                   <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="cuenta del usuario actual"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => setAnchorElNav(event.currentTarget)}
              color="inherit"
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
                display: { xs: 'block', md: 'none' }, width: '100%',
              }}
            >
               
               <Box
    sx={{
      width: '100%', // Asegura que el Box interior también tenga el ancho completo
      backgroundColor: "white",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '3rem',
      padding: '1rem', // Añade algo de relleno si es necesario
    }}
  >
 
 <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-between'
                    gap='3rem'

                    alignItems='center'>              {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>   */}
            <NavLink style={linkTextStyle1} to="/" onClick={(e) => handleNavigateAndScroll(e, '/', 'landing')}>Inicio</NavLink>
            <NavLink style={linkTextStyle1} to="/" onClick={(e) => handleNavigateAndScroll(e, '/', 'proyectos')}>Proyectos</NavLink>
            <NavLink style={linkTextStyle1} to="/nosotros" onClick={(e) => handleNavigateAndScroll(e, '/nosotros', 'servicios')}>Servicios</NavLink>
            <NavLink  style={linkTextStyle1} to="/nosotros" onClick={(e) => handleNavigateAndScroll(e, '/nosotros', 'nosotros')}>Sobre Nosotros</NavLink>
            </Box>  
            </Box> 
            </Menu> 
          </Box>
          {/* ... Código para la versión móvil ... */}
          
          {/* ... Código para la versión móvil ... */}

          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ paddingLeft: '28px' }}>
              <img src={logo} alt="Logo" style={{ width: '110px', height: '100px', cursor: 'pointer' }} />
            </Box>
          </a>

          {/* Enlaces para Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end',gap:"10px" }}>
            <NavLink style={linkTextStyle} to="/" onClick={(e) => handleNavigateAndScroll(e, '/', 'landing')}>Inicio</NavLink>
            <NavLink style={linkTextStyle} to="/" onClick={(e) => handleNavigateAndScroll(e, '/', 'proyectos')}>Proyectos</NavLink>
            <NavLink style={linkTextStyle} to="/nosotros" onClick={(e) => handleNavigateAndScroll(e, '/nosotros', 'servicios')}>Servicios</NavLink>
            <NavLink style={linkTextStyle} to="/nosotros" onClick={(e) => handleNavigateAndScroll(e, '/nosotros', 'nosotros')}>Sobre Nosotros</NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

