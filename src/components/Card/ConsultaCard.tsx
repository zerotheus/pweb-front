import { CancelamentoButton } from "../buttons/CancelamentoButton"
import "./Card.css"

interface CardProps {
    numeroDaSolicitacao: number,
    estado: string,
    horario: string,
    medico: string,
    paciente: string
}

export function ConsultaCard({ numeroDaSolicitacao, estado, horario, medico, paciente }: CardProps) {
    return (<div className="card">
        <h2>Id da consulta: {numeroDaSolicitacao}</h2>
        <p>medico: {medico}</p>
        <p>paciente: {paciente}</p>
        <p>horario: {horario}</p>
        <CancelamentoButton id={numeroDaSolicitacao} />
    </div>)

}