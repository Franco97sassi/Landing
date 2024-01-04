// import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
// import { Slide } from "react-awesome-reveal";
// import { useState } from "react";
// import { useInView } from 'react-intersection-observer';
// // Importaciones de tus imágenes...
// import empresa1 from '../../assets/1.png';
// import empresa2 from '../../assets/2.png';
// import empresa5 from '../../assets/3.png';
// import empresa4 from '../../assets/4.png';
// import empresa3 from '../../assets/5.png';
// import empresa6 from '../../assets/6.png';
// import empresa10 from '../../assets/7.png';
// // import empresa8 from '../../assets/client9.png';
// // import empresa9 from '../../assets/client1.png';
// // import empresa7 from '../../assets/client1.png';
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./styles.css"
// const Clientes = () => {
//   // Configuraciones para el carrusel
//   const settings = {
//      dots: false, // Muestra puntos de navegación en la parte inferior
//     infinite: true, // Infinito loop
//     speed: 500, // Velocidad de transición
//     slidesToShow: 3, // Muestra 3 slides a la vez
//     slidesToScroll: 3, // Desplaza 3 slides a la vez
//     responsive: [
//       {
//         breakpoint: 1921, // Para pantallas XL
//         settings: {
//           slidesToShow: 3, // Ajusta según tus necesidades para pantallas XL
//           slidesToScroll: 3, // Ajusta según tus necesidades para pantallas XL
//           centerMode: false,
//           dots: true,
//           infinite: true,

//         }
//       },
//       {
//         breakpoint: 1024,
        
//         settings: {
 
//            slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//           centerMode:true,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
          
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode:true

//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1, // Muestra 1 slide en pantallas muy pequeñas
//           slidesToScroll: 1,
//           centerMode:true, 
//          }
//       }
//     ]
//   }; 
//   const images = [ empresa2, empresa3, empresa4, empresa5, empresa6, empresa10];
//   const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
//  return (
//     <div style={{ overflowX: 'hidden' }}>
//       <Box sx={{
//         width: '100%',
//         py: 8,
//           px:10,
//         background: '#333333',
//         color: 'white',
//         textAlign: 'center',
//          height:isNonMobileScreens?"100vh":"75vh" 
//       }}>
//         <Slide direction="left" triggerOnce={false}>
//           <Typography variant={isNonMobileScreens ? "h2" : "h4"} mb={5} fontWeight="700" fontFamily="Oswald, sans-serif">
//             Nuestros Clientes
//           </Typography>
//         </Slide>

//         <Box sx={{
//           width: isNonMobileScreens ? '100%' : "100%",
           
//           justifyContent:"space-between",
//           // py: 0, 
//              px: { xs: 1, sm: 1,xl:2},
//           // padding:{ xs: 10, sm: 10,xl:30},
//         }}>
//           <Slider {...settings} className="custom-slider"   sx={{}}>
//             {images.map((image, index) => (
//               <Box  key={index} sx={{
//                 // margin: 15,
//                 width: isNonMobileScreens?'50%':"100%",
//                   height: isNonMobileScreens?'50%':"100%",  
                  
//                 display:"flex",
//                 flexDirection:"column",
//                 transition: 'transform 0.3s ease-in-out',
//                 marginTop: '20px', 
//                 // paddingRight:isNonMobileScreens? "0px":'70px',  
//                 // paddingLeft:isNonMobileScreens? "0px":'70px',  
//                 ':hover': {
//                   transform: 'scale(1.05)'
//                 }
//               }}>
//                 <img src={image} alt={`Empresa ${index + 1}`} style={{
//                   // maxWidth: '50%',
//                   // maxHeight: '50%',  
//                   width: isNonMobileScreens?'50%':"100%",
//                   height: isNonMobileScreens?'50%':"100%",  
//                   objectFit: 'contain',
//                   borderRadius: "25px",
//                   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'      ,
                 
//                 }} />
//               </Box>
//             ))}
//           </Slider>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Clientes;


    
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery  } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {   Slide } from "react-awesome-reveal";

import empresa1 from '../../assets/1.png';
 import empresa5 from '../../assets/3.png';
import empresa4 from '../../assets/4.png';
import empresa3 from '../../assets/5.png';
import empresa6 from '../../assets/6.png';
import empresa10 from '../../assets/7.png';

import Servicios from '../Servicios';
  const Clientes = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const projectImages = [
    { imageUrl: empresa1, profesion: "CEO", nombre: "Mario Eduardo Diaz" },
     { imageUrl: empresa3, profesion: "Sr. Fullstack Developer", nombre: "Facundo Moreyra" },
    { imageUrl: empresa4, profesion: "Jr. Fullstack Developer", nombre: "Santiago Mercado" },
    { imageUrl: empresa5, profesion: "Jr. Fullstack Developer", nombre: "Franco Sassi" },
    { imageUrl: empresa6, profesion: "Jr. Fullstack Developer", nombre: "Alejandro Bardabid" },
    { imageUrl: empresa10, profesion: "Jr. Fullstack Developer", nombre: "Alejandro Bardabid" },



    // Agrega las URL de las imágenes restantes aquí
  ];

  const chunkSize = isNonMobileScreens ? 3 : 1;
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
      <Box sx={{ background: "#333333 "}}>
        <Slide direction="left" triggerOnce={false} in={inView}>
          <Typography  variant={isNonMobileScreens?"h2":"h4"} sx={{ paddingTop:isNonMobileScreens?"25px": "50px",display: "flex", justifyContent: "center",   fontWeight: 700, fontFamily: "'Oswald', sans-serif", color: 'white' }}>
            Nuestros Clientes
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
                    {/* <img
                      src={item.imageUrl}
                      alt={`Miembro ${index * chunkSize + subIndex + 1}`}
                      style={{ width: isNonMobileScreens?'152.8px':"125px", height:isNonMobileScreens?'156.99px':"125px", borderRadius: '50%' }}
                    /> */}
                     <img src={item.imageUrl}   style={{
                  // maxWidth: '50%',
                  // maxHeight: '50%',  
                  width: isNonMobileScreens?'75%':"50%",
                  height: isNonMobileScreens?'75%':"50%",  
                  objectFit: 'contain',
                  borderRadius: "25px",
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'      ,
                 
                }} /> 
                  
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

export default Clientes;