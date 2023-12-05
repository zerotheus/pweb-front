import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query"
import { MedicoData } from "../../interface/form/Medico/MedicoData"
const baseUrl = "http://localhost:8084/Medico"

const list = async ():AxiosPromise<MedicoData[]> => {
    const response = axios.get(`${baseUrl}/list/0`)
    console.log(response)
    return (await response).data.content
}

export function useMedicoData(){

    const query = useQuery({
        queryFn: list,
        queryKey: ['medico-data'],
        retry: 2
    })

    return {
        ...query,
        data: query?.data
    }

}