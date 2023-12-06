import axios, { AxiosPromise } from "axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { CancelamentoForm } from "../../interface/form/consulta/CancelamentoForm"
const baseUrl = "http://localhost:8085/Consulta"

const post = async (cancelamento:CancelamentoForm):AxiosPromise<any> => {
    console.log(cancelamento)
    const response = axios.delete(`${baseUrl}`,{data:cancelamento})
    console.log(response)
    return (await response).data.content
}

export function useCancelamentoForm(){
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