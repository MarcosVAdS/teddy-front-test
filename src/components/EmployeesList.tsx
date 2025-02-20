import { Employee } from "../models/employee.model"
import EmployeeCard from "./EmployeeCard"


const EmployeesList = ({ employees }:  { employees: Employee[] }) => {

    return (
        <div className='grid justify-items-center px-96'>
                <span className='justify-self-start mb-4'>{employees.length} clientes encontrados:</span>
                <div className="grid grid-cols-4 grid-flow-row gap-5 w-full">
                    {employees.map((employee: Employee) => <EmployeeCard employee={employee}/>)}
                </div>
        </div>
    )
}

export default EmployeesList