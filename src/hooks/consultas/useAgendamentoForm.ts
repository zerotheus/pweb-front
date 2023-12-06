import axios, { AxiosPromise } from "axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { agendamentoForm } from "../../interface/form/consulta/AgendamentoForm"
const baseUrl = "http://localhost:8085/Consulta"

const post = async (data:agendamentoForm):AxiosPromise<any> => {
    const response = axios.post(`${baseUrl}`,data)
    console.log(response)
    return (await response).data.content
}

export function useAgendamentoForm(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: post,
        retry: 2,
        onSuccess: () =>{
            queryClient.invalidateQueries(['consulta-data'])
        }
    })

    return mutate

}