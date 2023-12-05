import { useState } from 'react'
import { PacienteData } from '../interface/form/Paciente/PacienteData'
import { Card } from '../components/Card/Card'
import { usePacienteData } from '../hooks/pacientes/usePacienteData'
import { CreateModal } from '../components/createModal/CreateModel'


export function Pacientes() {

    const { data } = usePacienteData()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    return (
        <div className="container">
            <h1>Pacientes</h1>
            <div className="card-grid">
                {data?.map(paciente => <Card
                    numeroDePaciente={paciente.numeroDePaciente}
                    nome={paciente.nome}
                    email={paciente.email}
                    cpf={paciente.cpf} />)}
            </div>
            {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
            <button className='Cadastre' onClick={handleOpenModal}>Cadastre</button>
        </div>
    )

}