import { Box, Button, Grid, Link, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import React, { useState, useRef } from 'react';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Slide } from "react-awesome-reveal";
import proyecto1 from "../../assets/im22.png";
import proyecto2 from "../../assets/proyecto2.png";
import rifas from "../../assets/rifas.png"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import icono2 from "../../assets/icono2.png"
import whatsapp from "../../assets/whatsapp.png"
import linkedinFooterImg from "../../assets/logo4.svg"
import emailjs from '@emailjs/browser';
const Contacto = () => {
  const form = useRef();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#red',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [inView, setInView] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_6fxw7cd", "template_3w7v272", form.current, "m4gMqZXADix1JcttU")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  const [commentRows, setCommentRows] = useState(4); // Comienza con 4 filas
  const handleCommentChange = (event) => {
    const text = event.target.value;
    const lines = text.split('\n').length;
    setCommentRows(Math.max(4, lines)); // Asegura un mínimo de 4 filas
  };
  
  return (

    <div>
      {/* email */}

      <Box sx={{  height: isNonMobileScreens?"100%":"100%", background: 'black',paddingBottom:"1rem" }}>
        <Slide direction="left" triggerOnce={false}>
          <Typography variant={isNonMobileScreens?"h2":"h4"}  style={{ color: "white", fontFamily: "'Oswald', sans-serif", fontWeight: "700" }} sx={{ display: "flex",alignContent:"center", justifyContent: "center", paddingTop: "50px" }}>
            Contáctanos
          </Typography>
        </Slide>
        <Grid container 
        rowSpacing={1} 
        columnSpacing={{ xs: 12, sm: 6, md: 6 }} 
        justifyContent={isNonMobileScreens ? "center" : "center"} 
        alignItems={isNonMobileScreens ? "center" : "center"} 
        style={{ 
          // height: isNonMobileScreens ?  "100%":"50%" ,
          flexDirection: isNonMobileScreens ? 'row' : 'row' 
        }}>
          <Grid item xs={12} md={6} xl={6} style={{marginTop:"1.5rem", display: 'flex', flexDirection: 'column',alignContent:"center", alignItems: 'center'  }}>
            <Box style={{ border: "5px solid white", padding: "10px", marginBottom: "10px", width: "300px" }}>
              <Typography sx={{ fontSize: "1.5rem", color: "white", mb: 3, fontFamily: "'Oswald', sans-serif" }} >
                Redes Sociales
              </Typography>
              <Box sx={{ marginLeft: "65px", display: "flex", alignItems: "center", mb: 3, width: "100%", maxWidth: "126px", justifyContent: "space-evenly" }}>
                <a href="https://www.facebook.com/profile.php?id=100093530245392">
                  <img style={{ width: "27px", marginTop: "0px", cursor: "pointer" }} src={icono2}></img></a>
                <a href="https://www.instagram.com/techx_mx/?hl=es">
                   <img style={{ width: "27px", marginTop: "0px", cursor: "pointer" }} src={linkedinFooterImg}></img></a>


              </Box>


              



            </Box>
            <Box style={{ border: "5px solid white", padding: "10px", width: "300px" }}>
              <Typography sx={{ fontSize: "25px", color: "white", mb: 2, fontFamily: "'Oswald', sans-serif" }}>
                TechX
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                <Typography sx={{ color: "white", mb: 2, fontFamily: "'Oswald', sans-serif",fontSize: "1rem" }}>
                  <LocationOnIcon sx={{ mr: 1, position: 'relative', top: '5px', }} />
                  México
                </Typography>
                <Typography sx={{ color: "white", mb: 2, fontFamily: "'Oswald', sans-serif",fontSize: "1rem" }}>
                  <PhoneIcon sx={{ mr: 1, position: 'relative', top: '5px', }} />
                  +52 662 2297062
                </Typography>
                <Typography sx={{ color: "white", mb: 2, fontFamily: "'Oswald', sans-serif",fontSize: "1rem" }}>
                  <EmailIcon sx={{ mr: 1, position: 'relative', top: '5px', }} />
                  desarollotechx@gmail.com
                </Typography>
              </Box>

            </Box>
          </Grid>
          
          
          <Grid item xs={12} md={6} xl={6} sx={{marginTop:"2rem", display: 'flex', flexDirection: 'column', justifyItems: "center", alignItems: 'center',marginBottom:"0px" }}>
            <Box sx={{ display: 'flex', alignItems: 'center' , flexDirection: 'column', height: "475px", position: 'relative', background: "#CCCCCC", borderRadius: '50px', border: "1px solid white", padding: "10px", marginBottom: "10px", width: "300px" }}>
              <AccountCircleIcon sx={{ fontSize: 50, color: '#333333', mt: 2, }} />
              <Stack spacing={0} sx={{ width: '100%', marginTop: "50px"  }}>
                <form  ref={form} onSubmit={sendEmail} >
                  <TextField
                    sx={{marginLeft:"30px",marginBottom:"1rem",
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
                    name="user_name"
                    variant="outlined"
                  />

                  <TextField
                    sx={{marginLeft:"30px",marginBottom:"1rem", 
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
                    name="user_email"
                    variant="outlined"
                  />

<TextField
   sx={{
    width:"220px",
    marginLeft:"30px",
    marginBottom:"1rem",
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
  label="Comentarios"
  name="message"
  variant="outlined"
  multiline
  rows={commentRows}
  onChange={handleCommentChange}
/>
{/* <TextField
  
  id="outlined-basic"
  label="Comentarios"
  name="message"
  variant="outlined"
  multiline // Habilita el área de texto de varias líneas
  rows={4} // Define el número de líneas visibles inicialmente
/> */}
                  <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                    <Button
                      type='submit'
                      sx={{
                        fontFamily: "'Oswald', sans-serif",
                        borderColor: "white",
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderRadius: "15px",
                        color: "white",
                        background: 'black',
                        width: "220px",
                        '&:hover': {
                          backgroundColor: "black",
                          borderColor: "white",
                        }
                      }}>
                      Enviar
                    </Button></Box>
                </form>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>)
}
export default Contacto;
