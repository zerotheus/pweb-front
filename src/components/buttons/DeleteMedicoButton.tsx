// import { usePacienteDelete } from "../../hooks/pacientes/usePacienteDelete";
import { useMedicoDelete } from "../../hooks/medicos/useMedicoDelete"
import "./DeleteButton.css"

interface DeleteProps {
    id: number
}

export function DeleteMedicoButton({ id }: DeleteProps) {

    const { mutate } = useMedicoDelete()
    const sumbit = () => {
        mutate(id)
    }
    return (
        <button className="deleteButton" onClick={sumbit}>Excluir</button>
    )
}