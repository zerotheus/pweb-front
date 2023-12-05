import { DeletePacienteButton } from "../buttons/DeleteButton"
import { EditPacienteButton } from "../buttons/EditButton"
import "./Card.css"

interface CardProps {
    numeroDoMedico: number,
    nome: string,
    email: string,
    crm: string,
}

export function MedicoCard({ numeroDoMedico, nome, email, crm }: CardProps) {
    return (<div className="card">
        <h2>Nome: {nome}</h2>
        <p>Id: {numeroDoMedico}</p>
        <p>crm: {crm}</p>
        <p>email: {email}</p>
    </div>)

}