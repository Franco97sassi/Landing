import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import {   Slide } from "react-awesome-reveal";
import { styled } from '@mui/material/styles';
import sinFondo from '../../assets/sinFondo.png';
import { useState } from "react";
import empresa1 from '../../assets/empresa1.jpg';
import empresa2 from '../../assets/empresa2.jpg';
import empresa3 from '../../assets/empresa3.jpg';
import empresa4 from '../../assets/empresa4.jpg';
import empresa5 from '../../assets/empresa5.jpg';
import empresa6 from '../../assets/empresa6.jpg';
import empresa7 from '../../assets/empresa7.jpg';
import fondo2 from "../../assets/fondo2.jpg"
const Testimonios=()=>{

 
const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#red',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
    const [inView, setInView] = useState(false);
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

return (

<div>  
{/*Testimonios */}
{isNonMobileScreens? ( 
<Box
        style={{
          height: isNonMobileScreens?"100vh":"200vh",
          display: "flex", // Añadido para activar flexbox
          flexDirection: "column", // Establece la dirección principal como vertical
          justifyContent: "flex-start", // Centra el contenido en el eje vertical
          alignItems: "center", // Centra el contenido en el eje horizontal
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fondo2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "0px",
          textAlign: 'justify',
        }}
      >

        <Slide direction="left" triggerOnce={false} in={inView}>

          <Typography   style={{
            paddingTop: "50px",  
            textDecoration: 'none', color: 'white',   fontFamily: "'Oswald', sans-serif", fontWeight: "700"
          }} sx={{ fontWeight: 700, fontSize: isNonMobileScreens?"3.75rem":"10px", color: "white" }}>
            Testimonios de nuestros clientes
          </Typography></Slide>
        <Grid container  rowSpacing={1} padding={5} columnSpacing={{ xs: 6, sm: 10, md: 10 }}>
          <Grid item xs={20} sm={4} >
            <Item><Typography
              style={{ textAlign: 'justify', fontFamily: "'Oswald', sans-serif" }}
              sx={{ fontSize: "1.5rem", color: "white", paddingTop: "50px" }}
            > Boost your product and service's credibility by
            adding testimonials from your clients. People
            love recommendations so feedback from
            others who've tried it is invaluable.</Typography> </Item>
          </Grid>
          <Grid item xs={20} sm={4} >
            <Item><Typography
              style={{ textAlign: 'justify', fontFamily: "'Oswald', sans-serif" }} // Añadido para justificar el texto
              sx={{ fontSize: "1.5rem", color: "white", paddingTop: "50px" }}
            >Boost your product and service's credibility by
              adding testimonials from your clients. People
              love recommendations so feedback from
              others who've tried it is invaluable.</Typography></Item>
          </Grid>
          <Grid item xs={20} sm={4}>
            <Item><Typography
              style={{ textAlign: 'justify', fontFamily: "'Oswald', sans-serif" }}// Añadido para justificar el texto
              sx={{ fontSize: "1.5rem", color: "white", paddingTop: "50px" }}
            >Boost your product and service's credibility by
              adding testimonials from your clients. People
              love recommendations so feedback from
              others who've tried it is invaluable.</Typography></Item>
          </Grid>
          <Grid item xs={20} sm={4}>
            <Item><Typography sx={{ fontSize: "20px", color: "white" }} >Santa Solana Post</Typography></Item>
          </Grid>
          <Grid item xs={20} sm={4}>
            <Item><Typography sx={{ fontSize: "20px", color: "white" }}>Mariana's Luxe Travels</Typography></Item>
          </Grid>
          <Grid item xs={20} sm={4}>
            <Item><Typography sx={{ fontSize: "20px", color: "white" }}>Fairhill Journal</Typography></Item>
          </Grid>
        </Grid>

        {/* <Button sx={{ marginTop: "20px", backgroundColor: "black", borderRadius: "100px", height: "50px", width: "150px" }} variant='contained'>Contactanos</Button> */}
      </Box>
     ):(
      <div>  
      <Box
      style={{
        height: isNonMobileScreens?"100vh":"100%",
        display: "flex", // Añadido para activar flexbox
        flexDirection: "column", // Establece la dirección principal como vertical
        justifyContent: "flex-start", // Centra el contenido en el eje vertical
        alignItems: "center", // Centra el contenido en el eje horizontal
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fondo2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "50px",
        textAlign: 'justify',
      }}
    >

      <Slide direction="left" triggerOnce={false} in={inView}>

        <Typography variant={isNonMobileScreens?"h2":"h4"} style={{
          paddingTop: "50px", textAlign:"center",
          textDecoration: 'none', color: 'white',   fontFamily: "'Oswald', sans-serif", fontWeight: "700"
        }} sx={{ fontWeight: 700,  color: "white" }}>
          Testimonios de nuestros clientes
        </Typography></Slide>
      <Grid container  rowSpacing={1} padding={5} columnSpacing={{ xs: 6, sm: 10, md: 10 }}>
        <Grid item xs={20} sm={20} >
          <Item><Typography
            style={{ textAlign: 'justify', fontFamily: "'Oswald', sans-serif" }}
            sx={{ fontSize: "1.5rem", color: "white", paddingTop: "100px" }}
          > Boost your product and service's credibility by
          adding testimonials from your clients. People
          love recommendations so feedback from
          others who've tried it is invaluable.</Typography> </Item>
        </Grid>
        <Grid item xs={20} sm={20}>
          <Item><Typography sx={{ fontSize: "20px", color: "white" }} >Santa Solana Post</Typography></Item>
        </Grid>
        <Grid item xs={20} sm={20}>
          <Item><Typography
            style={{ textAlign: 'justify', fontFamily: "'Oswald', sans-serif" }} // Añadido para justificar el texto
            sx={{ fontSize: "1.5rem", color: "white", paddingTop: "100px" }}
          >Boost your product and service's credibility by
            adding testimonials from your clients. People
            love recommendations so feedback from
            others who've tried it is invaluable.</Typography></Item>
        </Grid>
        <Grid item xs={20} sm={20}>
          <Item><Typography sx={{ fontSize: "20px", color: "white" }}>Mariana's Luxe Travels</Typography></Item>
        </Grid>
        <Grid item xs={20} sm={20}>
          <Item><Typography
            style={{ textAlign: 'justify', fontFamily: "'Oswald', sans-serif" }}// Añadido para justificar el texto
            sx={{ fontSize: "1.5rem", color: "white", paddingTop: "100px" }}
          >Boost your product and service's credibility by
            adding testimonials from your clients. People
            love recommendations so feedback from
            others who've tried it is invaluable.</Typography></Item>
        </Grid>
         
         
        <Grid item xs={20} sm={20}>
          <Item><Typography sx={{ fontSize: "20px", color: "white" }}>Fairhill Journal</Typography></Item>
        </Grid>
      </Grid>

      {/* <Button sx={{ marginTop: "20px", backgroundColor: "black", borderRadius: "100px", height: "50px", width: "150px" }} variant='contained'>Contactanos</Button> */}
    </Box>  
   
    </div>
     )
    }
</div>)}
export default Testimonios;
