import { Box, Button, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Slide } from "react-awesome-reveal";
import proyecto1 from "../../assets/im22.png";
import proyecto2 from "../../assets/proyecto2.png";
import docappoint from "../../assets/doca.jpeg";
import thegarden from "../../assets/thega.jpeg";

import rifas from "../../assets/rifas.png"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import "./styles.css"
 const Proyectos = () => {
  const projectImages = [
    { imageUrl: proyecto2, url: "https://www.todofloral.com/", nombre: "Todo Floral" },
    { imageUrl: docappoint, url: "https://www.todofloral.com/", nombre: "Docappoint" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Proveedora de las aryes graficas" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Pixie Inmobiliaria" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Canadevi" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Expo Casa" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Videojuego_ratfundacity" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Tcitramites Migratorios" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Tramites migratorios Argentina-Estados Unidos" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Mb Agencia" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Rifas El Venado" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Contraenseña" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Asociacion de la Cruz Roja Mexicana" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Resumen App" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Border Mailboxes" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Aura Dress " },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Shopcyrene" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Crmcypto" },
    { imageUrl: thegarden, url: "https://www.todofloral.com/", nombre: "Marsalesmx" },



     
    // ... (otras imágenes)
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const chunkSize = 1;
  const [currentChunk, setCurrentChunk] = useState(0);

  const chunkedProjects = projectImages.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const calculateDelay = (index) => {
    const baseDelay = 1000; // 1 segundo de retraso base
    const incrementalDelay = 500; // Incrementar 500ms por cada proyecto
    return baseDelay + (index * incrementalDelay);
  };

  return (
    <div id="proyectos">
      <Box sx={{ background: '#333333' ,height:"100vh" }}  >
        <Slide direction="left" triggerOnce={false}>
          <Typography  variant="h2" style={{color:"white", fontWeight: 700,fontFamily: "'Oswald', sans-serif" }} sx={{ display: "flex",paddingTop:"50px", justifyContent: "center", paddingBottom: "50px" }}>
            Proyectos
          </Typography></Slide>
           
         
       {/* <Carousel
  autoPlay={true}
  interval={5000}
  animation="slide"
  indicators={false}
  navButtonsAlwaysVisible={false}
  index={currentChunk}
  sx={{ padding: '0 16px' }}
>
          {chunkedProjects.map((chunk, index) => (
            <Grid container key={index}  justifyContent="space-around"  spacing={2}>
              {chunk.map((project, subIndex) => (
                
                <Grid item xs={12} sm={6} md={3}  key={subIndex}>
                  <Box   
                    sx={{ 
                      width: "350px",
                      height: "250px",
                      borderRadius: "10px",
                      marginTop: "50px",
                      backgroundColor: 'rgba(30, 30, 30, 0.56)',
                      marginBottom: '2rem',
                      transition: 'transform 0.3s',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <img  
                      src={project.imageUrl}
                      alt={`Proyecto ${index * chunkSize + subIndex + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: "cover", borderRadius: "10px" }}
                    />
<Link href={project.url} underline="none" target="_blank" rel="noopener">
                    <Typography
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        position: 'absolute',
                        bottom: '-0px',
                        left: '72.5px',
                        background: 'linear-gradient(to bottom, #cccccc 0%, #333333 100%)',
                        padding: '15px 60px',
                        borderRadius: '5px',
                        color: 'black',
                        opacity: hoverIndex === index ? 1 : 0,
                        transition: 'opacity 0.3s',
                        fontWeight: "300px",
                        fontSize: "20px"
                      }}
                    >
                      {project.nombre}
                    </Typography></Link> 
                    <Typography
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        position: 'absolute',
                        bottom: '-0px',
                        left: '72.5px',
                        background: 'linear-gradient(to bottom, #cccccc 0%, #333333 100%)',
                        padding: '15px 60px',
                        borderRadius: '5px',
                        color: 'black',
                        opacity: hoverIndex === index ? 1 : 0,
                        transition: 'opacity 0.3s',
                        fontWeight: "300px",
                        fontSize: "20px"
                      }}
                    >
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </Typography>  
                  </Box>
                   
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>  
  */}
       
      <Carousel
  autoPlay={true}
  interval={5000}
  animation="slide"
  indicators={false}
  navButtonsAlwaysVisible={false}
  index={currentChunk}
  sx={{ padding: '0 16px' }}
>
  {chunkedProjects.map((chunk, index) => (
    <Grid container key={index} spacing={2} alignItems="center" justifyContent="center">
      {chunk.map((project, subIndex) => (
        <React.Fragment key={subIndex}>
          <Grid item xs={12} sm={6} md={6} lg={4.5} xl={3}>
            <Box sx={{
              width: "125%", // Asegúrate de que la imagen ocupa todo el ancho del Grid item
              height: "125%",
              borderRadius: "10px",
              marginTop: "50px",
              backgroundColor: 'rgba(30, 30, 30, 0.56)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            >
              <Link href={project.url} underline="none" target="_blank" rel="noopener">

              <img  
                src={project.imageUrl}
                alt={`Proyecto ${index * chunkSize + subIndex + 1}`}
                style={{ width: '100%', height: '100%', objectFit: "contain", borderRadius: "10px" }}
              />  </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={7} xl={9}>
            <Box sx={{
              p: 15,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '250px', // Asegúrate de que este Box tiene la misma altura que el Box de la imagen
            }}>
              <Typography style={{color:"white",
        fontFamily: 'Oswald, sans-serif',
       }}  variant="h4" gutterBottom>
                {project.nombre}
              </Typography>
              <Typography  style={{color:"white",
        fontFamily: 'Oswald, sans-serif',
       }}  >
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum

                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum

              </Typography>
            </Box>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  ))}
</Carousel>
</Box>
      {/* email */}
      
      {/* <Box sx={{ width: '100%', height: "100vh", background: 'black' }}>
      <Slide direction="left" triggerOnce={false}>
          <Typography  variant="h2" style={{color:"white", fontFamily: "'Oswald', sans-serif" }} sx={{ display: "flex", justifyContent: "center" ,paddingTop:"50px" }}>
            Contactanos
          </Typography>
        </Slide>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="flexStart" alignItems="flexStart" marginTop="25px" style={{ height: '100%' }}>
        <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box style={{ border: "5px solid white", padding: "10px", marginBottom: "10px", width: "300px" }}>
            <Typography sx={{ color: "white", mb: 8 ,fontFamily: "'Oswald', sans-serif" }} >
              Redes Sociales
            </Typography>
            <Button sx={{
              color: "white", fontFamily: "'Oswald', sans-serif",
              borderColor: "white",
              borderWidth: "2px",
              borderStyle: "solid",
              borderRadius: "15px",
              '&:hover': {
                backgroundColor: "darkblue",
                borderColor: "white",
              },
            }}>
              Etiquetanos en tu historia
            </Button>
          </Box>

          <Box style={{ border: "5px solid white", padding: "10px", width: "300px" }}>
            <Typography sx={{ color: "white", mb: 2,fontFamily: "'Oswald', sans-serif" }}>
              TechX
            </Typography>
            <Typography sx={{ color: "white", mb: 2,fontFamily: "'Oswald', sans-serif" }}>     <LocationOnIcon sx={{ mr: 1 }} />

              México
            </Typography>
            <Typography sx={{ color: "white", mb: 2,fontFamily: "'Oswald', sans-serif" }}> <PhoneIcon sx={{ mr: 1 }} />
              +52 662 2297062
            </Typography>
            <Typography sx={{ color: "white" , mb: 2,fontFamily: "'Oswald', sans-serif"}}> <EmailIcon sx={{ mr: 1 }} />
              desarollotechx@gmail.com
            </Typography>
           
          </Box>
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column',justifyItems:"center", alignItems: 'center' }}>
      
      
        <Box style={{height: "400px", position: 'relative', background: "#CCCCCC", borderRadius: '50px', border: "1px solid white", padding: "10px", marginBottom: "10px", width: "300px" }}>
        <AccountCircleIcon sx={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', fontSize: 70, color: '#333333' }} />
        <Stack spacing={2} sx={{ width: '100%', marginTop:"50px"}}>
    <TextField 
      sx={{
          
        background: "#D3D3D3",
        borderRadius: "15px",
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        '& label.Mui-focused': {
          color: 'black',
        },
      }}
      id="outlined-basic"
      label="Nombre"
      variant="outlined"
    />

    <TextField 
      sx={{
        background: "#D3D3D3",
        borderRadius: "15px",
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        '& label.Mui-focused': {
          color: 'black',
        },
      }}
      id="outlined-basic"
      label="Email"
      variant="outlined"
    />
   
    <TextField 
      sx={{
        background: "#D3D3D3",
        borderRadius: "15px",
        height:"100px",
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        '& label.Mui-focused': {
          color: 'black',
        },
      }}
      id="outlined-basic"
      label="Comentarios"
      variant="outlined"
    />
<Box sx={{display:"flex",
      justifyContent:"center",
      alignItems:"center" }}>  
    <Button sx={{
       fontFamily: "'Oswald', sans-serif",
      color: "black",
      borderColor: "white",
      borderWidth: "2px",
      borderStyle: "solid",
      borderRadius: "15px",
       color:"white",
      background: 'black',
      width:"220px",
      '&:hover': {
        backgroundColor: "darkblue",
        borderColor: "white",
      } 
    }}>
      Enviar
    </Button></Box>
  </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box> */}
    </div>

  );
}

export default Proyectos;
