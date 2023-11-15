import React, { useEffect, useState } from 'react';
import fondoInicio from '../../assets/fondoInicio.png';
import fondo from '../../assets/fondo.png';
import Trigger from 'react-scroll-trigger';
import { Box, Button, Grid, Typography,Fade } from '@mui/material';
import './styles.css';
import { Bounce, Slide } from "react-awesome-reveal";
import about1 from '../../assets/benefit-one.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import celular from '../../assets/benefit-two.png';
import hero from '../../assets/hero.png';
import empresa1 from '../../assets/empresa1.jpg';
import empresa2 from '../../assets/empresa2.jpg';
import empresa3 from '../../assets/empresa3.jpg';
import empresa4 from '../../assets/empresa4.jpg';
import empresa5 from '../../assets/empresa5.jpg';
import empresa6 from '../../assets/empresa6.jpg';
import empresa7 from '../../assets/empresa7.jpg';
import empresa8 from '../../assets/empresa8.jpg';
import fondoNuevo from "../../assets/fondoNuevo.jpg"
import fondo2 from "../../assets/fondo2.jpg"
import sobreN from "../../assets/img9.jpg"
import logo from "../../assets/fondopnga.png"
import sinFondo from '../../assets/sinFondo.png';

import Stack from '@mui/material/Stack';
 import {    IconButton } from '@material-ui/core';




const Landing = () => {
  const [inView, setInView] = useState(false);

  const onEnterViewport = () => {
    setInView(true);
  };

  const onExitViewport = () => {
    setInView(false);
  };

  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#red',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [showBienvenido, setShowBienvenido] = useState(false);
  const [showTechX, setShowTechX] = useState(false);

  useEffect(() => {
    // Establece un temporizador para cambiar el estado y mostrar "Bienvenido" después de 1 segundo
    const timerBienvenido = setTimeout(() => setShowBienvenido(true), 1000);
    // Establece un temporizador para cambiar el estado y mostrar "TechX" después de 1 segundo
    const timerTechX = setTimeout(() => setShowTechX(true), 1000);

    return () => {
      clearTimeout(timerBienvenido);
      clearTimeout(timerTechX);
    };
  }, []);
  return (
    <div  >
      {/* Imagen de fondo */}
  
      <Box style={{ height:"100vh",backgroundImage: `url(${fondoNuevo})`,
       backgroundRepeat:"no-repeat", backgroundSize:"cover",
       display: "flex",  // Activamos Flexbox
    flexDirection: "column",  // Alineamos los elementos en columna
    justifyContent: "center",  // Centramos verticalmente
    alignItems: "center"  // Centramos horizontalmente
      }}
    sx={{
      minHeight: '100vh',
      // paddingLeft:"500px",
      
     }}>
        {/* <Fade in={showBienvenido} timeout={500}>
        <Typography sx={{
          fontSize: "40px",
          color: 'white',
          fontFamily: "'Oswald', sans-serif",
          letterSpacing: "5px"
        }}>
          Bienvenido
        </Typography>
      </Fade> */}
<Slide direction="left" triggerOnce={false} in={inView}>
   <Typography style={{
            paddingTop: "25px",
            textDecoration: 'none', color: 'white', fontSize: "75px", fontFamily: "'Oswald', sans-serif", fontWeight: "700"
          }} sx={{ fontWeight: 700, fontSize: "100px", color: "black" }}>
            Creamos Soluciones Digitales
          </Typography></Slide>
          <Fade in={showTechX} timeout={500}>
        <Typography sx={{
          letterSpacing: "5px",
          fontSize: "40px",
          paddingTop: "20px",
          color: 'white',
          fontFamily: "'Oswald', sans-serif"
        }}>
          TechX
        </Typography>
      </Fade>
          {/* <Button sx={{ marginTop: "20px", backgroundColor: "black", borderRadius: "100px", height: "50px", width: "150px" }} variant='contained'>Contactanos</Button> */}
      </Box>
     


      {/*Sobre Nosotros */}
      <Box container sx={{ background: 'linear-gradient(to right, #808080, #FFFFFF)',   }}>
  <Box sx={{ width: '100%', paddingTop: "50px", height: "100vh" }}>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Item>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Slide direction="left" triggerOnce={false} in={inView}>
              <Typography variant="h2" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: "700", color: "black", marginBottom: '50px', alignSelf: 'center' }}>
                Sobre Nosotros
              </Typography>
            </Slide>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={sinFondo} style={{ width: '50%', height: '50%', objectFit: 'contain', borderRadius: "10px" }} />
            </Box>
          </Box>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <Box sx={{ display: 'flex', justifyContent: 'flexStart', alignItems: 'center', height: '100%' }}>
            <Typography sx={{color:"black", paddingTop:"150px" , fontSize: "18px", textAlign: 'left',fontFamily: 'Oswald, sans-serif' }}>
              TechX es una empresa dedicada al desarrollo tecnológico, ofreciendo soluciones personalizadas para empresas,
              como creación de software, páginas web, automatización y programación. Su equipo altamente capacitado y con 
              experiencia en diversas disciplinas tecnológicas se enfoca en impulsar la transformación digital en las empresas 
              y optimizar sus procesos. TechX se compromete a brindar soluciones eficientes y personalizadas que impulsen el éxito 
              empresarial en el mundo digital.
            </Typography>
          </Box>
        </Item>
      </Grid>
    </Grid>
  </Box>
