import { useEffect, useState } from "react";
import { DadosCadastrais } from "../../interface/form/Medico/DadosCadastrais";
import { Endereco } from "../../interface/form/Paciente/Endereco";
import "./modal.css"
import { MedicoForm } from "../../interface/form/Medico/MedicoForm";
import { useMedicoForm } from "../../hooks/medicos/useMedicoForm";

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
export function CreateMedicoModal({ closeModal }: ModalProps) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [crm, setcrm] = useState("");
    const [telefone, setTelefone] = useState(0);
    const [especialidade, setEspecialidade] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState(0);
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState("");

    const { mutate, isSuccess } = useMedicoForm();

    const submit = () => {
        const dadosCadastrais: DadosCadastrais = {
            crm,
            email,
            nome,
            telefone,
            especialidade
        }
        const endereco: Endereco = {
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            cep,
        }
        const medicoForm: MedicoForm = {
            dadosCadastrais,
            endereco
        }
        mutate(medicoForm)
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
                    <Input label="nome" value={nome} updateValue={setNome} />
                    <Input label="crm" value={crm} updateValue={setcrm} />
                    <Input label="email" value={email} updateValue={setEmail} />
                    <Input label="telefone" value={telefone} updateValue={setTelefone} />
                    <Input label="especialidade" value={especialidade} updateValue={setEspecialidade} />
                    <Input label="logradouro" value={logradouro} updateValue={setLogradouro} />
                    <Input label="numero" value={numero} updateValue={setNumero} />
                    <Input label="complemento" value={complemento} updateValue={setComplemento} />
                    <Input label="bairro" value={bairro} updateValue={setBairro} />
                    <Input label="cidade" value={cidade} updateValue={setCidade} />
                    <Input label="uf" value={uf} updateValue={setUf} />
                    <Input label="cep" value={cep} updateValue={setCep} />
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

