import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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

  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente grupo de imágenes
      setCurrentChunk((prevChunk) => (prevChunk + 1) % Math.ceil(projectImages.length / chunkSize));
    }, 3000); // Cambiar cada 3 segundos

    return () => {
      // Limpia el intervalo cuando el componente se desmonta
      clearInterval(interval);
    };
  }, []);

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
      <Box sx={{ backgroundColor: "white" }}>
        <Typography style={{ fontFamily: "'Oswald', sans-serif" }} variant="h4" sx={{ display: "flex", justifyContent: "center", paddingTop: "62px", marginBottom: "100px" }}>
          Sobre Nosotros
        </Typography>
        <Carousel
          autoPlay={false}
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
        >
          {chunkedImages.map((chunk, index) => (
            <Grid backgroundColor="white" container key={index} justifyContent="center" spacing={10}>
              {chunk.map((image, subIndex) => (
                <Grid item key={subIndex}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
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
                      style={{ width: '202.8px', height: '206.99px' }}
                    />
                    <Typography fontSize="18px" sx={{ fontFamily: "'Oswald', sans-serif" ,color: 'black', marginTop: '10px', fontWeight: 'bold' }}>
                      {image.profesion}
                    </Typography>
                    <Typography fontSize="18px" sx={{fontFamily: "'Oswald', sans-serif" , color: 'black', fontWeight: 'bold' }}>
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
