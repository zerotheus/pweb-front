import { Link } from "react-router-dom";

export function Home() {


    return (
        <div className="container">
            <h1>Home</h1>
            <Link className="medicoLink" to="Medico">Médicos</Link>
            <Link className="pacienteLink" to="Paciente">Pacientes</Link>
            <Link className="consultaLink" to="Consulta">Consultas</Link>
        </div>
    )

}