import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
// Importaciones de tus imágenes...
import empresa1 from '../../assets/1.png';
import empresa2 from '../../assets/2.png';
import empresa5 from '../../assets/3.png';
import empresa4 from '../../assets/4.png';
import empresa3 from '../../assets/5.png';
import empresa6 from '../../assets/6.png';
import empresa10 from '../../assets/7.png';
// import empresa8 from '../../assets/client9.png';
// import empresa9 from '../../assets/client1.png';
// import empresa7 from '../../assets/client1.png';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"
const Clientes = () => {
  // Configuraciones para el carrusel
  const settings = {

    // dots: true, // Muestra puntos de navegación en la parte inferior
    infinite: true, // Infinito loop
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Muestra 3 slides a la vez
    slidesToScroll: 3, // Desplaza 3 slides a la vez
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Muestra 1 slide en pantallas muy pequeñas
          slidesToScroll: 1
        }
      }
    ]
  }; 
  const images = [ empresa2, empresa3, empresa4, empresa5, empresa6, empresa10];
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
 return (
    <div style={{ overflowX: 'hidden' }}>
      <Box sx={{
        width: '100%',
        py: 8,
        background: '#333333',
        color: 'white',
        textAlign: 'center',
         
      }}>
        <Slide direction="left" triggerOnce={false}>
          <Typography variant={isNonMobileScreens ? "h2" : "h3"} mb={5} fontWeight="700" fontFamily="Oswald, sans-serif">
            Nuestros Clientes
          </Typography>
        </Slide>

        <Box sx={{
          width: isNonMobileScreens ? '75%' : "100%",
          py: 12,
          px: { xs: 6, sm: 10 },
          mx: 'auto'
        }}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box key={index} sx={{
                padding:2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'transform 0.3s ease-in-out',
                marginTop: '20px',
                ':hover': {
                  transform: 'scale(1.05)'
                }
              }}>
                <img src={image} alt={`Empresa ${index + 1}`} style={{
                  maxWidth: '100%',
                  maxHeight: '200px', // Ajusta este valor según sea necesario
                  objectFit: 'contain',
                  borderRadius: "25px",
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'                 
                }} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </div>
  );
};

export default Clientes;