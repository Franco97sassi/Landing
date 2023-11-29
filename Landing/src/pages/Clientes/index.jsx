import { Box, Typography, Grid } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
// Importaciones de tus imágenes...
import empresa1 from '../../assets/empresa1.jpg';
import empresa2 from '../../assets/logoCruzRoja.png';
import empresa5 from '../../assets/ewq.jpg';
import empresa4 from '../../assets/parkea.jpeg';
import empresa3 from '../../assets/cryptoLogo.png';
import empresa6 from '../../assets/qwe.jpg';
import empresa10 from '../../assets/gardenLogo.png';
import empresa8 from '../../assets/borderLogo.png';
import empresa9 from '../../assets/e.jpeg';
import empresa7 from '../../assets/wqe.jpg';
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

  const images = [ empresa2, empresa3, empresa4, empresa5, empresa6, empresa10, empresa8, empresa9, empresa7];

  return (
    <div>
      <Box sx={{
        width: '100%',
        py: 8,
        background: '#333333',
        color: 'white',
        textAlign: 'center'
      }}>
        <Slide direction="left" triggerOnce={false}>
          <Typography variant="h2" mb={5} fontWeight="700" fontFamily="Oswald, sans-serif">
            Nuestros Clientes
          </Typography></Slide>

        <Box sx={{
          width: '75%',
          py: 8,
          px: { xs: 2, sm: 10 }, // Responsivo: más padding en pantallas más grandes
          mx: 'auto', // Asegura que el Box esté centrado
        }}>
          <Slider {...settings}>
          {images.map((image, index) => (
  <Box key={index} sx={{
    padding: 2, // Espaciado interno
    display: 'flex',
    justifyContent: 'center', // Centrado horizontal
    alignItems: 'center', // Centrado vertical
    transition: 'transform 0.3s ease-in-out', // Transición suave
    marginTop: '20px', // Margen superior
    ':hover': {
      transform: 'scale(1.05)' // Efecto al pasar el mouse
    }
  }}>
    <img src={image} alt={`Empresa ${index + 1}`} style={{
      height: '150px', // Altura fija para todas las imágenes
      width: '100%', // El ancho se ajusta automáticamente para mantener las proporciones
      objectFit: 'contain', // Mantiene las proporciones de la imagen sin recortarla
      borderRadius: "25px",
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave                  
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