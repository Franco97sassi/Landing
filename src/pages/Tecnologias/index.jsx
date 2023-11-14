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
 const Tecnologias = () => {
  // const projectImages = [
  //   { imageUrl: gif10, nombre: "Páginas Web" },
  //   { imageUrl: gif1, nombre: "Aplicaciones Móviles" },
  //   { imageUrl: gif2, nombre: "Inteligencia Artificial" },
  //   { imageUrl: gif3, nombre: "Ecommerce" },
  //   { imageUrl: gif4, nombre: "Web Scraping" },
  //   { imageUrl: gif5, nombre: "Control de Stock" },
  //   { imageUrl: gif6, nombre: "Bots Personalizados" },
  //   { imageUrl: gif7, nombre: "Mantenimiento" },
  //   { imageUrl: gif8, nombre: "Automatización de Procesos" },
  //   { imageUrl: gif9, nombre: "MarketPlace" },
  //   // Agrega las URL de las imágenes restantes aquí
  // ];
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


  const chunkSize =4;
  const chunkedImages2 = projectImages2.reduce((resultArray, item, index) => {
    const chunkIndex2 = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex2]) {
      resultArray[chunkIndex2] = [];
    }

    resultArray[chunkIndex2].push(item);

    return resultArray;
  }, []);
  const [currentChunk, setCurrentChunk] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Avanzar al siguiente grupo de imágenes
  //     setCurrentChunk((prevChunk) => (prevChunk + 1) % Math.ceil(projectImages2.length / chunkSize));
  //   }, 3000); // Cambiar cada 3 segundos

  //   return () => {
  //     // Limpia el intervalo cuando el componente se desmonta
  //     clearInterval(interval);
  //   };
  // }, []);

  // const chunkedImages = projectImages2.reduce((resultArray, item, index) => {
  //   const chunkIndex = Math.floor(index / chunkSize);

  //   if (!resultArray[chunkIndex]) {
  //     resultArray[chunkIndex] = [];
  //   }

  //   resultArray[chunkIndex].push(item);

  //   return resultArray;
  // }, []);
  // const style = {
  //   width: '100%',
  //   maxWidth: 360,
  //  };

   const [isHovered, setIsHovered] = useState(null);
 
  return (
    <div id="servicios">
              
    

     






   <Box sx={{ background: '#333333' , height:"100vh"}}>
   <Slide direction="left" triggerOnce={false} in={inView}> 

<Typography style={{fontWeight: 700, fontFamily: "'Oswald', sans-serif"  }} variant="h2" sx={{ paddingTop:"50px",color:"white", display: "flex", justifyContent: "center", paddingBottom: '50px' }}>
 Nuestras Tecnologías
</Typography> </Slide>
  <div className="scrolling-wrapper">
    <div className="scrolling-content">
      {chunkedImages2.map((chunk, index) => (
        <Grid container key={index}    className="scrolling-item">
          {chunk.map((image, subIndex) => (
            <Grid item key={subIndex} sx={{marginTop:"30px"}}>
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
                  // alt={`Miembro ${index * chunkSize + subIndex + 1}`}
                  style={{ width: '45%', height: '45%', borderRadius:"50%" }}
                />
                <Typography style={{ fontFamily: "'Oswald', sans-serif" }} fontSize="18px" sx={{ color: 'white', fontWeight: 'bold' }}>
                  {image.nombre}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  </div>
</Box>

 



    </div>
  );
}

export default Tecnologias;
