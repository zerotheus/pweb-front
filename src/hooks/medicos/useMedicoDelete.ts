import axios, { AxiosPromise } from "axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
const baseUrl = "http://localhost:8084/Medico"

const unRegister = async (id:number):AxiosPromise<any> => {
    const response = axios.delete(`${baseUrl}/Delete/`+ id)
    return response
}

export function useMedicoDelete(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: unRegister,
        retry: 2,
        onSuccess: () =>{
            queryClient.invalidateQueries(['medico-data'])
        }
    })
    return mutate

}