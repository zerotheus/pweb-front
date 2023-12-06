import { Endereco } from "../Paciente/Endereco"
import { DadosCadastrais } from "./DadosCadastrais"


export interface MedicoForm{
    dadosCadastrais:DadosCadastrais
    endereco:Endereco
}