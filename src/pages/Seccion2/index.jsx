import React from 'react'
import fondoInicio from "../../assets/fondoInicio.png"
import { Box, Grid, Typography } from '@mui/material'
import Proyectos from '../Proyectos';
import Servicios from '../Servicios';
import Landing from '../Landing';
import Sobre from '../Sobre';
import Estadisticas from '../Estadisticas';
import Clientes from '../Clientes';
import Testimonios from '../Testimonios';
import Contacto from '../Contacto/Contacto';
import Nosotros from '../Nosotros';
import Tecnologias from '../Tecnologias';

// import Contacto from '../Contacto';

const Seccion2 = () => {


  return (
    <div> <Box sx={{
      backgroundColor: "white"
    }}>

     <section id="servicios">   <Servicios/></section>
       

     <section id="nosotros"> <Nosotros/></section>
       
       <Tecnologias/>
     </Box>
    </div>
  )
}
 
export default Seccion2