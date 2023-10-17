import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Inicio from "./pages/Inicio"
import Servicios from "./pages/Servicios"
import Proyectos from "./pages/Proyectos"
import Nosotros from "./pages/Nosotros"
import Footer from "./components/Footer"
import "./index.css"
import Landing from "./pages/Landing"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
