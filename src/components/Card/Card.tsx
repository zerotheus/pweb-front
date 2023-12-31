import { DeletePacienteButton } from "../buttons/DeleteButton"
import { EditPacienteButton } from "../buttons/EditButton"
import "./Card.css"

interface CardProps {
    numeroDePaciente: number,
    nome: string,
    email: string,
    cpf: string,
}

export function Card({ numeroDePaciente, nome, email, cpf }: CardProps) {
    return (<div className="card">
        <h2>Nome: {nome}</h2>
        <p>Id: {numeroDePaciente}</p>
        <p>cpf: {cpf}</p>
        <p>email: {email}</p>
        <div className="actionsButtons">
            <EditPacienteButton id={numeroDePaciente} cpf={cpf} email={email} />
            <DeletePacienteButton id={numeroDePaciente} />
        </div>
    </div>)

}