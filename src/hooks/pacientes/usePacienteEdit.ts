import axios, { AxiosPromise } from "axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { PacienteForm } from "../../interface/form/Paciente/PacienteForm"
const baseUrl = "http://localhost:8083/Paciente"

export interface PutProps{
    pacienteForm:PacienteForm,
    id:number
}


const edit = async ({pacienteForm,id}:PutProps):AxiosPromise<any> => {
    const response = axios.put(`${baseUrl}/Edit/`+ id,pacienteForm)
    return response
}

export function usePacienteEdit(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: edit,
        retry: 2,
        onSuccess: () =>{
            queryClient.invalidateQueries(['paciente-data'])
        }
    })
    return mutate

}