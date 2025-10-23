import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/organisms/Header'
import Login from './components/pages/Login'
import Registro from './components/pages/Registro'
import Catalogo from './components/pages/Catalogo'
import Resena from './components/pages/Resena'
import AboutUs from './components/pages/AboutUs'
import Blog from './components/pages/Blog'

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
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/resena' element={<Resena/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
