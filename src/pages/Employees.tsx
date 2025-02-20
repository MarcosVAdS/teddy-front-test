import { useState, useEffect, useContext } from 'react'
import BaseApiService from "../services/baseApi.service"
import { Employee } from "../models/employee.model"
import NavBar from '../components/NavBar'
import ModalComponent from '../components/ModalComponent'
import EmployeesList from '../components/EmployeesList'
import { modalComponentContext } from '../contexts/modalComponent.context'
import EmployeeForm from '../components/EmployeeForm'


const Employees = () => {
    const [employees, setEmployees] = useState<Employee[]>([])
    const modal = useContext(modalComponentContext)
    const baseApiService = new BaseApiService()

    const fetchUsers = async () => {
        try {
          const data = await baseApiService.get<Employee[]>('/employee/');
          setEmployees(data)
        } catch (error) {
          console.error(error)
          //create an error treatment or show an skeleton loading on ui or a snackbar with a message
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="min-w-dvw min-h-dvh">
            <NavBar/>
            <div className="">
                <EmployeesList employees={employees}/>
                <div className="mt-5 justify-self-stretch">
                    <button type="button" onClick={() => modal!.openModal!(EmployeeForm, {})} 
                        className="rounded-s-sm bg-transparent cursor-pointer border-orange-500 border-4 w-full h-14">Criar cliente
                    </button>
                </div>
            </div>
            <ModalComponent/>
        </div>
    )
}

export default Employees