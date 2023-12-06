import { useEffect, useState } from "react";
import "./modal.css"
import { CancelamentoForm } from "../../interface/form/consulta/CancelamentoForm";
import { useCancelamentoForm } from "../../hooks/consultas/useCancelamentoForm";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    id: number
    closeModal(): void
}


const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}
export function CreateCancelamentoModal({ closeModal, id }: ModalProps) {

    const consultaId = id
    const [motivo, setMotivo] = useState("");
    const { mutate, isSuccess } = useCancelamentoForm();

    const submit = () => {

        const agendamento: CancelamentoForm = {
            consultaId,
            motivo,
        }
        mutate(agendamento)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>cadastre um novo paciente</h2>
                <form className="input-container">
                    <Input label="Motivo" value={motivo} updateValue={setMotivo} />
                </form>
                <button onClick={submit} className="btn-secondary">Postar
                </button>
            </div>
        </div>
    )

}

function closeModal() {
    throw new Error("Function not implemented.");
}

