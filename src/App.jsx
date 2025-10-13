import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalogo from './components/pages/Catalogo'
import Header from './components/organisms/Header'

function App() {

  return (
    <BrowserRouter>
      <Routes>
    <Header/>
        <Route path='/catalogo' element={<Catalogo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
