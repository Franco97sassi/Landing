// import { Box, Grid, Typography } from '@mui/material';
// import React from 'react';
 import icono1 from "../../assets/icono1.png";
 import icono2 from "../../assets/icono2.png";
  import whatsapp from "../../assets/t.png";

 

import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import GroupGoogleImg from "../../assets/logo1.svg"
import LogoGenFooterImg from "../../assets/logo1.svg"
import LogosImg from "../../assets/logo1.svg"
import instagramFooterImg from "../../assets/logo2.svg"
import facebookFooterImg from "../../assets/logo3.svg"
import linkedinFooterImg from "../../assets/logo4.svg"
import LogosFooterTabletImg from "../../assets/logo5.svg"
import logo from '../../assets/fondopnga.png';


import useMediaQuery from '@mui/material/useMediaQuery';


  const  Footer = () => {

const is1024 = useMediaQuery('(max-width:1024px)');
const is600 = useMediaQuery('(max-width:600px)');
const is450 = useMediaQuery('(max-width:450px)');
  return (
    <div style={{marginTop:"0px"}}>

    {is1024?(is600?
    // ------ Mobile ------
    
    <>

<Box sx={{ display: "flex", justifyContent: "center", height: "100%", maxHeight: "593px", background: "#282828"}}>
  <Box sx={{ width: "100%", maxWidth: "1440px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
    <Grid container spacing={0} justifyContent="center">
      <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "93px" }}>
{/* 
    <Box sx={{display:"flex", flexDirection:"column",alignItems:"center",   width:"100%"}}>
    

    <Typography
      variant="h6"
      style={{
        textAlign:"center",
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"40px",
        color:"#FFF",
        fontFamily: "'Oswald', sans-serif",
      }}
    >
      Contáctanos a través del   correo   desarollotechx@gmail.com
    </Typography>

    <img style={{ width:"100px", marginTop:"30px", cursor:"pointer"}} src={logo}></img>
 
    </Box> */}
        </Box>
      </Grid>

      
    
      <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "293px", maxWidth: "204px" }}>
    <Box sx={{display:"flex", flexDirection:"column", width:"100%", maxWidth:"204px", background:"", }}>
    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"17px",
        color:"#FFF",
        fontFamily: "'Oswald', sans-serif",
      }}
    >
      Seguinos en:
      <span
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '0',
          width: '100%',
          maxWidth: '206px',
          height: '3px',
          backgroundColor: 'var(--morado, #912327)',
        }}
      />
    </Typography>

    

    <Box sx={{display:"flex", alignItems:"center", width:"100%", justifyContent:"space-between"}}>
    <a href="https://www.facebook.com/profile.php?id=100093530245392"> 
<img style={{width:"27px", marginTop:"27px", marginTop:"30px", cursor:"pointer"}} src={icono2}></img></a>
<a href="https://api.whatsapp.com/send?phone=526622297062" target="_blank">
    <img style={{ width: "33px", marginTop: "33px", cursor: "pointer" }} src={whatsapp}></img>
  </a>
<a href="https://www.instagram.com/techx_mx/?hl=es"> <img style={{width:"33px", marginTop:"33px", cursor:"pointer"}} src={linkedinFooterImg}></img></a>

    </Box>

     
<Typography variant="h7" style={{fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF", marginTop:"32px",fontFamily: "'Oswald', sans-serif",}}>
Todos los Derechos Reservados © 2023
        </Typography>
    </Box>
        </Box>
      </Grid>
    </Grid>
    </Box>
</Box>
    </>
    
    :
    
    // ----- Tablet --------

    <>
    
    <Box sx={{ display: "flex", justifyContent: "center", height: "100%", maxHeight: "593px", background: "#282828"}}>
  <Box sx={{ width: "100%", maxWidth: "1440px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
    <Grid container spacing={0} justifyContent="center">
      <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "293px" }}>

    <Box sx={{display:"flex", flexDirection:"column",alignItems:"center",   width:"100%"}}>
    

    <Typography
      variant="h6"
      style={{
        textAlign:"center",
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"40px",
        color:"#FFF",
        fontFamily: "'Oswald', sans-serif",
      }}
    >
      Contáctanos a través del   correo   desarollotechx@gmail.com
    </Typography>

    <img style={{ width:"100px", marginTop:"30px", cursor:"pointer"}} src={logo}></img>
 
    </Box>
        </Box>
      </Grid>

      
    
      <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "293px", maxWidth: "204px" }}>
    <Box sx={{display:"flex", flexDirection:"column", width:"100%", maxWidth:"204px", background:"", }}>
    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"17px",
        color:"#FFF",
        fontFamily: "'Oswald', sans-serif",
      }}
    >
      Seguinos en:
      <span
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '0',
          width: '100%',
          maxWidth: '206px',
          height: '3px',
          backgroundColor: 'var(--morado, #912327)',
        }}
      />
    </Typography>

    

    <Box sx={{display:"flex", alignItems:"center", width:"100%", justifyContent:"space-between"}}>
    <a href="https://www.facebook.com/profile.php?id=100093530245392"> 
<img style={{width:"27px", marginTop:"27px", marginTop:"30px", cursor:"pointer"}} src={icono2}></img></a>
<a href="https://api.whatsapp.com/send?phone=526622297062" target="_blank">
    <img style={{ width: "33px", marginTop: "33px", cursor: "pointer" }} src={whatsapp}></img>
  </a>
