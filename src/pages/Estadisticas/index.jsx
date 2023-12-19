import React, { useEffect, useState } from "react";
import { Box, Fade, Grid, Typography, useMediaQuery } from "@mui/material";
import { Slide, Fade as AwesomeFade } from "react-awesome-reveal";
import { styled } from '@mui/material/styles';
import sinFondo from '../../assets/sinFondo.png';

const Estadisticas = () => {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#red',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  // Estado para controlar la visibilidad de las tipografías.
  const [inView, setInView] = useState(false);
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  // Controlar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Puedes ajustar la condición de acuerdo a tu preferencia de cuando deberían aparecer las animaciones.
      if (window.scrollY > 100) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    // Event listeners
    window.addEventListener("scroll", handleScroll);

    // Limpiar event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
     <div>
      
      {/*Estadisticas */}
      {isNonMobileScreens? ( 
<div>
  <Box sx={{          height:  "100%" 
}}>

   
       <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Centrado verticalmente, teniendo en cuenta el padding
          alignItems: 'center', // Centrado horizontalmente
          background: 'black',
          paddingTop: "50px",
          paddingBottom: "100px", // Puedes ajustar el paddingBottom para equilibrar con paddingTop si es necesario
 
        }}
      >
        <Slide direction="left" triggerOnce={false} in={inView}>
          {/* Titulo */}
          <Typography
            variant={isNonMobileScreens?"h2":"h4"}
            fontWeight="700"
            style={{
              fontFamily: 'Oswald, sans-serif',
              color: "white",
              textAlign: 'center' // Asegura que el texto esté centrado horizontalmente dentro de su contenedor
            }}
          >
            Transformando tu negocio,<br />una solución tecnológica a la vez
          </Typography>
          {/* Titulo */}

        </Slide>
      </Box>
      
      <Box sx={{
        paddingBottom: "300px",
        width: '100%',
        height: isNonMobileScreens?"75vh":"100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        marginX: 'auto', // Esto centra el Box en el medio horizontalmente, manteniendo el mismo espacio en los lados
        paddingX: '0px', // Añade el mismo padding a los lados derecho e izquierdo, ajusta según sea necesario

      }}>



        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

          <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
              <AwesomeFade cascade triggerOnce={false} direction="up" in={inView} delay={150}>

                <Item>

                  <Typography sx={{ fontWeight: 900, paddingTop: "00px", fontWeight: 800, fontSize: isNonMobileScreens ?"80px":"60px", color: "white", fontFamily: 'Oswald, sans-serif' }}>   <span style={{ fontSize: "0px" }}>+</span>20</Typography>

                </Item></AwesomeFade>
            </Grid>  



            <Grid item xs={4}>
              <AwesomeFade cascade triggerOnce={false} direction="up" in={inView} delay={150}>
                <Item>

                  <Typography sx={{ fontWeight: 900, paddingTop: "00px", fontSize: isNonMobileScreens ?"80px":"60px", color: "white", fontFamily: 'Oswald, sans-serif', position: 'relative' }}>
                    14
                    <span style={{
                      position: 'absolute',
                      fontSize:isNonMobileScreens ? "60px":"40px",
                      lineHeight: '0', // Quita espacio extra de la línea
                      top: '52.5%', // Posiciona a la mitad de la altura del elemento padre
                      transform: 'translateY(-50%)', // Desplaza el elemento hacia arriba a la mitad de su altura
                    }}>%</span>
                  </Typography>
                </Item></AwesomeFade>
            </Grid>
            <Grid item xs={4}>
              <AwesomeFade cascade triggerOnce={false} direction="up" in={inView} delay={150}>
                <Item>

                  <Typography sx={{ fontWeight: 900, paddingTop: "00px", fontSize: isNonMobileScreens ?"80px":"60px", color: "white", fontFamily: 'Oswald, sans-serif' }}>180
                    <span style={{
                      position: 'relative', // Se usa para posicionar el grado relativo a su posición normal
                      top: '-0.2em', // Mueve el grado hacia arriba, ajusta según sea necesario
                      fontSize:isNonMobileScreens ? "60px":"40px", // Tamaño del grado, puede ser diferente del número
                    }}>º</span></Typography>

                </Item></AwesomeFade>
            </Grid>




            <Grid item xs={4}><AwesomeFade cascade triggerOnce={false} direction="up" in={inView} delay={600}>
              <Item>

                <Typography sx={{ fontSize: "1.5rem", color: "white", fontFamily: 'Oswald, sans-serif' }}>Empresas trabajadas con soluciones innovadoras y eficientes</Typography>
              </Item></AwesomeFade>
            </Grid>
            <Grid item xs={4}><AwesomeFade cascade triggerOnce={false} direction="up" in={inView} delay={600}>
              <Item>

                <Typography sx={{ fontSize: "1.5rem", color: "white", fontFamily: 'Oswald, sans-serif' }}>Creció el comercio electrónico en México en 2023</Typography> </Item></AwesomeFade>
            </Grid>
            <Grid item xs={4}><AwesomeFade cascade triggerOnce={false} direction="up" in={inView} delay={600}>
              <Item>
                <Typography sx={{ fontSize: "1.5rem", color: "white", fontFamily: 'Oswald, sans-serif' }}>Es el giro   que puede dar tu negocio</Typography> </Item></AwesomeFade>
            </Grid>
          </Grid>





        </div>

      </Box>
      </Box>
      </div>
      ):( 
        <div>
          <Box sx={{height:"100%"}}> 
       <Box
       sx={{
         width: '100%',
          display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center', // Centrado verticalmente, teniendo en cuenta el padding
         alignItems: 'center', // Centrado horizontalmente
         background: 'black',
         paddingTop: "50px",
         paddingBottom: "100px", // Puedes ajustar el paddingBottom para equilibrar con paddingTop si es necesario
         }}
     >
       <Slide direction="left" triggerOnce={false} in={inView}>
         {/* Titulo */}
         <Typography
           variant={isNonMobileScreens?"h2":"h3"}
           fontWeight="700"
           style={{
             fontFamily: 'Oswald, sans-serif',
             color: "white",
             textAlign: 'center' // Asegura que el texto esté centrado horizontalmente dentro de su contenedor
           }}
         >
           Transformando tu negocio,<br />una solución tecnológica a la vez
         </Typography>
         {/* Titulo */}

       </Slide>
     </Box>
     
     <Box sx={{
       paddingBottom: "300px",
       width: '100%',
       height: "90vh",
       display: 'flex',
       flexDirection: 'column',
       
       background: 'black',
       marginX: 'auto', // Esto centra el Box en el medio horizontalmente, manteniendo el mismo espacio en los lados
       paddingX: '0px', // Añade el mismo padding a los lados derecho e izquierdo, ajusta según sea necesario

     }}>



       <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

         <Grid container paddingTop="-100px" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
           <Grid item xs={15}>
             <AwesomeFade cascade triggerOnce={false} direction="up" in={inView} delay={150}>

               <Item>

                 <Typography sx={{ fontWeight: 900, paddingTop: "00px", fontWeight: 800, fontSize: isNonMobileScreens ?"80px":"60px", color: "white", fontFamily: 'Oswald, sans-serif' }}>   <span style={{ fontSize: "0px" }}>+</span>20</Typography>
                 <Typography sx={{ fontSize: "20px", color: "white", fontFamily: 'Oswald, sans-serif' }}>Empresas trabajadas con soluciones innovadoras y eficientes</Typography>

               </Item></AwesomeFade>
           </Grid>  

           <Grid item xs={15}>
             <AwesomeFade cascade triggerOnce={false} direction="up" in={inView} delay={150}>
               <Item>

                 <Typography sx={{ fontWeight: 900, paddingTop: "00px", fontSize: isNonMobileScreens ?"80px":"60px", color: "white", fontFamily: 'Oswald, sans-serif', position: 'relative' }}>
                   14
                   <span style={{
                     position: 'absolute',
                     fontSize:isNonMobileScreens ? "60px":"40px",
                     lineHeight: '0', // Quita espacio extra de la línea
                     top: '52.5%', // Posiciona a la mitad de la altura del elemento padre
                     transform: 'translateY(-50%)', // Desplaza el elemento hacia arriba a la mitad de su altura
                   }}>%</span>
                 </Typography>  <Typography sx={{ fontSize: "20px", color: "white", fontFamily: 'Oswald, sans-serif' }}>Creció el comercio electrónico en México en 2023</Typography>  
               </Item></AwesomeFade>
           </Grid>
           <Grid item xs={15}>
             <AwesomeFade cascade triggerOnce={false} direction="up" in={inView} delay={150}>
               <Item>

                 <Typography sx={{ fontWeight: 900, paddingTop: "00px", fontSize: isNonMobileScreens ?"80px":"60px", color: "white", fontFamily: 'Oswald, sans-serif' }}>180
                   <span style={{
                     position: 'relative', // Se usa para posicionar el grado relativo a su posición normal
                     top: '-0.2em', // Mueve el grado hacia arriba, ajusta según sea necesario
                     fontSize:isNonMobileScreens ? "60px":"40px", // Tamaño del grado, puede ser diferente del número
                   }}>º</span></Typography>
               
               <Typography sx={{ fontSize: "20px", color: "white", fontFamily: 'Oswald, sans-serif' }}>Es el giro   que puede dar tu negocio</Typography>
               </Item></AwesomeFade>
           </Grid> </Grid>



 
            





       </div>

     </Box>   
     </Box>

     </div>
      )
                  }
     </div>
  )
}
export default Estadisticas;
