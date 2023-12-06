import { useState } from 'react'
import { useMedicoData } from '../hooks/medicos/useMedicosData'
import { MedicoCard } from '../components/Card/MedicoCard'
import { CreateMedicoModal } from '../components/createModal/CreateMedicoModal'


export function Medicos() {

    const { data } = useMedicoData()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }
    console.log(data)
    return (
        <div className="container">
            <h1>Medicos</h1>
            <div className="card-grid">
                {data?.map(medico => <MedicoCard
                    numeroDoMedico={medico.numeroIndetificador}
                    nome={medico.nome}
                    email={medico.email}
                    crm={medico.crm}
                    especialidade={medico.especialidade}
                />)}

            </div>
            {isModalOpen && <CreateMedicoModal closeModal={handleOpenModal} />}
            <button className='Cadastre' onClick={handleOpenModal}>Cadastre</button>
        </div>
    )

}