import { useEffect, useState } from "react";
import "./modal.css"
import { agendamentoForm } from "../../interface/form/consulta/AgendamentoForm";
import { useAgendamentoForm } from "../../hooks/consultas/useAgendamentoForm";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
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
export function CreateConsultaModal({ closeModal }: ModalProps) {

    const [medicoId, setMedicoId] = useState(0);
    const [pacienteId, setPacienteId] = useState(0);
    const [dataHorario, setDataHorario] = useState("");

    const { mutate, isSuccess } = useAgendamentoForm();

    const submit = () => {

        const agendamento: agendamentoForm = {
            medicoId,
            pacienteId,
            dataHorario
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
                    <Input label="medicoId" value={medicoId} updateValue={setMedicoId} />
                    <Input label="PacienteId" value={pacienteId} updateValue={setPacienteId} />
                    <Input label="Horario" value={dataHorario} updateValue={setDataHorario} />
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

