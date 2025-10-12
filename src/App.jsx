import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalogo from './components/pages/Catalogo'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/catalogo' element={<Catalogo/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
