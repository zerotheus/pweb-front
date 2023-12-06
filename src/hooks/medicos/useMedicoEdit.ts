import axios, { AxiosPromise } from "axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { MedicoForm } from "../../interface/form/Medico/MedicoForm"
const baseUrl = "http://localhost:8084/Medico"

export interface PutProps{
    medicoForm:MedicoForm,
    id:number
}


const edit = async ({medicoForm,id}:PutProps):AxiosPromise<any> => {
    console.log(id)
    const response = axios.put(`${baseUrl}/Edit/`+ id,medicoForm)
    return response
}

export function useMedicoEdit(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: edit,
        retry: 2,
        onSuccess: () =>{
            queryClient.invalidateQueries(['medico-data'])
        }
    })
    return mutate

}