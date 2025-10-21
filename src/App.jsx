import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalogo from './components/pages/Catalogo'
import Header from './components/organisms/Header'
import Resena from './components/pages/Resena'
import AboutUs from './components/pages/AboutUs'
import Footer from './components/organisms/Footer'
import Home from './components/pages/Home'

function App() {

  return (
  <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/resena' element={<Resena/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </>
  )
}

export default App
