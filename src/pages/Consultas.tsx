import { useState } from 'react'
import { CreateMedicoModal } from '../components/createModal/CreateMedicoModal'
import { ConsultaCard } from '../components/Card/ConsultaCard'
import { useConsultaData } from '../hooks/consultas/useConsultaData'
import { CreateConsultaModal } from '../components/createModal/CreateConsultaModal'


export function Consultas() {

    const { data } = useConsultaData()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }
    console.log(data)
    return (
        <div className="container">
            <h1>Consultas</h1>
            <div className="card-grid">
                {data?.map(consulta => <ConsultaCard
                    numeroDaSolicitacao={consulta.numeroDaSolicitacao} estado={consulta.estado}
                    horario={consulta.horario} medico={consulta.medico}
                    paciente={consulta.paciente}
                />)}

            </div>
            {isModalOpen && <CreateConsultaModal closeModal={handleOpenModal} />}
            <button className='Cadastre' onClick={handleOpenModal}>Cadastre</button>
        </div>
    )

}