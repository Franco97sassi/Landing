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

// import Contacto from '../Contacto';

const Inicio = () => {


  return (
    <div> <Box sx={{
      backgroundColor: "white"
    }}>

      <Landing />
      <Sobre />
       <Estadisticas />  
      <Clientes />
      {/* <div id="proyectos"> */}
               <Testimonios/>

        <Proyectos />  
        <Contacto/>
         {/* </div> */}
      {/* <div id="servicios">  */}
        {/* <Servicios />   */}
        {/* </div> */}
         {/* <Contacto/>  */}
    </Box>
    </div>
  )
}
 
export default Inicio