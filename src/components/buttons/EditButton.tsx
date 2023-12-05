import { useState } from "react";
import { usePacienteDelete } from "../../hooks/pacientes/usePacienteDelete";
import { usePacienteEdit } from "../../hooks/pacientes/usePacienteEdit";
import { EditModal } from "../updateModal/updateModal";
import "./EditButton.css"

interface EditProps {
    id: number
    cpf: string
    email: string
}

export function EditPacienteButton({ id, cpf, email }: EditProps) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        console.log(id)
        setIsModalOpen(prev => !prev)
    }

    return (
        <>
            <button className="EditButton" onClick={handleOpenModal}>Editar</button>
            {isModalOpen && <EditModal id={id} cpf={cpf} email={email} closeModal={handleOpenModal} />}
        </>
    )
}