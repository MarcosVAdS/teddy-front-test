import { useState } from "react";
import BaseApiService from "../services/baseApi.service";
import { Employee } from "../models/employee.model";

type EmployeeProps = Partial<Employee>

const EmployeeForm = (employee: EmployeeProps) => {
    const baseApiService = new BaseApiService()

    let [formData, setFormData] = useState({
        name: employee.name,
        salary: employee.salary,
        company: employee.company,
        id: employee.id
    })

    const handleInputChange = (e: any) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitForm = async () => {
        try {
            if(formData.id) {
                await baseApiService.put<Employee>('/employee/', formData)
            }
            if(!formData.id) {
                await baseApiService.post<Employee>('/employee/', formData)
            }
        } catch (error) {
            console.log(error)
            //create an error treatment or show a snackbar with a message
        }
    }

    return (
        <form onSubmit={submitForm} className="grid grid-cols-1 grid-rows-3 justify-items-center gap-y-3">
            <input type="text" name="name" 
                    className="border-solid border-2 border-gray-200 rounded-s-sm w-96 h-14 px-3"
                    placeholder="Digite o nome:"
                    value={formData.name}
                    onChange={handleInputChange}
                    required>
            </input>
            <input type="text" name="salary" 
                    className="border-solid border-2 border-gray-200 rounded-s-sm w-96 h-14 px-3"
                    placeholder="Digite o salário:"
                    value={formData.salary}
                    onChange={handleInputChange}
                    required>
            </input>
            <input type="text" name="company" 
                    className="border-solid border-2 border-gray-200 rounded-s-sm w-96 h-14 px-3"
                    placeholder="Digite o valor da empresa:"
                    value={formData.company}
                    onChange={handleInputChange}
                    required>
            </input>
            <button type="submit" className="rounded-s-sm bg-orange-500 w-96 h-14">Entrar</button>
        </form>
    )
}

export default EmployeeForm