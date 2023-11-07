import { Box, Grid, Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import imcel from '../../assets/imcel.png';
import logo from '../../assets/logo.png';

const Sobre = () => {

  const Item = styled("div")(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  }));
  const [inView, setInView] = useState(false);

  return (
    <div>
    <Box sx={{ background: 'white' }}>
    <Slide direction="left" triggerOnce={false} in={inView}>
          <Box sx={{ paddingLeft: "100px", paddingTop: "00px", paddingBottom: "20px", marginTop: "100px" }}>
            <Typography variant="h4" sx={{ marginTop: "00px",fontFamily: 'Oswald, sans-serif', fontWeight: "700", color: "black" }}>
              TechX
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: 'Oswald, sans-serif', fontWeight: "700", color: "black" }}>
              Sobre Nosotros
            </Typography>
          </Box>
        </Slide>
      <Box sx={{ width: '100%', height: "100vh" }}>
        <Grid container spacing={20} sx={{ height: '100%' }}>
          <Grid item xs={12} md={6}>
            <Item>
            <Slide direction="right" triggerOnce={false} in={inView}>

              {/* Se disminuye el justifyContent para subir el texto */}
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: "100px", height: '100%' }}>
                <Typography sx={{ color: "black", fontSize: "18px", fontFamily: 'Oswald, sans-serif', maxWidth: "600px", paddingTop: "20px" }}>
                  Somos una empresa de desarrollo de software.<br /> Contamos con <span style={{ fontWeight: "bold" }}>desarrolladores capacitados en diversos requerimientos</span>.<br /> Nos enfocamos en <span style={{ fontWeight: "bold" }}>brindar soluciones tecnológicas a empresas que buscan innovación tecnológica, automatización y optimización en sus operaciones diarias</span>.
                </Typography>
              </Box>
              </Slide>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              {/* Se disminuye el justifyContent para subir la imagen */}
              <Box sx={{marginTop:"-70px", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img src={imcel} alt="Imagen" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: "10px" }} />
 
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </div>
  

  );
}

export default Sobre;
