import { Employee } from "./employee.model";

interface EmployeeContext {
    employees: Employee[]
    addEmployee?: (item: Employee) => void
    removeEmployee?: (id: string) => void
}

export default EmployeeContext