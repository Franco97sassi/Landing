import { Box, Dialog, DialogActions, DialogContent, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import proyecto2 from "../../assets/proyecto2.png";
import servicio1 from "../../assets/servicio1.png";
import fondoInicio from "../../assets/fondoInicio.png"
import { useState } from 'react';
import Form from './form';

const Proyectos = () => {
  const projectImages = [
    { imageUrl: proyecto2,url:"https://www.todofloral.com/",nombre:"Todo Floral"},
    { imageUrl: proyecto2,url:"https://www.todofloral.com/",nombre:"Todo Floral" },
    { imageUrl: proyecto2,url:"https://www.todofloral.com/",nombre:"Todo Floral" },
    { imageUrl: proyecto2,url:"https://www.todofloral.com/",nombre:"Todo Floral" },
    { imageUrl: proyecto2 ,url:"https://www.todofloral.com/",nombre:"Todo Floral"},
    { imageUrl: proyecto2 ,url:"https://www.todofloral.com/",nombre:"Todo Floral"},
    { imageUrl: proyecto2,url:"https://www.todofloral.com/",nombre:"Todo Floral" },
    { imageUrl: proyecto2,url:"https://www.todofloral.com/" ,nombre:"Todo Floral"}
    // Agrega las URL de las imágenes restantes aquí
  ];
  // useEffect(() => {
  //   // Cuando se carga la página, desplázate a la sección de proyectos
  //   window.location.hash = "#proyectos";
  // }, []);
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
}

const handleClose = () => {
    setOpen(false)
}
  const [hoverIndex, setHoverIndex] = useState(null);

    return (
    <div id="proyectos">
    {/* Título de la sección "Proyectos" */}
    <Typography style={{ fontFamily: "'Oswald', sans-serif" }} sx={{ display: "flex", justifyContent: "center", paddingBottom: "100px", marginTop: '105px',fontSize:"45px" }}>
      Proyectos
    </Typography>

    {/* Grid de proyectos */}
    <Grid container rowSpacing={5.5} columnSpacing={5}>
      {projectImages.map((image, index) => (
        <Grid item xs={12} sm={6} md={3.6} key={index}>
          {/* <a href={image.url} target="_blank" rel="noopener noreferrer"> */}
          {/* <Typography style={{ fontFamily: 'Playfair Display, serif' }} sx={{marginLeft:"138px" ,display:"flex",justifyContent: "center" ,color:"magenta"}}>Todo Floral</Typography> */}

          <Box
              sx={{
                width: "382.52px",
                height: "239.16px",
                borderRadius: "10px",
                backgroundColor: 'rgba(30, 30, 30, 0.56)',
                marginLeft: '68px',
                marginRight: '68px',
                marginBottom: '2rem',
                transition: 'transform 0.3s',
                position: 'relative', // para posicionar absolutamente el nombre dentro
                overflow: 'hidden'    // para mantener todo contenido dentro del Box
              }}
              onMouseEnter={() => setHoverIndex(index)}  // Establecer el hoverIndex
              onMouseLeave={() => setHoverIndex(null)}   // Restablecer el hoverIndex
            >
 
               <img
                src={image.imageUrl}
                alt={`Proyecto ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: "10px" }}
              />
                  <Typography 
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  position: 'absolute',
                  bottom: '10px',
                  left: '135px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  color: 'white',
                  opacity: hoverIndex === index ? 1 : 0,  // 2. Estilo condicional basado en hoverIndex
                  transition: 'opacity 0.3s'
                }}
              >
                {image.nombre}
              </Typography>
              </Box>
              < Form imageUrl={image.imageUrl}  url={image.url} />  

          {/* </a>  */}
          

        </Grid>
      ))}
    </Grid>
  </div>
);
}

export default Proyectos;