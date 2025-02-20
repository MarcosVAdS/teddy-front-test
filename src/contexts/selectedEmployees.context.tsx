import { createContext, ReactNode, useState } from "react";
import EmployeeContext from "../models/employeeContext.model";
import { Employee } from "../models/employee.model";

const employeeContext = createContext<EmployeeContext>({
    employees: []
})

const EmployeeContextComponent = ({ children }: { children: ReactNode }) => {    
    const [employees, setEmployees] = useState<Employee[]>([])

    const addEmployee = (employee: Employee) => {
        setEmployees((employeesList: Employee[]) => {
            if(employeesList.some((item: Employee) => item.id === employee.id)) {
                return employeesList
            }
            return [...employeesList, employee]
        })
    }

    const removeEmployee = (id: string) => {
        setEmployees((employeesList) => employeesList.filter((employee) => employee.id !== id))
    }

    return (
        <employeeContext.Provider value={{ employees, addEmployee, removeEmployee }}>
            {children}
        </employeeContext.Provider>
    );
}

export { EmployeeContextComponent, employeeContext }