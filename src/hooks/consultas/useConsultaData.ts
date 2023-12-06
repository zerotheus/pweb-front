import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query"
import { ConsultaData } from "../../interface/form/consulta/ConsultaData"
const baseUrl = "http://localhost:8085/Consulta"

const list = async ():AxiosPromise<ConsultaData[]> => {
    const response = axios.get(`${baseUrl}/list/0`)
    console.log(response)
    return (await response).data.content
}

export function useConsultaData(){

    const query = useQuery({
        queryFn: list,
        queryKey: ['consulta-data'],
        retry: 2
    })

    return {
        ...query,
        data: query?.data
    }

}