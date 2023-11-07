import { Box, Typography, Grid } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
// Importaciones de tus imágenes...
import empresa1 from '../../assets/empresa1.jpg';
import empresa2 from '../../assets/empresa2.jpg';
import empresa3 from '../../assets/empresa3.jpg';
import empresa4 from '../../assets/empresa4.jpg';
import empresa5 from '../../assets/empresa5.jpg';
import empresa6 from '../../assets/empresa6.jpg';
import empresa7 from '../../assets/empresa7.jpg';
import empresa8 from '../../assets/empresa8.jpg';
const Clientes = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const images = [empresa1, empresa2, empresa3, empresa4, empresa5, empresa6, empresa7, empresa8];

  return (
    <div>  
      {/* Clientes */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height:"100vh",
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: "300px",
          background: '#333333',
          px: { xs: 2, sm: 3, md: 4, lg: 5 }, // Esto establece el padding horizontal dependiendo del tamaño de la pantalla
          py: 6, // Esto establece el padding vertical
          mx: 'auto', // Esto centra el Box en la pantalla con margenes automáticos
        }}
      >
        <Slide direction="left" triggerOnce={false} in={inView}>
          <Typography variant="h2" paddingBottom="50px" paddingTop="0px" fontWeight="700" style={{ fontFamily: 'Oswald, sans-serif', color: "white" }}>
            Nuestros Clientes
          </Typography>
        </Slide>

        <Grid container spacing={2} justifyContent="center" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 }, mx: 'auto', width: '100%', maxWidth: 'lg' }}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Slide direction="up" in={inView} delay={index * 100}>
                <img
                  ref={ref}
                  src={image}
                  style={{ width: '75%', borderRadius: "20px" }}
                  alt={`Empresa ${index + 1}`}
                />
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Clientes;
