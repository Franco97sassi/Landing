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
import tecno1 from "../../assets/html-5.png";
import tecno2 from "../../assets/css-3.png";
import tecno3 from "../../assets/reactIcono.png";
import tecno4 from "../../assets/nodo-js.png";
import tecno5 from "../../assets/tecno5.png";
import tecno6 from "../../assets/tecno6.png";
import tecno7 from "../../assets/selenium.png";
import tecno8 from "../../assets/flask.png";
import tecno9 from "../../assets/django.png";
import tecno10 from "../../assets/opencv.png";
import tecno11 from "../../assets/postgres.png";
import tecno12 from "../../assets/mongo.png";
import tecno13 from "../../assets/tensorflow.png";
import tecno14 from "../../assets/github.png";
import tecno15 from "../../assets/unity.png";

 import { styled } from '@mui/material/styles';
 import {   Slide } from "react-awesome-reveal";

import js2 from "../../assets/js3.png";
import icono from "../../assets/icono.png";
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./styles.css"
const Servicios = () => {
  const projectImages = [
    { imageUrl: gif10, nombre: "Páginas Web" },
    { imageUrl: gif1, nombre: "Aplicaciones Móviles" },
    { imageUrl: gif2, nombre: "Inteligencia Artificial" },
    { imageUrl: gif3, nombre: "Ecommerce" },
    { imageUrl: gif4, nombre: "Web Scraping" },
    { imageUrl: gif5, nombre: "Control de Stock" },
    { imageUrl: gif6, nombre: "Bots Personalizados" },
    { imageUrl: gif7, nombre: "Mantenimiento" },
    { imageUrl: gif8, nombre: "Automatización de Procesos" },
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
          { imageUrl: tecno7, nombre: "SELENIUM" },
      { imageUrl: tecno8, nombre: "FLASK" },
      { imageUrl: tecno9, nombre: "DJANGO" },
      { imageUrl: tecno10, nombre: "OPENCV" },
      { imageUrl: tecno11, nombre: "POSTGRES" },
      { imageUrl: tecno12, nombre: "MONGO" },
      { imageUrl: tecno13, nombre: "TENSORFLOW" },
      { imageUrl: tecno14, nombre: "GITHUB" },
      { imageUrl: tecno15, nombre: "UNITY" },
      
      // Agrega las URL de las imágenes restantes aquí
    ];
 
 
   
  const [inView, setInView] = useState(false);


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
              <Slide direction="left" triggerOnce={false} in={inView}> 

    <Typography style={{fontWeight: 700, fontFamily: "'Oswald', sans-serif"  }}  sx={{paddingTop:"40px" ,color:"white", display: "flex", justifyContent: "center", paddingBottom: '80px', fontSize:"44px" }}>
      ¿Qué podemos hacer por ti?
    </Typography> </Slide>

    <Grid sx={{background: 'black'  }} marginTop={-25}  container justifyContent="center"  columnSpacing={0} rowSpacing={20} paddingBottom='200px' paddingRight={20} paddingLeft={25} columns={{ xs: 15, sm: 8, md: 10, lg: 14.9 }}>
      {projectImages.map((image, index) => (
        <Grid item xs={2} sm={6} md={4} lg={2.5} key={index}  >
          <Box 
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            sx={{
              width: "114px", 
              height: "104px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s',rowSpacing:"200px"
            }}
          >
            <img
              src={image.imageUrl}
              alt={`Proyecto ${index + 1}`}
  style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '11px', border: "5px solid black" }}
            />
            <Typography 
              style={{ fontFamily: "'Oswald', sans-serif"  }}
              sx={{ fontSize: "20px", textAlign: 'center' ,color:"white" }}
            >
              {image.nombre}
            </Typography>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
            </List>
            {/* {isHovered === index && (
              <Typography 
              style={{ fontFamily: "'Oswald', sans-serif" }}
                sx={{ fontSize: "12px", textAlign: 'center',color:"white" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incid dunt utlab ore et dolore magna aliqua. Ut enim ad minim veniam weay in the sun.
              </Typography>
            )} */}
          </Box>
        </Grid>
      ))}
    </Grid>






 
 



    </div>
  );
}

export default Servicios;
