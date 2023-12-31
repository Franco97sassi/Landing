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
    <div id="inicio"> <Box sx={{
      backgroundColor: "white"
    }}> 
                 <section id="landing">   <Landing />  </section> 
         
      <Sobre />
           <Estadisticas />     
        <Clientes />   
       
     
             
                 <Testimonios/>  
                 <section id="proyectos">  <Proyectos />  </section>
     <Contacto/>      

 
    </Box>
    </div>
  )
}
 
export default Inicio