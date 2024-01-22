import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";

import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import icono2 from "../../assets/icono2.png";
import linkedinFooterImg from "../../assets/logo4.svg";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";

const Contacto = () => {
  const keyframes = `@keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes scale-up {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(2.5);
    }
  }
  }`;

  const form = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [color, setColor] = useState("green");
  const [bg, setBg] = useState('green');
  const [circle, setCircle] = useState("10px solid white")
  const [border, setBorder] = useState('10px solid transparent')
  

  const [colorPalomita, setColorPalomita] = useState('white')

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [commentRows, setCommentRows] = useState(4);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Limpiar errores al cambiar el valor del campo
    setErrors({
      ...errors,
      [name]: null,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (formData.user_name.trim() === "") {
      newErrors.user_name = "El nombre es obligatorio";
      isValid = false;
    }

    // Validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      newErrors.user_email = "Ingresa un correo electrónico válido";
      isValid = false;
    }

    // Validar los comentarios
    if (formData.message.trim() === "") {
      newErrors.message = "Los comentarios son obligatorios";
      isValid = false;
    }

    // Actualizar el estado de los errores
    setErrors(newErrors);

    return isValid;
  };

  const handleCommentChange = (event) => {
    setFormData({
      ...formData,
      message: event.target.value,
    });
    const text = event.target.value;
    const lines = text.split("\n").length;
    setCommentRows(Math.max(4, lines)); // Asegura un mínimo de 4 filas
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validar el formulario antes de enviarlo
    if (validateForm()) {
      setColor("green");
      setOpenSuccessSnackbar(true);
     
      emailjs
        .sendForm(
          "service_6fxw7cd",
          "template_3w7v272",
          form.current,
          "m4gMqZXADix1JcttU"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setIsSubmitted(true);
      setTimeout(()=> {
        setBg('white')
  
      },2400)

      setTimeout(()=> {
  
        setColor('white')
        setColorPalomita('green')
        setBorder('10px solid green')
        setCircle('10px solid green')
      },2500)

   

    
      setTimeout(() => {
        setIsSubmitted(false);
        setColor('green')
        setBg('green')
        setBorder('10px solid transparent')
        setColorPalomita('white')
        setCircle('10px solid white')
      }, 5000);

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
      setErrors({});
    } else {
      console.log("Formulario inválido. Corrige los errores antes de enviar.");
    }
  };

  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccessSnackbar(false);
    setOpenErrorSnackbar(false);
  };

  return (
    <div>
      <Box
        sx={{
          height: "100%",
          background: "black",
          paddingBottom: "1rem",
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: "white",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: "700",
          }}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            paddingTop: "50px",
          }}
        >
          Contáctanos
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 12, sm: 6, md: 6 }}
          justifyContent="center"
          alignItems="center"
          style={{
            flexDirection: "row",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            xl={6}
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                border: "5px solid white",
                padding: "10px",
                marginBottom: "10px",
                width: "300px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  color: "white",
                  mb: 3,
                  fontFamily: "'Oswald', sans-serif",
                }}
              >
                Redes Sociales
              </Typography>
              <Box
                sx={{
                  marginLeft: "65px",
                  display: "flex",
                  alignItems: "center",
                  mb: 3,
                  width: "100%",
                  maxWidth: "126px",
                  justifyContent: "space-evenly",
                }}
              >
                <a href="https://www.facebook.com/profile.php?id=100093530245392">
                  <img
                    style={{
                      width: "27px",
                      marginTop: "0px",
                      cursor: "pointer",
                    }}
                    src={icono2}
                    alt="icono2"
                  ></img>
                </a>
                <a href="https://www.instagram.com/techx_mx/?hl=es">
                  <img
                    style={{
                      width: "27px",
                      marginTop: "0px",
                      cursor: "pointer",
                    }}
                    src={linkedinFooterImg}
                    alt="linkedinFooterImg"
                  ></img>
                </a>
              </Box>
            </Box>
            <Box
              style={{
                border: "5px solid white",
                padding: "10px",
                width: "300px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  color: "white",
                  mb: 2,
                  fontFamily: "'Oswald', sans-serif",
                }}
              >
                TechX
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    mb: 2,
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  <LocationOnIcon
                    sx={{ mr: 1, position: "relative", top: "5px" }}
                  />
                  México
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    mb: 2,
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  <PhoneIcon sx={{ mr: 1, position: "relative", top: "5px" }} />
                  +52 662 2297062
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    mb: 2,
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  <EmailIcon sx={{ mr: 1, position: "relative", top: "5px" }} />
                  desarollotechx@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            xl={6}
            sx={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
              marginBottom: "0px",
            }}
          >
            <Box
              className={`box-formulario ${isSubmitted ? "submitted" : ""}`}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: "475px",
                position: "relative",
                background: isSubmitted ? color : "#CCCCCC",
                borderRadius: "50px",
                border: "1px solid white",
                padding: "10px",
                marginBottom: "10px",
                width: "300px",
                transition: "background 0.3s ease-in", // Añade una transición a la propiedad background
              }}
            >
              {isSubmitted ? (
                
                <div
                  style={{
                    display: "flex",
                    marginTop: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                         <div
                  
                  >
                    <CheckIcon
                      sx={{ fontSize: "200px", color: colorPalomita, zIndex: 4  , position: 'absolute', transform: 'translate(-50%, 0) '}}
                    />
                  </div>
                  <div
                    style={{
                      width: "230px",
                      height: "230px",
                      borderRadius: '50%',
                      background: bg,
                      border: circle, 
                      
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottom: border,
                  
                      animation: "rotation 2.3s linear",
                      transformOrigin: "center",
                      
                      transition:"background 1s ease",
                 
                

                    }}
                  >
                    <style>{keyframes}</style>
             
                  </div>
                </div>
              ) : null}
              {!isSubmitted && (
                <>
                  <AccountCircleIcon
                    sx={{ fontSize: 50, color: "#333333", mt: 2 }}
                  />
                  <Stack spacing={0} sx={{ width: "100%", marginTop: "50px" }}>
                    <form ref={form} onSubmit={sendEmail}>
                      <TextField
                        sx={{
                          marginLeft: "30px",
                          marginBottom: "1rem",
                          background: "#D3D3D3",
                          borderRadius: "15px",
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                          "& label.Mui-focused": {
                            color: "black",
                          },
                        }}
                        id="outlined-basic"
                        label="Nombre"
                        name="user_name"
                        variant="outlined"
                        onChange={handleInputChange}
                        error={!!errors.user_name}
                        helperText={errors.user_name}
                      />

                      <TextField
                        sx={{
                          marginLeft: "30px",
                          marginBottom: "1rem",
                          background: "#D3D3D3",
                          borderRadius: "15px",
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                          "& label.Mui-focused": {
                            color: "black",
                          },
                        }}
                        id="outlined-basic"
                        label="Email"
                        name="user_email"
                        variant="outlined"
                        onChange={handleInputChange}
                        error={!!errors.user_email}
                        helperText={errors.user_email}
                      />

                      <TextField
                        sx={{
                          width: "220px",
                          marginLeft: "30px",
                          marginBottom: "1rem",
                          background: "#D3D3D3",
                          borderRadius: "15px",
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                          "& label.Mui-focused": {
                            color: "black",
                          },
                        }}
                        id="outlined-basic"
                        label="Comentarios"
                        name="message"
                        variant="outlined"
                        multiline
                        rows={commentRows}
                        onChange={handleCommentChange}
                        error={!!errors.message}
                        helperText={errors.message}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          type="submit"
                          sx={{
                            fontFamily: "'Oswald', sans-serif",
                            borderColor: "white",
                            borderWidth: "2px",
                            borderStyle: "solid",
                            borderRadius: "15px",
                            color: "white",
                            background: "black",
                            width: "220px",
                            "&:hover": {
                              backgroundColor: "black",
                              borderColor: "white",
                            },
                          }}
                        >
                          Enviar
                        </Button>
                      </Box>
                    </form>
                  </Stack>
                </>
              )}

              <Snackbar
                open={openSuccessSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
              >
                <Alert
                  onClose={handleSnackbarClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Correo enviado con éxito.
                </Alert>
              </Snackbar>

              <Snackbar
                open={openErrorSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
              >
                <Alert
                  onClose={handleSnackbarClose}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  Error al enviar el correo. Asegúrate de que todos los campos
                  estén completos y vuelve a intentarlo.
                </Alert>
              </Snackbar>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contacto;
