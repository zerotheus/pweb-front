import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Consultas } from './pages/Consultas'
import { Home } from './pages/Home'
import { Pacientes } from './pages/Paciente'
import { Medicos } from './pages/Medicos'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/Consulta' element={<Consultas />} />
        <Route path='/Medico' element={<Medicos />} />
        <Route path='/Paciente' element={<Pacientes />} />
      </Routes>
    </>
  )
}

export default App