</Box>




      


      {/*Estadisticas */}

      <Box
  sx={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centrado verticalmente, teniendo en cuenta el padding
    alignItems: 'center', // Centrado horizontalmente
    background: '#333333',
    paddingTop: "50px",
    paddingBottom: "0px", // Puedes ajustar el paddingBottom para equilibrar con paddingTop si es necesario
  }}
>
  <Slide direction="left" triggerOnce={false} in={inView}>
    <Typography 
      variant="h2" 
      fontWeight="700"   
      style={{
        fontFamily: 'Oswald, sans-serif',
        color: "white",
        textAlign: 'center' // Asegura que el texto esté centrado horizontalmente dentro de su contenedor
      }}
    >  
      Transformando tu negocio,<br />una solución tecnológica a la vez
    </Typography>
  </Slide>
</Box>





 
<Box sx={{
  paddingBottom: "100px",
  width: '100%',
  height: "100vh",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#333333',
  marginX: 'auto', // Esto centra el Box en el medio horizontalmente, manteniendo el mismo espacio en los lados
  paddingX: '16px', // Añade el mismo padding a los lados derecho e izquierdo, ajusta según sea necesario
}}>

<div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}> 
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item>
            <Typography   sx={{fontWeight: 900,paddingTop:"100px",fontWeight: 800,fontSize:"80px",color:"white",fontFamily: 'Oswald, sans-serif'}}>   <span style={{ fontSize: "60px" }}>+</span>20</Typography>
             </Item>
        </Grid>
        
        <Grid item xs={4}>
          <Item> <Typography sx={{ fontWeight: 900,paddingTop: "100px", fontSize: "80px", color: "white", fontFamily: 'Oswald, sans-serif', position: 'relative' }}>
        14
        <span style={{ 
          position: 'absolute',
          fontSize: "60px",
          lineHeight: '0', // Quita espacio extra de la línea
          top: '72.5%', // Posiciona a la mitad de la altura del elemento padre
          transform: 'translateY(-50%)', // Desplaza el elemento hacia arriba a la mitad de su altura
        }}>%</span>
      </Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography   sx={{fontWeight: 900,paddingTop:"100px",fontSize:"80px",color:"white",fontFamily: 'Oswald, sans-serif'}}>180
            <span style={{ 
        position: 'relative', // Se usa para posicionar el grado relativo a su posición normal
        top: '-0.2em', // Mueve el grado hacia arriba, ajusta según sea necesario
        fontSize: "60px", // Tamaño del grado, puede ser diferente del número
      }}>º</span></Typography>
 
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {/* <Typography   sx={{fontSize:"20px",color:"white",fontFamily: 'Oswald, sans-serif'}} >Son las empresas  con las que hemos trabajado</Typography> */}
            <Typography   sx={{fontSize:"20px",color:"white",fontFamily: 'Oswald, sans-serif'}} >Empresas trabajadas con soluciones innovadoras y eficientes</Typography>

          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography  sx={{fontSize:"20px",color:"white",fontFamily: 'Oswald, sans-serif'}}>Creció el comercio electrónico en México en 2023</Typography></Item>
        </Grid>
        <Grid item xs={4}> 
          <Item><Typography   sx={{fontSize:"20px",color:"white",fontFamily: 'Oswald, sans-serif'}}>Es el giro   que puede dar tu negocio</Typography></Item> 
        </Grid>
      </Grid>
      </div>

    </Box>






    <Box
  sx={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
    paddingTop: "300px",
    background: 'linear-gradient(to right, #FFFFFF, #808080)', 
    padding: "45px"
  }}
