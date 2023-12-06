import { useState, useEffect } from "react"
import { Endereco } from "../../interface/form/Paciente/Endereco"
import { MedicoForm } from "../../interface/form/Medico/MedicoForm"
import { DadosCadastrais } from "../../interface/form/Medico/DadosCadastrais"
import { PutProps, useMedicoEdit } from "../../hooks/medicos/useMedicoEdit"
import "./modal.css"

interface EditProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    id: number,
    crm: string,
    especialidade: string
    email: string
    closeModal(): void
}


const Input = ({ label, value, updateValue }: EditProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}
export function EditMedicoModal({ closeModal, id, crm, email, especialidade }: ModalProps) {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState(0);
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState(0);
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState("");

    const { mutate, isSuccess } = useMedicoEdit();

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
        const editProps: PutProps = {
            medicoForm,
            id,
        }
        console.log(id)
        mutate(editProps)
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