import './App.css'
import { Header } from './components/Header/Header'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  )
}

export default App
