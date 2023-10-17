import React, { useEffect, useState } from 'react';
import fondoInicio from '../../assets/fondoInicio.png';
import { Box, Grid, Typography } from '@mui/material';
import './styles.css';
import { Bounce, Slide } from "react-awesome-reveal";
import about1 from '../../assets/benefit-one.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import celular from '../../assets/benefit-two.png';
import hero from '../../assets/hero.png';

const Landing = () => {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setShowText(true);
  }, []);
  const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
  return (
    <div  >
 {/* Imagen de fondo */}
      <Box     
 sx={{ flexGrow: 1, height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Grid container spacing={0}  >
          <Grid item xs={6.5} >
            <Item sx={{ paddingTop: "300px" }}    >
              <Typography style={{ textDecoration: 'none', color: 'black',fontFamily: "'Oswald', sans-serif" , fontWeight: "700" }} sx={{ fontWeight: 700, fontSize: "65px", color: "black" }}>
Creamos Soluciones Digitales              </Typography>


              <Typography sx={{ fontWeigth: "bold", fontSize: "25px",paddingTop:"20px" }}  >
                TechX es una empresa dedicada a brindar servicios de desarrollo tecnologico para empresas.

               </Typography >
            </Item>
          </Grid>
          <Grid item xs={5.5}>
            <Item >
              <img
                src={hero}
                style={{ paddingTop: "250px", width: '100%', height: '100%', objectFit: 'cover', borderRadius: "10px" }}
              />
            </Item>
          </Grid>
           
        </Grid>
      </Box>





      {/* Inicio */}
      {/* <Box
        sx={{
          height: '100vh',
          backgroundColor:"white",
          backgroundImage: `url(${fondoInicio})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          // Aplica la clase CSS de animación a la imagen de fondo
          '&.bg-pan-bl': {
            WebkitAnimation: "bg-pan-tr 8s both infinite",
                    animation: "bg-pan-tr 8s both infinite",
          }
        }}
        className="bg-pan-tr"
        Aplica la clase CSS de animación al div que contiene la imagen de fondo
       > */}

      {/* <Typography
          style={{ fontFamily: 'Playfair Display, serif' }}
          variant="h1"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '62px',
            marginBottom: '100px',
            overflow: 'hidden',
          }}
        >
          <Bounce
            cascade
            delay={1000}
          
          >
            <span>T</span>
            <span>e</span>
            <span>c</span>
            <span>h</span>
            <span>X</span>
          </Bounce>
        </Typography>   */}
      {/* <Typography className="track"
           style={{ fontFamily: 'Playfair Display, serif' }}
          variant="h1"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '62px',
            marginBottom: '100px',
            overflow: 'hidden',
          }}
        >
          Innovacion Tecnologica
        </Typography>
        <Typography className="track2"
           style={{ fontFamily: 'Playfair Display, serif' }}
          variant="h4"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '2px',
             overflow: 'hidden',
          }}
        >
          Empresa de Desarrollo de Software creando
           soluciones basadas en tecnologia y consultoria.
        </Typography>  
      </Box>*/}






       {/*Texto1 */}

      <Box>
      <Box sx={{ width: '100%', paddingTop: "300px" }}>
  <Grid container >
    <Grid item xs={6} paddingBottom={30}>
      <Item>
        <img src={about1}
          // alt={`Proyecto ${index + 1}`}
          style={{ width: '70%', height: '70%', objectFit: 'cover', borderRadius: "10px" }}
        />
      </Item>
    </Grid>
    <Grid item xs={6}>
      <Item>
        <Typography variant="h2"    fontWeight= "700"    color="black"               style={{fontFamily: 'Oswald, sans-serif',  }}
 >
          Todos me dicen que debo automatizar mi negocio. Pero por que?
        </Typography>
        {/* className="tilde" */}
        <Typography             sx={{ fontWeigth: "bold", fontSize: "20px",paddingTop:"20px" }}   
 >
           Nuestro objetivo es impulsar la transformacion digital en las empresas y ayudarlas a optimizar sus procesos a traves de soluciones tecnologicas innovadoras con un equipo altamente capacitado
          y con experiencia en diversas disciplinas tecnologicas.  </Typography>
        
      </Item>
    </Grid>
  </Grid>
</Box>





       {/*Texto2 */}

        <Box sx={{ width: '100%' }}>

          <Grid container >
            <Grid container item xs={6}>
              <Item><Typography variant="h2"   fontWeight= "700"  color="black"               style={{fontFamily: 'Oswald, sans-serif',  }}
  >     Que hacemos?

              </Typography >
                 
               
         <Typography className='tilde'     fontWeight= "700"       sx={{paddingTop:"20px"} }             
 >
Ofrecemos servicios personalizados a las necesidades basicas de cada cliente.        </Typography>
        <Typography className='tilde'     fontWeight= "700"    color="gray"            
 >
 Ya sea que necesites desarrollar una aplicacion movil,una plataforma web o implementar sistemas de automatizacion,en techX contamos con la experiencia y el conocimiento para hacerlo posible.        </Typography>
        <Typography className='tilde'     fontWeight= "700"    color="gray"              
 >
          Estamos comprometidos con la excelencia en el servicio y nos esforzamos por brindar soluciones eficientes que impulsen tu exito empresarial en el mundo digital.
        </Typography>
                {/* <Typography variant="h4"   >        About
                </Typography >
                <Typography variant="body1" >  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  blanditiis tenetur unde suscipit. </Typography> */}
              </Item>
            </Grid>
            <Grid item xs={6} display="flex" flexDirection="row" justifyContent="center" paddingTop="100px">
              <Item><img src={celular}
                // alt={`Proyecto ${index + 1}`}
                style={{ width: '100%', height: '70%', objectFit: 'cover', borderRadius: "10px" }}
              /></Item>
            </Grid>
          </Grid>
        </Box>





          {/*Video */}

        <Box 
    sx={{ 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',paddingTop:"300px" 

    }}
>
<Typography sx={{ fontFamily: 'Oswald, sans-serif',fontWeight: 700, fontSize: "32px", color: "black" }}                 style={{fontFamily: 'Oswald, sans-serif',  }}
>
Transformando tu negocio,una solucion tecnologica a la vez    </Typography>
    <Typography  style={{  paddingTop:"20px" }} sx={{fontWeigth:"normal",fontSize:"16px",textAlign:"center",width:"75%"}} variant="body2">
    <Typography sx={{color:"gray",  fontWeight: 400, fontSize: "18px" }} className='tilde'>
Hemos trabajado con mas de 20 empresas
    </Typography>
    <Typography sx={{color:"gray",   fontWeight: 400, fontSize: "18px" }} className='tilde'>
Formamos parte del crecimiento del E-commerce en todo mexico
    </Typography>
    <Typography sx={{color:"gray", fontSize: "18px",marginBottom:"20px" }} className='tilde'>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veniam in distinctio optio eum perspiciatis obcaecati? Deleniti, vel expedita commodi nobis omnis modi! Natus consectetur vitae quaerat laborum delectus quibusdam! 
    </Typography>

    </Typography>
    <iframe      
        width="500" 
        height="300" 
        src="https://www.youtube.com/embed/oAXOIUlC1T0" 
        // title="¿Como es una empresa de software por dentro? - Jalasoft" 
        frameborder="10"  style={{border: "5px solid black",        borderRadius: "20px"  // Bordes redondeados
      }} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
    ></iframe>
</Box>






</Box>



    </div>
  );
};

export default Landing;
