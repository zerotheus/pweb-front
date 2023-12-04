import { useEffect, useState } from "react";
import { PacienteForm } from "../../interface/form/PacienteForm";
import { DadosCadastrais } from "../../interface/form/DadosCadastrais";
import { Endereco } from "../../interface/form/Endereco";
import { usePacienteForm } from "../../hooks/usePacienteForm";
import "./modal.css"

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
export function CreateModal({ closeModal }: ModalProps) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState(0);
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState(0);
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState("");

    const { mutate, isSuccess } = usePacienteForm();

    const submit = () => {
        const dadosCadastrais: DadosCadastrais = {
            cpf,
            email,
            nome,
            telefone
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
        const pacienteForm: PacienteForm = {
            dadosCadastrais,
            endereco
        }
        mutate(pacienteForm)
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
                    <Input label="cpf" value={cpf} updateValue={setCpf} />
                    <Input label="email" value={email} updateValue={setEmail} />
                    <Input label="telefone" value={telefone} updateValue={setTelefone} />
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