import { Box, Typography, Grid } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
// Importaciones de tus imágenes...
import empresa1 from '../../assets/empresa1.jpg';
import empresa2 from '../../assets/logoCruzRoja.png';
import empresa3 from '../../assets/ewq.jpg';
import empresa4 from '../../assets/parkea.jpeg';
 import empresa5 from '../../assets/cryptoLogo.png';
import empresa6 from '../../assets/qwe.jpg';
import empresa7 from '../../assets/gardenLogo.png';
import empresa8 from '../../assets/borderLogo.png';
import empresa9 from '../../assets/e.jpeg';
import empresa10 from '../../assets/wqe.jpg';

const Clientes = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const images = [empresa2,empresa3,empresa4,empresa6,empresa5,empresa7,empresa8,empresa10,empresa9 ];

  return (
    <div>  
      {/* Clientes */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height:"150vh",
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: "300px",
          background: '#333333',
          px: { xs: 2, sm: 13, md: 14, lg: 5 }, // Esto establece el padding horizontal dependiendo del tamaño de la pantalla
          py: 10, // Esto establece el padding vertical
          mx: 'auto', // Esto centra el Box en la pantalla con margenes automáticos
        }}
      >
        <Slide direction="left" triggerOnce={false} in={inView}>
          <Typography variant="h2" paddingBottom="100px" paddingTop="0px" fontWeight="700" style={{ fontFamily: 'Oswald, sans-serif', color: "white" }}>
            Nuestros Clientes
          </Typography>
        </Slide>

        <Grid container spacing={2} alignContent="center" justifyContent="center">
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Slide direction="up" in={inView} delay={index * 100}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <img
                    ref={ref}
                    src={image}
                    style={{ width: '75%', borderRadius: "20px" }}
                    alt={`Empresa ${index + 1}`}
                  />
                </div>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Clientes;
