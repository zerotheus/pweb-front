import axios, { AxiosPromise } from "axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { PacienteForm } from "../../interface/form/Paciente/PacienteForm"
const baseUrl = "http://localhost:8083/Paciente"

const register = async (data:PacienteForm):AxiosPromise<any> => {
    console.log(data)
    const response = axios.post(`${baseUrl}/Register`,data)
    return response
}

export function usePacienteForm(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: register,
        retry: 2,
        onSuccess: () =>{
            queryClient.invalidateQueries(['paciente-data'])
        }
    })
    return mutate

}