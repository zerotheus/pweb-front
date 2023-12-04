import axios, { AxiosPromise } from "axios"
import { PacienteData } from "../interface/PacienteData"
import { useQuery } from "@tanstack/react-query"
const baseUrl = "http://localhost:8083/Paciente"

const list = async ():AxiosPromise<PacienteData[]> => {
    const response = axios.get(`${baseUrl}/list/0`)
    console.log(response)
    return (await response).data.content
}

export function usePacienteData(){

    const query = useQuery({
        queryFn: list,
        queryKey: ['paciente-data'],
        retry: 2
    })

    return {
        ...query,
        data: query?.data
    }

}