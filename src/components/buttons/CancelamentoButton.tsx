import { useState } from "react";
import { EditModal } from "../updateModal/updateModal";
import "./DeleteButton.css"
import { CreateCancelamentoModal } from "../updateModal/CancelamentoModal";

interface EditProps {
    id: number
}

export function CancelamentoButton({ id }: EditProps) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        console.log(id)
        setIsModalOpen(prev => !prev)
    }

    return (
        <>
            <button className="deleteButton" onClick={handleOpenModal}>Cancelar</button>
            {isModalOpen && <CreateCancelamentoModal closeModal={handleOpenModal} id={id} />}
        </>
    )
}