import { useState } from "react";
import { usePacienteDelete } from "../../hooks/pacientes/usePacienteDelete";
import { usePacienteEdit } from "../../hooks/pacientes/usePacienteEdit";
import { EditModal } from "../updateModal/updateModal";
import "./EditButton.css"
import { EditMedicoModal } from "../updateModal/updateMedicoModal";

interface EditProps {
    id: number
    crm: string
    email: string
    especialidade: string
}

export function EditMedicoButton({ id, crm, email, especialidade }: EditProps) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        console.log(id)
        setIsModalOpen(prev => !prev)
    }

    return (
        <>
            <button className="EditButton" onClick={handleOpenModal}>Editar</button>
            {isModalOpen && <EditMedicoModal id={id} crm={crm} email={email} especialidade={especialidade}
                closeModal={handleOpenModal} />}
        </>
    )
}