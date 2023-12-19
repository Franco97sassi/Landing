import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Grid, Typography, Fade, useMediaQuery } from '@mui/material';
import './styles.css';
import { Slide } from "react-awesome-reveal";
 
import fondoNuevo from "../../assets/fondoNuevo.jpg"
 



const Landing = () => {
  const [inView, setInView] = useState(false);
  // const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const xs = useMediaQuery('(max-width: 600px)');

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


  // const [showTitle, setShowTitle] = useState(true); // Controla la visibilidad del título.
  const [showText, setShowText] = useState(false); // Controla la visibilidad del texto debajo del título.
  useEffect(() => {
    // Aquí deberías tener tu lógica que determina cuando el título está en vista, por ejemplo, usando Intersection Observer.
    // Establece inView a true cuando el título aparece en la pantalla.
    setInView(true);
  }, []);
  useEffect(() => {
    // Suponiendo que inView se convierte en true cuando el título entra en la vista y desencadena la animación del título.
    if (inView) {
      const timer = setTimeout(() => {
        setShowText(true); // Activa la animación de Typography después de 500ms.
      }, 500); // El tiempo de espera debería ser el tiempo que toma la animación del título.

      return () => clearTimeout(timer);
    }
  }, [inView]);
  const [isVisible, setIsVisible] = useState({});
  // Crear refs para cada elemento que quieras observar
  const refs = {
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
    // ... y así sucesivamente para cada elemento que necesites observar
  };

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        setIsVisible((prevVisible) => ({
          ...prevVisible,
          [target.dataset.ref]: isIntersecting
        }));
      });
    };

    const options = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, options);

    // Asociamos el observador con cada ref
    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Limpiar al desmontar
    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div id="landing"  >
      {/* Imagen de fondo */}

      <Box style={{
        height: "100vh",
        backgroundImage: `url(${fondoNuevo})`,
        backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
        display: "flex",  // Activamos Flexbox
        flexDirection: "column",  // Alineamos los elementos en columna
        justifyContent: "center",  // Centramos verticalmente
        // alignItems: "center"   // Centramos horizontalmente
       }}
     
      >

        <Fade in={showTechX} timeout={500}>
          <Typography sx={{
            letterSpacing: "5px",
            fontSize: xs ? "3rem" : "3.5rem",
            paddingTop: xs ? "0rem" : "0rem",
            color: 'white',
            fontFamily: "'Oswald', sans-serif",
            fontWeight: "1000",
            // width: "100%", 
             textAlign:    "center",
          }}>
            TechX
          </Typography>

        </Fade>
        <Slide direction="left" triggerOnce={false} in={inView}>
          <Typography style={{
             textAlign:   "center",
            textDecoration: 'none', 
            color: 'white',
             fontSize: xs ? "4.5rem" : "5.5rem", 
             fontFamily: "'Oswald', sans-serif",
              fontWeight: "700"
          }} >
            Creamos Soluciones Digitales
          </Typography>
        </Slide>

      </Box>

    </div>
  );
};

export default Landing;
