import { Box,  Divider,  Grid, List, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import gif3 from "../../assets/gif3.gif";
import gif4 from "../../assets/gif4.gif";
import gif5 from "../../assets/gif5.gif";
import gif6 from "../../assets/gif6.gif";
import gif7 from "../../assets/gif7.gif";
import gif8 from "../../assets/gif8.gif";
import gif9 from "../../assets/gif9.gif";
import gif10 from "../../assets/gif10.gif";
import tecno1 from "../../assets/tecno1.png";
import tecno2 from "../../assets/tecno2.png";
import tecno3 from "../../assets/tecno3.png";
import tecno4 from "../../assets/tecno4.png";
import tecno5 from "../../assets/tecno5.png";
import tecno6 from "../../assets/tecno6.png";
 import { styled } from '@mui/material/styles';
 
import js2 from "../../assets/js3.png";
import icono from "../../assets/icono.png";
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Servicios = () => {
  const projectImages = [
    { imageUrl: gif10, nombre: "Paginas Web" },
    { imageUrl: gif1, nombre: "Aplicaciones Moviles" },
    { imageUrl: gif2, nombre: "Inteligencia Artificial" },
    { imageUrl: gif3, nombre: "Ecommerce" },
    { imageUrl: gif4, nombre: "Web Scraping" },
    { imageUrl: gif5, nombre: "Control de Stock" },
    { imageUrl: gif6, nombre: "Bots Personalizados" },
    { imageUrl: gif7, nombre: "Mantenimiento" },
    { imageUrl: gif8, nombre: "Automatizacion de Procesos" },
    { imageUrl: gif9, nombre: "MarketPlace" },
    // Agrega las URL de las imágenes restantes aquí
  ];
  const projectImages2 = [
    { imageUrl: tecno1, nombre: "HTML" },
    { imageUrl: tecno2, nombre: "CSS" },
    { imageUrl: tecno3, nombre: "REACT JS" },
    { imageUrl: tecno4, nombre: "NODE JS" },
    { imageUrl: tecno5, nombre: "EXPRESS" },
    { imageUrl: tecno6, nombre: "MUI" },
    
    // Agrega las URL de las imágenes restantes aquí
  ];
   



  const chunkSize = 3;
  const chunkedImages2 = projectImages2.reduce((resultArray, item, index) => {
    const chunkIndex2 = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex2]) {
      resultArray[chunkIndex2] = [];
    }

    resultArray[chunkIndex2].push(item);

    return resultArray;
  }, []);
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
  const style = {
    width: '100%',
    maxWidth: 360,
   };

   const [isHovered, setIsHovered] = useState(null);

  return (
    <div id="servicios">
    <Typography style={{ fontFamily: "'Oswald', sans-serif"  }}  sx={{paddingTop:"150px", display: "flex", justifyContent: "center", paddingBottom: '100px', fontSize:"44px" }}>
      Que podemos hacer por ti?
    </Typography>

    <Grid container justifyContent="center"  columnSpacing={0} rowSpacing={20} paddingBottom='200px' paddingRight={20} paddingLeft={25} columns={{ xs: 15, sm: 8, md: 10, lg: 14.9 }}>
      {projectImages.map((image, index) => (
        <Grid item xs={2} sm={6} md={4} lg={2.5} key={index} sx={{ marginBottom: '50px' }}>
          <Box
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            sx={{
              width: "114px",
              height: "104px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s',
            }}
          >
            <img
              src={image.imageUrl}
              alt={`Proyecto ${index + 1}`}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '11px' }}
            />
            <Typography 
              style={{ fontFamily: "'Oswald', sans-serif" }}
              sx={{ fontSize: "17px", textAlign: 'center' }}
            >
              {image.nombre}
            </Typography>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
            </List>
            {isHovered === index && (
              <Typography 
              style={{ fontFamily: "'Oswald', sans-serif" }}
                sx={{ fontSize: "10px", textAlign: 'center' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incid dunt utlab ore et dolore magna aliqua. Ut enim ad minim veniam weay in the sun.
              </Typography>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>




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
          {chunkedImages2.map((chunk, index) => (
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
                      style={{ width: '45%', height: '45%',borderRadius:"50%" }}
                    />
                    
                    <Typography fontSize="18px" sx={{ color: 'black', fontWeight: 'bold' }}>
                      {image.nombre}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>

    </div>
  );
}

export default Servicios;
