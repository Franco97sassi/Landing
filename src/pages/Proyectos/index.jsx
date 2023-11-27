import { Box, Button, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Slide } from "react-awesome-reveal";
import proyecto1 from "../../assets/im22.png";
// import todoF from "../../assets/proyecto2.png";
import docappoint from "../../assets/doca.png";
import pixie from "../../assets/pixie.png";
import cryptomc from "../../assets/crypto.png";
import cruzRoja from "../../assets/cruzroja.png";
import proveedora from "../../assets/q5.png";
import garden from "../../assets/garden.png";
import rifas from "../../assets/rifa.png";
import floral from "../../assets/floral1.png";
import border from "../../assets/border.png";
import aura from "../../assets/aura.png";
import md from "../../assets/emp3.png";
import cyrene from "../../assets/q10.png";
import parkea from "../../assets/parkea.png";

// import todoF from "../../assets/Floral.png";

// import rifas from "../../assets/rifas.png"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import "./styles.css"
const Proyectos = () => {
  const projectImages = [
    {
      imageUrl: floral, url: "https://www.todofloral.com/", nombre: "Todo Floral",
      description: 

      "Nuestra tienda en línea ofrece una experiencia única en la compra de flores, combinando variedad y calidad con un toque personalizado. Aquí encontrarás desde rosas clásicas hasta orquídeas exóticas, perfectas para cualquier ocasión. Lo que nos distingue es nuestra función de personalización, permitiéndote crear arreglos únicos que se adaptan a tus necesidades. Ya sea para un cumpleaños, aniversario o como un gesto de cariño, tenemos el arreglo ideal. Además, garantizamos un servicio de entrega eficiente para que tus flores lleguen frescas y hermosas. Descubre la comodidad y el encanto de comprar flores en línea con nosotros."    },
    {
      imageUrl: docappoint, url: "https://docappoint.com.mx/", nombre: "Docappoint",
      description:  
      "Nuestra página de doctores es un espacio dedicado a brindar servicios de salud de la más alta calidad, conectando a pacientes con un amplio espectro de especialistas médicos en México. Aquí, podrás encontrar profesionales altamente calificados en diversas ramas de la medicina, desde medicina general hasta especialidades más específicas. Nos comprometemos a ofrecer una atención personalizada y centrada en el paciente, garantizando un seguimiento detallado de cada caso. Nuestro objetivo es facilitar el acceso a consultas, diagnósticos y tratamientos efectivos, utilizando tecnología de punta para asegurar la mejor experiencia de atención médica. Confiabilidad, profesionalismo y cuidado humano son los pilares de nuestra plataforma, diseñada para cuidar de tu salud y la de tu familia."
    },
    { imageUrl: proveedora, url: "https://provartesgraficas.vercel.app/", 
    nombre: "Proveedora de las artes graficas"
   },
    {
      imageUrl: pixie, url: "https://pixiebr.com/", nombre: "Pixie Inmobiliaria",
      description:
      "Nuestra página informativa se especializa en el ámbito de las inversiones, ofreciendo una calculadora avanzada para la inversión de dinero e inmuebles. Este recurso permite a nuestros usuarios realizar estimaciones precisas y tomar decisiones informadas en sus inversiones. Además, contamos con un robusto sistema de gestión de usuarios que asegura una experiencia personalizada y segura. Uno de nuestros mayores atractivos es nuestro sistema interno, el cual utiliza inteligencia artificial desarrollada en Python para proveer predicciones y análisis de mercado detallados. Esta herramienta es esencial para inversores que buscan maximizar sus retornos y minimizar riesgos, basándose en datos precisos y análisis avanzados."    },
    {
      imageUrl: cryptomc, url: "https://crypto-rouge-omega.vercel.app/", nombre: "Cryptomc",
      description:

      "Descubre el fascinante mundo de nuestro juego de criptomonedas, una plataforma única donde conectar tu wallet te abre las puertas a emocionantes juegos basados en NFTs. En este innovador espacio, tienes la oportunidad de ganar criptomonedas mientras te diviertes. Nuestro juego se centra en un servicio de delivery virtual, en el cual los jugadores administran y expanden su negocio, ganando recompensas en criptoactivos. Además, ofrecemos un sistema de porcentajes que maximiza tus ganancias según tu desempeño y estrategia en el juego. Es una experiencia interactiva y lucrativa que combina el dinamismo de los juegos en línea con el potencial de las criptomonedas, perfecta para aficionados a la tecnología blockchain y entusiastas de los juegos."    },
    {
      imageUrl: garden, url: "https://thegarden.com.mx/", nombre: "The Garden",
      description: 
      "Bienvenidos a nuestra florería en línea, un espacio donde la belleza y fragancia de las flores se encuentran al alcance de un clic. Nos especializamos en ofrecer una exquisita selección de arreglos florales para todo tipo de ocasiones: desde celebraciones especiales, hasta momentos cotidianos que merecen un toque de color y alegría. Nuestro compromiso es brindar frescura y calidad en cada entrega, asegurando que cada ramo refleje emociones y sentimientos. Con un servicio de compra fácil y un sistema de entrega eficiente, garantizamos la satisfacción de nuestros clientes. Descubre la magia de las flores con nosotros y regala momentos inolvidables."    },
    { imageUrl: rifas, url: "https://www.rifaselvenado.com/", nombre: "Rifas El Venado",
     description:
     "En Rifas El Venado, fusionamos la moda con la emoción. Como líder en el mercado mexicano de e-commerce de ropa, ofrecemos una selección diversa y de calidad, desde prendas casuales hasta estilos formales. Nuestra característica distintiva son las emocionantes rifas: con cada compra, los clientes no solo adquieren tendencias de moda, sino también la oportunidad de ganar premios excepcionales. Nos comprometemos a brindar una experiencia de compra única, donde la lealtad y el entusiasmo por la moda se ven recompensados. Descubre con nosotros el placer de vestir bien y la emoción de ganar."    
    },
    {
      imageUrl: cruzRoja, url: "http://analisis.cruzrojahmo.com/", nombre: "Asociacion de la Cruz Roja Mexicana"
      , description:
      "Enfocado en la zona de Hermosillo, ofrecemos un servicio avanzado de monitoreo para hospitales, dirigido a optimizar la atención médica. Mediante una plataforma intuitiva, los médicos tienen la capacidad de crear recetas electrónicas, facilitando el proceso de prescripción y seguimiento de tratamientos. Nuestro sistema se destaca por la integración de tecnologías de Web Scraping desarrolladas con Python, permitiendo un análisis de datos exhaustivo y preciso. Esta herramienta es esencial para la toma de decisiones informadas, mejorando la eficiencia operativa y la calidad del cuidado de los pacientes. Nuestro compromiso es con la innovación y la excelencia en el cuidado de la salud en Hermosillo."    },
    {
      imageUrl: border, url: "https://bordermailboxes.com/", nombre: "Border Mailboxes",
      description: 
      "Somos una empresa innovadora que facilita las compras en Estados Unidos para clientes en Hermosillo. Nuestro servicio se especializa en adquirir productos en territorio estadounidense, gestionando el envío eficiente de estos hacia un storage seguro. Una vez que los artículos llegan a nuestro almacén, los clientes tienen la comodidad de retirar sus envíos directamente en Hermosillo. Nuestro objetivo es brindar una solución práctica y confiable para aquellos que desean acceder a una amplia gama de productos disponibles en Estados Unidos, garantizando un proceso de compra y entrega sin complicaciones y con la máxima seguridad."    },
    {
      imageUrl: aura, url: "https://auradress.com/", nombre: "Aura Dress ",
      description: 
      "Descubre la elegancia y el encanto en nuestro E-commerce de ropa, especializado en la venta de vestidos para ocasiones inolvidables. Nos centramos en ofrecer una colección exclusiva de vestidos para quinceañeras y bodas, cada uno cuidadosamente seleccionado para asegurar calidad y diseño excepcional. Entendemos la importancia de estos eventos, por eso brindamos una amplia variedad de estilos que se adaptan a todos los gustos y preferencias. Nuestra tienda online facilita una experiencia de compra cómoda y personalizada, asegurando que cada cliente encuentre el vestido perfecto para su día especial. Confiabilidad, estilo y elegancia definen nuestra propuesta para celebrar tus momentos más memorables."    },
    // { imageUrl: md, url: "http://mdglobal.com.mx/", nombre: "MD Agencia" },
    {
      imageUrl: cyrene, url: "https://shopcyrene.com", nombre: "Shopcyrene"
      , description: 
      "Bienvenidos a nuestra Tienda de Ropa, el destino ideal para quienes buscan estilo y calidad. Nos especializamos en la venta de una variada gama de prendas, incluyendo elegantes vestidos, jeans versátiles, bikinis modernos y shorts cómodos para todas las ocasiones. Nos distinguimos por ofrecer constantes promociones, garantizando así la mejor relación calidad-precio. Además, entendemos la importancia de la comodidad de nuestros clientes, por lo que proporcionamos un servicio de envíos eficiente y confiable. Visítanos y descubre una experiencia de compra excepcional, donde la moda y la conveniencia se encuentran para satisfacer tus necesidades de vestuario."    },


    {
      imageUrl: parkea, url: "https://www.todofloral.com/", nombre: "Parkea"
      , description:
      "Nuestro servicio proporciona una solución integral para el registro y gestión de estacionamientos. Diseñado para facilitar la administración de espacios de estacionamiento, permite a los usuarios registrar de manera eficiente y segura tanto los estacionamientos disponibles como los vehículos que los ocupan. Una característica distintiva de nuestro sistema es la capacidad de registrar evidencias sobre los autos, incluyendo fotografías y detalles específicos del vehículo, lo que asegura un control más riguroso y una mayor seguridad. Esta herramienta es ideal para administradores de estacionamientos que buscan optimizar su operación y ofrecer un servicio de calidad a sus clientes."    }
     




    // ... (otras imágenes)
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const chunkSize = 1;
  const [currentChunk, setCurrentChunk] = useState(0);

  const chunkedProjects = projectImages.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const calculateDelay = (index) => {
    const baseDelay = 1000; // 1 segundo de retraso base
    const incrementalDelay = 500; // Incrementar 500ms por cada proyecto
    return baseDelay + (index * incrementalDelay);
  };

  return (
    <div id="proyectos">
      <Box sx={{ background: '#333333', height: "100vh" }}  >
        <Slide direction="left" triggerOnce={false}>
          <Typography variant="h2" style={{ color: "white", fontWeight: 700, fontFamily: "'Oswald', sans-serif" }} sx={{ display: "flex", paddingTop: "50px", justifyContent: "center", paddingBottom: "50px" }}>
            Proyectos
          </Typography></Slide>



        <Carousel
          autoPlay={true}
          interval={5000}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={false}
          index={currentChunk}
          sx={{ padding: '0 16px' }}
        >
          {chunkedProjects.map((chunk, index) => (
            <Grid container key={index} spacing={2} alignItems="center" justifyContent="center">
              {chunk.map((project, subIndex) => (
                <React.Fragment key={subIndex}>
                  <Grid item xs={12} sm={6} md={6} lg={4.5} xl={3}>
                    <Box sx={{
                      width: "125%", // Asegúrate de que la imagen ocupa todo el ancho del Grid item
                      height: "125%",
                      borderRadius: "10px",
                      marginTop: "20px",
                      backgroundColor: 'rgba(30, 30, 30, 0.56)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                    >
                      <Link href={project.url} underline="none" target="_blank" rel="noopener">

                        <img
                          src={project.imageUrl}
                          alt={`Proyecto ${index * chunkSize + subIndex + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: "cover", borderRadius: "10px" }}
                        />  </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4} md={6} lg={7.5} xl={9}>
                    <Box sx={{
                      p: 15,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      height: '250px', // Asegúrate de que este Box tiene la misma altura que el Box de la imagen
                    }}>
                      <Typography style={{
                        color: "white",
                        fontFamily: 'Oswald, sans-serif',
                      }} variant="h4" gutterBottom>
                        {project.nombre}
                      </Typography>
                      <Typography style={{
                        color: "white",
                        fontFamily: 'Oswald, sans-serif',
                      }} gutterBottom>
                        {project.description}
                      </Typography>
                      {/* <Typography style={{
                        color: "white",
                        fontFamily: 'Oswald, sans-serif',
                      }}  >
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum

                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum

                      </Typography> */}
                    </Box>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          ))}
        </Carousel>
      </Box>
      {/* email */}

      {/* <Box sx={{ width: '100%', height: "100vh", background: 'black' }}>
      <Slide direction="left" triggerOnce={false}>
          <Typography  variant="h2" style={{color:"white", fontFamily: "'Oswald', sans-serif" }} sx={{ display: "flex", justifyContent: "center" ,paddingTop:"50px" }}>
            Contactanos
          </Typography>
        </Slide>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="flexStart" alignItems="flexStart" marginTop="25px" style={{ height: '100%' }}>
        <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box style={{ border: "5px solid white", padding: "10px", marginBottom: "10px", width: "300px" }}>
            <Typography sx={{ color: "white", mb: 8 ,fontFamily: "'Oswald', sans-serif" }} >
              Redes Sociales
            </Typography>
            <Button sx={{
              color: "white", fontFamily: "'Oswald', sans-serif",
              borderColor: "white",
              borderWidth: "2px",
              borderStyle: "solid",
              borderRadius: "15px",
              '&:hover': {
                backgroundColor: "darkblue",
                borderColor: "white",
              },
            }}>
              Etiquetanos en tu historia
            </Button>
          </Box>

          <Box style={{ border: "5px solid white", padding: "10px", width: "300px" }}>
            <Typography sx={{ color: "white", mb: 2,fontFamily: "'Oswald', sans-serif" }}>
              TechX
            </Typography>
            <Typography sx={{ color: "white", mb: 2,fontFamily: "'Oswald', sans-serif" }}>     <LocationOnIcon sx={{ mr: 1 }} />

              México
            </Typography>
            <Typography sx={{ color: "white", mb: 2,fontFamily: "'Oswald', sans-serif" }}> <PhoneIcon sx={{ mr: 1 }} />
              +52 662 2297062
            </Typography>
            <Typography sx={{ color: "white" , mb: 2,fontFamily: "'Oswald', sans-serif"}}> <EmailIcon sx={{ mr: 1 }} />
              desarollotechx@gmail.com
            </Typography>
           
          </Box>
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column',justifyItems:"center", alignItems: 'center' }}>
      
      
        <Box style={{height: "400px", position: 'relative', background: "#CCCCCC", borderRadius: '50px', border: "1px solid white", padding: "10px", marginBottom: "10px", width: "300px" }}>
        <AccountCircleIcon sx={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', fontSize: 70, color: '#333333' }} />
        <Stack spacing={2} sx={{ width: '100%', marginTop:"50px"}}>
    <TextField 
      sx={{
          
        background: "#D3D3D3",
        borderRadius: "15px",
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        '& label.Mui-focused': {
          color: 'black',
        },
      }}
      id="outlined-basic"
      label="Nombre"
      variant="outlined"
    />

    <TextField 
      sx={{
        background: "#D3D3D3",
        borderRadius: "15px",
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        '& label.Mui-focused': {
          color: 'black',
        },
      }}
      id="outlined-basic"
      label="Email"
      variant="outlined"
    />
   
    <TextField 
      sx={{
        background: "#D3D3D3",
        borderRadius: "15px",
        height:"100px",
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        '& label.Mui-focused': {
          color: 'black',
        },
      }}
      id="outlined-basic"
      label="Comentarios"
      variant="outlined"
    />
<Box sx={{display:"flex",
      justifyContent:"center",
      alignItems:"center" }}>  
    <Button sx={{
       fontFamily: "'Oswald', sans-serif",
      color: "black",
      borderColor: "white",
      borderWidth: "2px",
      borderStyle: "solid",
      borderRadius: "15px",
       color:"white",
      background: 'black',
      width:"220px",
      '&:hover': {
        backgroundColor: "darkblue",
        borderColor: "white",
      } 
    }}>
      Enviar
    </Button></Box>
  </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box> */}
    </div>

  );
}

export default Proyectos;
