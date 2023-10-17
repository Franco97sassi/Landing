import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import icono1 from "../../assets/icono1.png";
import icono2 from "../../assets/icono2.png";
import whatsapp from "../../assets/t.png";

const Footer = () => {
  return (
    <div>
      <Box sx={{
        height: "20vh",
        backgroundColor: "#1E1E1E",
        color: "white",
        // paddingTop: "10px",
        paddingLeft: "20px",
     
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
       }}>
        <Grid container   >
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-start',alignItems: 'center',marginTop:"-20px"  }}>
            <img src={icono1} alt="Logo" style={{ width: "20.97px", height: "20.97px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Typography style={{ fontFamily: 'Playfair Display, serif', fontSize: "48px" }}> TechX </Typography>
          </Grid>
          <Grid item xs={5.9} marginTop={-1} sx={{ display: 'flex', justifyContent: 'flex-start',marginTop:"-18px"   }}>
            <img src={icono2} alt="Logo" style={{ width: "20.97px", height: "20.97px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Typography style={{ fontFamily: 'Playfair Display, serif', fontSize: "16px" }}> Todos Los derechos Reservados © </Typography>
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-start',marginTop:"-4px"    }}>
            <img src={whatsapp} alt="Logo" style={{ width: "20.97px", height: "20.97px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center',marginTop:"-10px" }}>
            <Typography style={{ fontFamily: 'Playfair Display, serif', fontSize: "16px" ,paddingTop:"10px"}}> Hermosillo, Sonora, Mexico </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Footer;

