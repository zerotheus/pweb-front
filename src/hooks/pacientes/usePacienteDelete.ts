import axios, { AxiosPromise } from "axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
const baseUrl = "http://localhost:8083/Paciente"

const unRegister = async (id:number):AxiosPromise<any> => {
    const response = axios.delete(`${baseUrl}/Deleta/`+ id)
    return response
}

export function usePacienteDelete(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: unRegister,
        retry: 2,
        onSuccess: () =>{
            queryClient.invalidateQueries(['paciente-data'])
        }
    })
    return mutate

}