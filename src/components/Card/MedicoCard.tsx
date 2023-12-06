import { DeletePacienteButton } from "../buttons/DeleteButton"
import { DeleteMedicoButton } from "../buttons/DeleteMedicoButton"
import { EditPacienteButton } from "../buttons/EditButton"
import { EditMedicoButton } from "../buttons/EditMedicoButton"
import "./Card.css"

interface CardProps {
    numeroDoMedico: number,
    nome: string,
    email: string,
    crm: string,
    especialidade: string
}

export function MedicoCard({ numeroDoMedico, nome, email, crm, especialidade }: CardProps) {
    return (<div className="card">
        <h2>Nome: {nome}</h2>
        <p>Id: {numeroDoMedico}</p>
        <p>crm: {crm}</p>
        <p>email: {email}</p>
        <EditMedicoButton id={numeroDoMedico} crm={crm} especialidade={especialidade} email={email} />
        <DeleteMedicoButton id={numeroDoMedico} />
    </div>)

}