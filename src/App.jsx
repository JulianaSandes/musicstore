import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

 return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
