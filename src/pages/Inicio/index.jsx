import React from 'react'
import fondoInicio from "../../assets/fondoInicio.png"
import { Box, Grid, Typography } from '@mui/material'
import Proyectos from '../Proyectos';
import Servicios from '../Servicios';
import Landing from '../Landing';
const Inicio = () => {


  return (
    <div> <Box sx={{
      backgroundColor: "white"
    }}>

      <Landing />

      

      {/* <div id="proyectos"> */}
        <Proyectos />  
        {/* </div> */}
      {/* <div id="servicios">  */}
        <Servicios />  
        {/* </div> */}

    </Box>
    </div>
  )
}
 
export default Inicio