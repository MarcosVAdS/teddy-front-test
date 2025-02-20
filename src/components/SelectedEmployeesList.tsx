import { useContext } from "react"
import { employeeContext } from "../contexts/selectedEmployees.context"
import EmployeesList from "./EmployeesList"
import NavBar from "./NavBar"


const SelectedEmployeesList = () => {

    const { employees } = useContext(employeeContext)

    return (
        <div>
            <NavBar/>
            <EmployeesList employees={employees}/>
        </div>
    )
}

export default SelectedEmployeesList