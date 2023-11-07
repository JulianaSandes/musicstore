import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Usuario from "./pages/Usuario"
import ProdutoMusica from "./pages/ProdutoMusica"

function App() {

 return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
        <Route path="/Usuario" element={<Usuario/>}/>
        <Route path="/ProdutoMusica" element={<ProdutoMusica/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
