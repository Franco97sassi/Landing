import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid  } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {   Slide } from "react-awesome-reveal";

import miembro1 from "../../assets/miembro1.png";
import miembro2 from "../../assets/miembro2.png";
import miembro3 from "../../assets/miembro3.png";
import miembro4 from "../../assets/miembro4.png";
import miembro5 from "../../assets/miembro5.png";
import miembro6 from "../../assets/miembro6.png";
import miembro7 from "../../assets/miembro7.png";
import miembro8 from "../../assets/miembro8.png";
import miembro9 from "../../assets/miembro9.png";
import miembro10 from "../../assets/miembro10.png";
import Servicios from '../Servicios';
  const Nosotros = () => {
  const projectImages = [
    { imageUrl: miembro1, profesion: "CEO", nombre: "Mario Eduardo Diaz" },
    { imageUrl: miembro2, profesion: "QA and Fullstack Developer", nombre: "Luis Luna" },
    { imageUrl: miembro3, profesion: "Sr. Fullstack Developer", nombre: "Facundo Moreyra" },
    { imageUrl: miembro4, profesion: "Jr. Fullstack Developer", nombre: "Santiago Mercado" },
    { imageUrl: miembro5, profesion: "Jr. Fullstack Developer", nombre: "Franco Sassi" },
    { imageUrl: miembro6, profesion: "Jr. Fullstack Developer", nombre: "Alejandro Bardabid" },
    { imageUrl: miembro7, profesion: "UX/UI Designer", nombre: "Antonella Olearo" },
    { imageUrl: miembro8, profesion: "Intern", nombre: "Jim" },
    { imageUrl: miembro9, profesion: "Community Manager", nombre: "Mariana" },
    { imageUrl: miembro10, profesion: "Sales Manager", nombre: "Leo" },
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
    <div>
      <Servicios/> 
      
      <Box  sx={{  background: 'linear-gradient(to top, #333333, black)' }} >
       
      <Slide direction="left" triggerOnce={false} in={inView}> 

        <Typography  style={{fontWeight: 700,color: 'white', fontFamily: "'Oswald', sans-serif" }} variant="h2" sx={{ display: "flex", justifyContent: "center", paddingTop: "62px",paddingBottom: "62px" }}>
          Sobre Nosotros
        </Typography></Slide>
       
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
      marginTop: "-200px"
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
 spacing={10}
 sx={{ background: 'transparent', padding: '20px' }}  
>              {chunk.map((image, subIndex) => (
                <Grid item key={subIndex}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',marginTop:"50px",
                      width: "300px",
                      height: "300px",
                      borderRadius: "50%",
                      transition: 'transform 0.3s',
                      '&:hover': {
                        opacity: [0.9, 0.8, 0.7],
                        transform: 'scale(1.1)',
                      },
                      marginLeft: '10px',
                    }}
                  >

                    <img
                      src={image.imageUrl}
                      alt={`Miembro ${index * chunkSize + subIndex + 1}`}
                      style={{ width: '152.8px', height: '156.99px' }}
                    />  
                    <Typography fontSize="18px" sx={{ fontFamily: "'Oswald', sans-serif" ,color: 'white', marginTop: '10px' }}>
                      {image.profesion}
                    </Typography>
                    <Typography fontSize="18px" sx={{fontFamily: "'Oswald', sans-serif" , color: 'white'  }}>
                      {image.nombre}
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