>  
  <Slide direction="left" triggerOnce={false} in={inView}>
    <Typography variant="h2" paddingBottom="120px"  paddingTop="50px"  fontWeight="700" style={{ fontFamily: 'Oswald, sans-serif', color:"black" }}>
      Nuestros Clientes
    </Typography>
  </Slide>
  
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '20px', // Aquí puedes ajustar el espacio entre las imágenes como desees.
    }}
  >
    <img src={empresa1} style={{width: '23%'}} />
    <img src={empresa2} style={{width: '23%'}} />
    <img src={empresa3} style={{width: '23%'}} />
    <img src={empresa4} style={{width: '23%'}} />
    <img src={empresa5} style={{width: '23%'}} />
    <img src={empresa6} style={{width: '23%'}} />
    <img src={empresa7} style={{width: '23%'}} />
    <img src={empresa8} style={{width: '23%'}} />
  </Box>

</Box>
<Box
  style={{ 
    height: "100vh",
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

   <Typography  variant="h2" style={{
            paddingTop: "50px",
            textDecoration: 'none', color: 'white', fontSize: "75px", fontFamily: "'Oswald', sans-serif", fontWeight: "700"
          }} sx={{ fontWeight: 700, fontSize: "100px", color: "white" }}>
           Testimonios de nuestros clientes
          </Typography></Slide>
          <Grid container rowSpacing={1} padding={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4} >
          <Item><Typography
          style={{ textAlign: 'justify',fontFamily: "'Oswald', sans-serif" }} 
          sx={{ fontSize: "15px", color: "white", paddingTop: "100px" }} 
        > Boost your product and service's credibility by
adding testimonials from your clients. People
love recommendations so feedback from
others who've tried it is invaluable.</Typography> </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography
          style={{ textAlign: 'justify',fontFamily: "'Oswald', sans-serif" }} // Añadido para justificar el texto
          sx={{ fontSize: "15px", color: "white", paddingTop: "100px" }}
        >Boost your product and service's credibility by
adding testimonials from your clients. People
love recommendations so feedback from
others who've tried it is invaluable.</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography
          style={{ textAlign: 'justify',fontFamily: "'Oswald', sans-serif" }}// Añadido para justificar el texto
          sx={{ fontSize: "15px", color: "white", paddingTop: "100px" }}
        >Boost your product and service's credibility by
adding testimonials from your clients. People
love recommendations so feedback from
others who've tried it is invaluable.</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography   sx={{fontSize:"20px", color: "white" }} >Santa Solana Post</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography  sx={{fontSize:"20px", color: "white" }}>Mariana's Luxe Travels</Typography></Item>
        </Grid>
        <Grid item xs={4}> 
          <Item><Typography   sx={{fontSize:"20px", color: "white" }}>Fairhill Journal</Typography></Item> 
        </Grid>
      </Grid>
           
          {/* <Button sx={{ marginTop: "20px", backgroundColor: "black", borderRadius: "100px", height: "50px", width: "150px" }} variant='contained'>Contactanos</Button> */}
      </Box>



    </div>
  );
};

export default Landing;
