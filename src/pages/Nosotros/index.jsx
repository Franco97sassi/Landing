import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery  } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {   Slide } from "react-awesome-reveal";

import miembro1 from "../../assets/ba.jpg";
import miembro2 from "../../assets/miembro2.png";
import miembro3 from "../../assets/miembro3.png";
import miembro4 from "../../assets/miembro4.png";
import miembro5 from "../../assets/miembro5.png";
import miembro6 from "../../assets/miembro6.png";
import miembro7 from "../../assets/luca1.png";
import miembro8 from "../../assets/miembro8.png";
import miembro9 from "../../assets/miembro9.png";
import miembro20 from "../../assets/miembro20.png";
import miembro11 from "../../assets/miembro11.jpeg";
 import miembro12 from "../../assets/zyanya.jpeg";

import Servicios from '../Servicios';
  const Nosotros = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const projectImages = [
    { imageUrl: miembro1, profesion: "CEO", nombre: "Mario Eduardo Diaz" },
    { imageUrl: miembro2, profesion: "QA and Fullstack Developer", nombre: "Luis Luna" },
    { imageUrl: miembro3, profesion: "Sr. Fullstack Developer", nombre: "Facundo Moreyra" },
    { imageUrl: miembro4, profesion: "Jr. Fullstack Developer", nombre: "Santiago Mercado" },
    { imageUrl: miembro5, profesion: "Jr. Fullstack Developer", nombre: "Franco Sassi" },
    { imageUrl: miembro6, profesion: "Jr. Fullstack Developer", nombre: "Alejandro Bardabid" },
    { imageUrl: miembro7, profesion: "Jr. Python Developer", nombre: "Luca Cussino" },
     { imageUrl: miembro12, profesion: "Community Manager", nombre: "Zyanya Zaldaña" },
        { imageUrl: miembro11, profesion: "UX-UI Designer", nombre: "Christian Morales" },


    // Agrega las URL de las imágenes restantes aquí
  ];

  const chunkSize = 3;
  const [currentChunk, setCurrentChunk] = useState(0);
  const [inView, setInView] = useState(false);

   
  const chunkedImages = projectImages.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div id="nosotros">
      <Box sx={{ background: 'white' }}>
        <Slide direction="left" triggerOnce={false} in={inView}>
          <Typography variant="h2" sx={{ display: "flex", justifyContent: "center", paddingTop: "62px", paddingBottom: "62px", fontWeight: 700, fontFamily: "'Oswald', sans-serif", color: 'black' }}>
            Nuestro Equipo
          </Typography>
        </Slide>

        <Carousel
          autoPlay={true}
          interval={3000}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible
          navButtonsProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              color: 'white',
              // Ajusta estos márgenes para cambiar la distancia de las flechas a las imágenes
              marginRight: '30px',
              marginLeft: '30px',
            },
          }}
          NextIcon={<KeyboardArrowRightIcon />}
          PrevIcon={<KeyboardArrowLeftIcon />}
          index={currentChunk}
          onChange={(index, active) => setCurrentChunk(index)}
        >
          {chunkedImages.map((chunk, index) => (
            <Grid
              container
              key={index}
              justifyContent="center"
              alignItems="center"
              spacing={isNonMobileScreens?"10":"0"}
              sx={{ padding: '20px' }}
            >
              {chunk.map((item, subIndex) => (
                <Grid item key={subIndex}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 300,
                      height: 300,
                      borderRadius: '50%',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        opacity: [0.9, 0.8, 0.7],
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={`Miembro ${index * chunkSize + subIndex + 1}`}
                      style={{ width: isNonMobileScreens?'152.8px':"125px", height:isNonMobileScreens?'156.99px':"125px", borderRadius: '50%' }}
                    />
                    <Typography fontSize="18px" sx={{ fontFamily: "'Oswald', sans-serif", color: 'black', marginTop: '10px' }}>
                      {item.profesion}
                    </Typography>
                    <Typography fontSize="18px" sx={{ fontFamily: "'Oswald', sans-serif", color: 'black' }}>
                      {item.nombre}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>
      </Box>
    </div>
  );
}

export default Nosotros;