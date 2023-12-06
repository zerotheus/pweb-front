import axios, { AxiosPromise } from "axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { MedicoForm } from "../../interface/form/Medico/MedicoForm"
const baseUrl = "http://localhost:8084/Medico"

const post = async (data:MedicoForm):AxiosPromise<any> => {
    const response = axios.post(`${baseUrl}/Register`,data)
    console.log(response)
    return (await response).data.content
}

export function useMedicoForm(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: post,
        retry: 2,
        onSuccess: () =>{
            queryClient.invalidateQueries(['medico-data'])
        }
    })

    return mutate

}