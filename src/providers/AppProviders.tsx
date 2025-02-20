import { ReactNode } from "react";
import { ModalComponentContextComponent } from "../contexts/modalComponent.context";
import { EmployeeContextComponent } from "../contexts/selectedEmployees.context";

const AppProviders = ({ children }: { children: ReactNode}) => {
    return (
        <ModalComponentContextComponent>
            <EmployeeContextComponent>
                {children}
            </EmployeeContextComponent>
        </ModalComponentContextComponent>
    )
}

export default AppProviders