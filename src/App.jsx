import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/organisms/Header'
import Login from './components/pages/Login'
import Registro from './components/pages/Registro'
import PerfilPage from './components/pages/PerfilPage'
import CarritoPage from './components/pages/CarritoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <BrowserRouter>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/perfil' element={<PerfilPage/>}/>
        <Route path='/carrito' element={<CarritoPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
