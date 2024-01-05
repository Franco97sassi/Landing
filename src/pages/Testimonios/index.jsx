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
          height: isNonMobileScreens?"100%":"200vh",
          display: "flex", // Añadido para activar flexbox
          flexDirection: "column", // Establece la dirección principal como vertical
          justifyContent: "center", // Centra el contenido en el eje vertical
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
              sx={{ fontSize: "1rem", color: "white", paddingTop: "50px" }}
            >  "Estos chicos realmente hacen magia; logran transformar ideas complejas en soluciones reales en un tiempo sorprendentemente corto. Lo que más me impresiona es la calidad del trabajo que entregan. Cada proyecto que hemos emprendido juntos ha superado mis expectativas, no solo en términos de funcionalidad y eficiencia, sino también en diseño y facilidad de uso. Es raro encontrar un equipo que combine habilidad técnica, creatividad y un compromiso inquebrantable con la excelencia. TechX no solo cumple con estos criterios, sino que los supera constantemente."</Typography> </Item>
          </Grid>
          <Grid item xs={20} sm={4} >
            <Item><Typography
              style={{ textAlign: 'justify', fontFamily: "'Oswald', sans-serif" }} // Añadido para justificar el texto
              sx={{ fontSize: "1rem", color: "white", paddingTop: "50px" }}
            >"Desde el primer momento, quedé impresionado por la capacidad del equipo de TechX para realizar tareas impresionantes en un plazo muy breve, entregando soluciones de alta calidad que pocos en la industria pueden igualar, algo verdaderamente asombroso. Lo que realmente distingue a TechX es su excepcional servicio al cliente; en cada etapa del proyecto, me sentí valorado y escuchado, con respuestas rápidas, atención personalizada y un compromiso genuino con la satisfacción del cliente, destacando en un mercado competitivo. Cada proyecto desarrollado juntos ha sido una muestra de innovación y excelencia técnica."</Typography></Item>
          </Grid>
          <Grid item xs={20} sm={4}>
            <Item><Typography
              style={{ textAlign: 'justify', fontFamily: "'Oswald', sans-serif" }}// Añadido para justificar el texto
              sx={{ fontSize: "1rem", color: "white", paddingTop: "50px" }}
            > "Mi experiencia con TechX ha sido excepcional en todos los aspectos. Desde nuestro primer proyecto juntos, me impresionó profundamente su habilidad para ofrecer soluciones tecnológicas de vanguardia, integrando lo último en inteligencia artificial y automatización de una manera verdaderamente fantástica. Lo que realmente marca la diferencia en TechX es su capacidad para hacer accesible esta tecnología avanzada a precios muy competitivos. En cada interacción, he encontrado un equipo que no solo es altamente competente y eficiente, sino también increíblemente dedicado a entender y satisfacer las necesidades específicas de sus clientes."</Typography></Item>
          </Grid>
          <Grid item xs={20} sm={4}>
            <Item><Typography sx={{ fontSize: "20px", color: "white" }} >- Todo Floral</Typography></Item>
          </Grid>
          <Grid item xs={20} sm={4}>
            <Item><Typography sx={{ fontSize: "20px", color: "white" }}>- E-Ndustry</Typography></Item>
          </Grid>
          <Grid item xs={20} sm={4}>
            <Item><Typography sx={{ fontSize: "20px", color: "white" }}>- Proveedora de las Artes Gráficas</Typography></Item>
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
          > "Estos chicos realmente hacen magia; logran transformar ideas complejas en soluciones reales en un tiempo sorprendentemente corto. Lo que más me impresiona es la calidad del trabajo que entregan. Cada proyecto que hemos emprendido juntos ha superado mis expectativas, no solo en términos de funcionalidad y eficiencia, sino también en diseño y facilidad de uso. Es raro encontrar un equipo que combine habilidad técnica, creatividad y un compromiso inquebrantable con la excelencia. TechX no solo cumple con estos criterios, sino que los supera constantemente."</Typography> </Item>
        </Grid>
        <Grid item xs={20} sm={20}>
          <Item><Typography sx={{ fontSize: "20px", color: "white" }} >- Todo Floral</Typography></Item>
        </Grid>
        <Grid item xs={20} sm={20}>
          <Item><Typography
            style={{ textAlign: 'justify', fontFamily: "'Oswald', sans-serif" }} // Añadido para justificar el texto
            sx={{ fontSize: "1.5rem", color: "white", paddingTop: "100px" }}
          >"Desde el primer momento, quedé impresionado por la capacidad del equipo de TechX para realizar tareas impresionantes en un plazo muy breve, entregando soluciones de alta calidad que pocos en la industria pueden igualar, algo verdaderamente asombroso. Lo que realmente distingue a TechX es su excepcional servicio al cliente; en cada etapa del proyecto, me sentí valorado y escuchado, con respuestas rápidas, atención personalizada y un compromiso genuino con la satisfacción del cliente, destacando en un mercado competitivo. Cada proyecto desarrollado juntos ha sido una muestra de innovación y excelencia técnica."</Typography></Item>
        </Grid>
        <Grid item xs={20} sm={20}>
          <Item><Typography sx={{ fontSize: "20px", color: "white" }}>- E-Ndustry</Typography></Item>
        </Grid>
        <Grid item xs={20} sm={20}>
          <Item><Typography
            style={{ textAlign: 'justify', fontFamily: "'Oswald', sans-serif" }}// Añadido para justificar el texto
            sx={{ fontSize: "1.5rem", color: "white", paddingTop: "100px" }}
          >"Mi experiencia con TechX ha sido excepcional en todos los aspectos. Desde nuestro primer proyecto juntos, me impresionó profundamente su habilidad para ofrecer soluciones tecnológicas de vanguardia, integrando lo último en inteligencia artificial y automatización de una manera verdaderamente fantástica. Lo que realmente marca la diferencia en TechX es su capacidad para hacer accesible esta tecnología avanzada a precios muy competitivos. En cada interacción, he encontrado un equipo que no solo es altamente competente y eficiente, sino también increíblemente dedicado a entender y satisfacer las necesidades específicas de sus clientes."</Typography></Item>
        </Grid>
         
         
        <Grid item xs={20} sm={20}>
          <Item><Typography sx={{ fontSize: "20px", color: "white" }}>- Proveedora de las Artes Gráficas</Typography></Item>
        </Grid>
      </Grid>

      {/* <Button sx={{ marginTop: "20px", backgroundColor: "black", borderRadius: "100px", height: "50px", width: "150px" }} variant='contained'>Contactanos</Button> */}
    </Box>  
   
    </div>
     )
    }
</div>)}
export default Testimonios;
