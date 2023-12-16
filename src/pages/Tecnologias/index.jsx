import { Box,  Divider,  Grid, List, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
 
import tecno1 from "../../assets/t1.png";
import tecno2 from "../../assets/t2.png";
import tecno3 from "../../assets/t3.png";
import tecno4 from "../../assets/t4.png";
import tecno5 from "../../assets/t5.png";
import tecno6 from "../../assets/t6.png";
import tecno7 from "../../assets/t7.png";
import tecno8 from "../../assets/flask.png";
import tecno9 from "../../assets/t8.png";
import tecno10 from "../../assets/t9.png";
import tecno11 from "../../assets/t11.png";
import tecno12 from "../../assets/t12.png";
import tecno13 from "../../assets/t13.png";
import tecno14 from "../../assets/t14.png";
// import tecno15 from "../../assets/t15.png";
import "./styles.css"
 import { styled } from '@mui/material/styles';
 import {   Slide } from "react-awesome-reveal";

import js2 from "../../assets/js3.png";
import icono from "../../assets/icono.png";
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
 const Tecnologias = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const tecnologias = [
    { imageUrl: tecno1, nombre: "HTML" },
    { imageUrl: tecno2, nombre: "CSS" },
    { imageUrl: tecno3, nombre: "REACT JS" },
    { imageUrl: tecno4, nombre: "NODE JS" },
    { imageUrl: tecno5, nombre: "EXPRESS" },
    { imageUrl: tecno6, nombre: "MUI" },
    { imageUrl: tecno7, nombre: "SELENIUM" },
    // { imageUrl: tecno8, nombre: "FLASK" },
    { imageUrl: tecno9, nombre: "DJANGO" },
    { imageUrl: tecno10, nombre: "OPENCV" },
    { imageUrl: tecno11, nombre: "POSTGRES" },
    { imageUrl: tecno12, nombre: "MONGO" },
    { imageUrl: tecno13, nombre: "TENSORFLOW" },
    { imageUrl: tecno14, nombre: "GITHUB" },
    // { imageUrl: tecno15, nombre: "UNITY" },
    
   ];
   const tecnologiasDuplicadas = Array(5).fill(tecnologias).flat();

  return (
    <Box id="servicios" className="ticker-wrap" sx={{
      display: "flex", height: isNonMobileScreens ? "70vh" : "50vh",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div className="ticker">
        {tecnologiasDuplicadas.map((tec, index) => (
          <div key={index} className="ticker-item">
            <img src={tec.imageUrl} alt={tec.nombre} style={{
              height: isNonMobileScreens ? '200px' : "75px",
              width: 'auto'
            }} />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Tecnologias;