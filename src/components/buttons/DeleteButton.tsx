import { usePacienteDelete } from "../../hooks/usePacienteDelete";
import "./DeleteButton.css"

interface DeleteProps {
    id: number
}

export function DeletePacienteButton({ id }: DeleteProps) {

    const { mutate } = usePacienteDelete()
    const sumbit = () => {
        mutate(id)
    }
    return (
        <button className="deleteButton" onClick={sumbit}>Excluir</button>
    )
}