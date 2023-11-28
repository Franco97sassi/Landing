import { Box,  Divider,  Grid, List, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
 
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
import "./styles.css"
 import { styled } from '@mui/material/styles';
 import {   Slide } from "react-awesome-reveal";

import js2 from "../../assets/js3.png";
import icono from "../../assets/icono.png";
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
 const Tecnologias = () => {
 
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
    { imageUrl: tecno15, nombre: "UNITY" },
    
   ];

  return (
    <Box id="servicios" className="ticker-wrap "  >
    <div className="ticker"  >
        {tecnologias.map((tec, index) => (
            <div key={index} className="ticker-item">
                <img src={tec.imageUrl} alt={tec.nombre} style={{ height: '150px' }} />
                {/* Puedes agregar más elementos aquí si lo deseas */}
            </div>
        ))}
    </div>
</Box>
  );
  };
  
  export default Tecnologias;
  // const [inView, setInView] = useState(false);


  // const chunkSize =8;
  // const chunkedImages2 = projectImages2.reduce((resultArray, item, index) => {
  //   const chunkIndex2 = Math.floor(index / chunkSize);

  //   if (!resultArray[chunkIndex2]) {
  //     resultArray[chunkIndex2] = [];
  //   }

  //   resultArray[chunkIndex2].push(item);

  //   return resultArray;
  // }, []);
  // const [currentChunk, setCurrentChunk] = useState(0);

 
  //  const [isHovered, setIsHovered] = useState(null);
 
//   return (
//     <div id="servicios">
           
    

     


 



//    <Box sx={{ background: '#333333' , height:"120vh"}}>
//    <Slide direction="left" triggerOnce={false} in={inView}> 

// <Typography style={{fontWeight: 700, fontFamily: "'Oswald', sans-serif"  }} variant="h2" sx={{ paddingTop:"50px",color:"white", display: "flex", justifyContent: "center", paddingBottom: '50px' }}>
//  Nuestras Tecnologías
// </Typography> </Slide>
//   <div className="scrolling-wrapper">
//     <div className="scrolling-content">
//       {chunkedImages2.map((chunk, index) => (
//         <Grid container key={index}    className="scrolling-item">
//           {chunk.map((image, subIndex) => (
//             <Grid item key={subIndex} sx={{marginTop:"30px"}}>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   textAlign: 'center',
//                   width: "300px",
//                   height: "300px",    
//                   borderRadius: "50%",
//                   transition: 'transform 0.3s',
//                   '&:hover': {
//                     opacity: [0.9, 0.8, 0.7],
//                     transform: 'scale(1.1)',
//                   },
//                   marginLeft: '10px',
//                 }}
//               >
//                 <img
//                   src={image.imageUrl}
//                   // alt={`Miembro ${index * chunkSize + subIndex + 1}`}
//                   style={{ width: '45%', height: '45%', borderRadius:"50%" }}
//                 />
//                 <Typography style={{ fontFamily: "'Oswald', sans-serif" }} fontSize="18px" sx={{ color: 'white', fontWeight: 'bold' }}>
//                   {image.nombre}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       ))}
//     </div>
//   </div>
// </Box>

 



//     </div>
//   );
// }

// export default Tecnologias;
