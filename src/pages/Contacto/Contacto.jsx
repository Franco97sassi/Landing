import { Box, Button, Grid, Link, Stack, TextField, Typography } from '@mui/material';
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

  return (

    <div>
      {/* email */}

      <Box sx={{ width: '100%', height: "110vh", background: 'black' }}>
        <Slide direction="left" triggerOnce={false}>
          <Typography variant="h2" style={{ color: "white", fontFamily: "'Oswald', sans-serif", fontWeight: "700" }} sx={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}>
            Contáctanos
          </Typography>
        </Slide>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="flexStart" alignItems="flexStart" marginTop="25px" style={{ height: '100%' }}>
          <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box style={{ border: "5px solid white", padding: "10px", marginBottom: "10px", width: "300px" }}>
              <Typography sx={{ fontSize: "25px", color: "white", mb: 3, fontFamily: "'Oswald', sans-serif" }} >
                Redes Sociales
              </Typography>
              <Box sx={{ marginLeft: "65px", display: "flex", alignItems: "center", mb: 3, width: "100%", maxWidth: "126px", justifyContent: "space-evenly" }}>
                <a href="https://www.facebook.com/profile.php?id=100093530245392">
                  <img style={{ width: "27px", marginTop: "0px", cursor: "pointer" }} src={icono2}></img></a>
                <a href="https://www.instagram.com/techx_mx/?hl=es"> <img style={{ width: "33px", marginTop: "0px", cursor: "pointer" }} src={linkedinFooterImg}></img></a>


              </Box>


              <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",  // Asegura que el contenedor ocupe toda la altura
              }}>
                <Button sx={{
                  fontFamily: "'Oswald', sans-serif",
                  borderColor: "white",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderRadius: "15px",
                  color: "white",
                  background: 'black',
                  width: "220px",
                  margin: "auto",  // Centrar horizontalmente
                  marginTop: "10px",  // Agregar espacio en la parte superior

                }}>
                  Etiquetanos en tu historia
                </Button>
              </Box>



            </Box>
            <Box style={{ border: "5px solid white", padding: "10px", width: "300px" }}>
              <Typography sx={{ fontSize: "25px", color: "white", mb: 2, fontFamily: "'Oswald', sans-serif" }}>
                TechX
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                <Typography sx={{ color: "white", mb: 2, fontFamily: "'Oswald', sans-serif" }}>
                  <LocationOnIcon sx={{ mr: 1, position: 'relative', top: '5px', }} />
                  México
                </Typography>
                <Typography sx={{ color: "white", mb: 2, fontFamily: "'Oswald', sans-serif" }}>
                  <PhoneIcon sx={{ mr: 1, position: 'relative', top: '5px', }} />
                  +52 662 2297062
                </Typography>
                <Typography sx={{ color: "white", mb: 2, fontFamily: "'Oswald', sans-serif" }}>
                  <EmailIcon sx={{ mr: 1, position: 'relative', top: '5px', }} />
                  desarollotechx@gmail.com
                </Typography>
              </Box>

            </Box>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyItems: "center", alignItems: 'center', }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: "425px", position: 'relative', background: "#CCCCCC", borderRadius: '50px', border: "1px solid white", padding: "10px", marginBottom: "10px", width: "300px" }}>
              <AccountCircleIcon sx={{ fontSize: 50, color: '#333333', mt: 2, }} />
              <Stack spacing={2} sx={{ width: '100%', marginTop: "50px" }}>
                <form ref={form} onSubmit={sendEmail}>
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
                    name="user_name"
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
                    name="user_email"
                    variant="outlined"
                  />

                  <TextField
                    sx={{
                      background: "#D3D3D3",
                      borderRadius: "15px",
                      height: "100px",
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
                  />
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
