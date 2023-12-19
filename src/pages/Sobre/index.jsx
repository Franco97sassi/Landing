import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import imcel from '../../assets/fondoSobre.png';
import logo from '../../assets/logo.png';

const Sobre = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 600px)');

  const Item = styled("div")(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),

    textAlign: isNonMobileScreens ? 'justify' : 'center',
    color: theme.palette.text.secondary,
  }));
  const [inView, setInView] = useState(false);

  return (
    // <div>
    //   <Box sx={{ background: 'white' }}>
    //     <Slide direction="left" triggerOnce={false} in={inView}>
    //       <Box sx={{ paddingLeft: isNonMobileScreens ? "100px" : "0px", textAlign: isNonMobileScreens ? "left" : "center", paddingBottom: "20px", marginTop: "100px" }}>
    //         <Typography variant="h4" sx={{ fontFamily: 'Oswald, sans-serif', fontWeight: "700", color: "black" }}>
    //           TechX
    //         </Typography>
    //         <Typography variant="h2" sx={{ fontFamily: 'Oswald, sans-serif', fontWeight: "700", color: "black" }}>
    //           Sobre Nosotros
    //         </Typography>
    //       </Box>
    //     </Slide>
    //     <Box sx={{ width: '100%', height: isNonMobileScreens ? "100vh" : "125vh" }}>
    //       {/* <Grid container spacing={20} sx={{ height: '100%' }}> */}
    //       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

    //         <Grid item xs={15} md={6}>
    //           <Item>
    //             <Slide direction="right" triggerOnce={false} in={inView}>
    //               <Box sx={{ zIndex: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: isNonMobileScreens ? "100px" : "0px", height: '100%' }}>
    //                 <Typography sx={{  color: "black", fontSize: "18px", fontFamily: 'Oswald, sans-serif', paddingTop: "20px" }}>
    //                   Somos una empresa de desarrollo de software.<br /> Contamos con <span style={{ fontWeight: "bold" }}>desarrolladores capacitados en diversos requerimientos</span>.<br /> Nos enfocamos en <span style={{ fontWeight: "bold" }}>brindar soluciones tecnológicas a empresas que buscan innovación tecnológica, automatización y optimización en sus operaciones diarias</span>.
    //                 </Typography>
    //               </Box>
    //             </Slide>
    //           </Item>
    //         </Grid>
    //         <Grid     item xs={10} sm={10} md={6}>
    //           <Item>
    //             <Box sx={{
    //               zIndex: 1,
    //               marginTop: isNonMobileScreens ? "0px" : "-10rem",
    //               marginLeft: isNonMobileScreens ? "10rem" : "2rem",
    //               position: 'relative',
    //               display: 'flex',
    //               flexDirection:"column",
    //               justifyContent: 'center', // Centra horizontalmente en el contenedor Box
    //               alignItems: 'center', // Centra verticalmente en el contenedor Box
    //               height: '100%' // Asegura que el Box ocupe todo el espacio disponible en altura
    //             }}>
    //               <img
    //                 src={imcel}
    //                 alt="Imagen"
    //                 style={{
    //                   marginLeft: isNonMobileScreens ? "-4rem" : "2rem",
    //                   width: '100%', // La imagen ocupa todo el ancho del Box
    //                   height: '100%', // La altura de la imagen se ajusta automáticamente
    //                   objectFit: 'cover', // La imagen cubrirá todo el espacio disponible, recortándose según sea necesario
    //                   borderRadius: "10px" // Bordes redondeados para la imagen
    //                 }}
    //               />
    //             </Box>
    //           </Item>
    //         </Grid>

    //       </Grid>
    //     </Box>
    //   </Box>
    // </div>
    <div>
    <Box sx={{ background: 'white' }}>
      {/* <Slide direction="left" triggerOnce={false} in={inView}>
        <Box sx={{ paddingLeft: isNonMobileScreens ? "100px" : "0px", textAlign: isNonMobileScreens ? "left" : "center", paddingBottom: "20px", marginTop: "100px" }}>
          <Typography variant="h4" sx={{ fontFamily: 'Oswald, sans-serif', fontWeight: "700", color: "black" }}>
            TechX
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: 'Oswald, sans-serif', fontWeight: "700", color: "black" }}>
            Sobre Nosotros
          </Typography>
        </Box>
      </Slide> */}
      <Box >
        {/* <Grid container spacing={20} sx={{ height: '100%' }}> */}
        <Grid container   padding={10}  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={12} sm={6} >
            <Item>
              <Slide direction="right" triggerOnce={false} in={inView}>
                <Box >
                <Slide direction="left" triggerOnce={false} in={inView}>
        <Box  >
          <Typography variant="h3" sx={{ fontFamily: 'Oswald, sans-serif', fontWeight: "700", color: "black",paddingTop:isNonMobileScreens? "-50px":"0px",  }}>
            TechX
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: 'Oswald, sans-serif', fontWeight: "700", color: "black" }}>
            Sobre Nosotros
          </Typography>
        </Box>
      </Slide>
                  <Typography sx={{  color: "black", fontSize:isNonMobileScreens? "1.5rem":"1rem", fontFamily: 'Oswald, sans-serif' }}>
                    Somos una empresa de desarrollo de software.<br /> Contamos con <span style={{ fontWeight: "bold" }}>desarrolladores capacitados en diversos requerimientos</span>.<br /> Nos enfocamos en <span style={{ fontWeight: "bold" }}>brindar soluciones tecnológicas a empresas que buscan innovación tecnológica, automatización y optimización en sus operaciones diarias</span>.
                  </Typography>
                </Box>
              </Slide>
            </Item>
          </Grid>
          <Grid     item xs={12} sm={6}  >
            <Item>
              {/* <Box sx={{
                zIndex: 1,
                marginTop: isNonMobileScreens ? "0px" : "-10rem",
                marginLeft: isNonMobileScreens ? "10rem" : "2rem",
                position: 'relative',
                display: 'flex',
                flexDirection:"column",
                justifyContent: 'center', // Centra horizontalmente en el contenedor Box
                alignItems: 'center', // Centra verticalmente en el contenedor Box
                height: '100%' // Asegura que el Box ocupe todo el espacio disponible en altura
              }}> */}
                <img
                  src={imcel}
                  alt="Imagen"
                  style={{
                    // marginLeft: isNonMobileScreens ? "-4rem" : "2rem",
                    width: '100%', // La imagen ocupa todo el ancho del Box
                    height: '100%', // La altura de la imagen se ajusta automáticamente
                    objectFit: 'cover', // La imagen cubrirá todo el espacio disponible, recortándose según sea necesario
                    borderRadius: "10px" // Bordes redondeados para la imagen
                  }}
                />
              {/* </Box> */}
            </Item>
          </Grid>

        </Grid>
      </Box>
    </Box>
  </div>

  );
}

export default Sobre;
