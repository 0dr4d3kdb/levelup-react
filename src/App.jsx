import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalogo from './components/pages/Catalogo'
import Header from './components/organisms/Header'
import Resena from './components/pages/Resena'

function App() {

  return (
  <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/resena' element={<Resena/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