<a href="https://www.instagram.com/techx_mx/?hl=es"> <img style={{width:"33px", marginTop:"33px", cursor:"pointer"}} src={linkedinFooterImg}></img></a>

    </Box>

     
<Typography variant="h7" style={{fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF", marginTop:"32px",fontFamily: "'Oswald', sans-serif",}}>
Todos los Derechos Reservados © 2023
        </Typography>
    </Box>
        </Box>
      </Grid>
    </Grid>
    </Box>
</Box>
    </>)
    
    :
    // ------ Desktop ------

    <Box sx={{display:"flex",width:"100%",flexDirection:"row", justifyContent:"center", height:"100%", maxHeight:"293px", background:"#282828", paddingBottom:"0px"}}>


    <Grid container spacing={2}>
      <Grid item xs={4} >
        <Box sx={{background:"", display:"flex",  alignItems:"center", height:"293px"}}>
    <Box sx={{display:"flex", flexDirection:"column", marginLeft:"1rem", width:"100%"}}>
    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"40px",
        color:"#FFF",
        fontFamily: "'Oswald', sans-serif",
      }}
    >
      Contáctanos a través del   correo   desarollotechx@gmail.com
    </Typography>
    <img style={{marginLeft:"83px",width:"37%", marginTop:"10px", cursor:"pointer"}} src={logo}></img>
    </Box>
        </Box>
      </Grid>





      <Grid item xs={2} sx={{marginTop:"50px"}} >
        <Box sx={{background:"",  display:"flex", flexDirection:"column",justifyContent:"center" ,alignContent:"center",textAlign:"right"  }}>
        <Typography variant="h6" style={{  fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',fontSize: '14px',position: 'relative',marginTop:"40px", color:"#FFF",fontFamily: "'Oswald', sans-serif",}}>
        Páginas Web
        </Typography>
        <Typography variant="h6" style={{fontFamily: "'Oswald', sans-serif", fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF",fontFamily: "'Oswald', sans-serif",}}>
        Aplicaciones Móviles
        </Typography>
         
        <Typography variant="h6" style={{fontFamily: "'Oswald', sans-serif", fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF",fontFamily: "'Oswald', sans-serif",}}>
        Inteligencia Artificial
        </Typography>
        <Typography variant="h6" style={{fontFamily: "'Oswald', sans-serif",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF",fontFamily: "'Oswald', sans-serif",}}>
        Ecommerce 
        </Typography>
        <Typography variant="h6" style={{fontFamily: "'Oswald', sans-serif",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF",fontFamily: "'Oswald', sans-serif",}}>
        Web Scraping 
        </Typography>
         
         </Box></Grid>
        <Grid item xs={2} sx={{marginTop:"50px"}} >       
          <Box sx={{background:"",  display:"flex",alignContent:"center", flexDirection:"column",justifyContent:"center" ,pt:5}}>
          <Typography variant="h6" style={{fontFamily: "'Oswald', sans-serif",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF",fontFamily: "'Oswald', sans-serif",}}>
        Control de Stock  
        </Typography>
         
        <Typography variant="h6" style={{fontFamily: "'Oswald', sans-serif",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF",fontFamily: "'Oswald', sans-serif",}}>
        Bots Personalizados
        </Typography>
        <Typography variant="h6" style={{fontFamily: "'Oswald', sans-serif",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF",fontFamily: "'Oswald', sans-serif",}}>
        Mantenimiento 
        </Typography>
        <Typography variant="h6" style={{fontFamily: "'Oswald', sans-serif",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF",fontFamily: "'Oswald', sans-serif",}}>
        Automatización de Procesos 
        </Typography>
        <Typography variant="h6" style={{fontFamily: "'Oswald', sans-serif",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF",fontFamily: "'Oswald', sans-serif"}}  >
        MarketPlace
        </Typography>

          
        </Box>
      </Grid>
      
      <Grid item xs={4}>
      <Box sx={{background:"", display:"flex",  alignItems:"center", height:"293px", background:"",justifyContent:"end", marginRight:"13%"}}>
    <Box sx={{display:"flex", flexDirection:"column", width:"100%", maxWidth:"204px", background:"", }}>
    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"17px",
        color:"#FFF",
        fontFamily: "'Oswald', sans-serif",
      }}
    >
      Seguinos en:
      <span
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '0',
          width: '100%',
          maxWidth: '206px',
          height: '3px',
          backgroundColor: 'var(--morado, #912327)',
        }}
      />
    </Typography>

    

    <Box sx={{display:"flex", alignItems:"center", width:"100%", justifyContent:"space-between"}}>
    <a href="https://www.facebook.com/profile.php?id=100093530245392"> 
<img style={{width:"27px", marginTop:"27px", marginTop:"30px", cursor:"pointer"}} src={icono2}></img></a>
<a href="https://api.whatsapp.com/send?phone=526622297062" target="_blank">
    <img style={{ width: "33px", marginTop: "33px", cursor: "pointer" }} src={whatsapp}></img>
  </a>
<a href="https://www.instagram.com/techx_mx/?hl=es"> <img style={{width:"33px", marginTop:"33px", cursor:"pointer"}} src={linkedinFooterImg}></img></a>

    </Box>

     
<Typography variant="h7" style={{fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF", marginTop:"32px",fontFamily: "'Oswald', sans-serif",}}>
Todos los Derechos Reservados © 2023
        </Typography>
    </Box>
        </Box>
      </Grid>
    </Grid>
    
</Box>
}

    
    
</div>
  );
};
export default Footer;