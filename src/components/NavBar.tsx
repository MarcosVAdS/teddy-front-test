import { useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/logo.webp"


const NavBar = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const navigateToRoute = (route: string) => {
        navigate(route)
    }

    return (
        <div className="flex justify-around items-center h-20 w-full border-b border-gray-300 shadow-md mb-4">
            <img src={logo} className="h-16 w-24"></img>
            <div className="grid grid-cols-3 gap-2 place-content-center place-items-center">
                <a className={location.pathname === "/employees" ? "text-orange-500 underline decoration-current" : "cursor-pointer"} 
                    onClick={() => navigateToRoute("/employees")}>Clientes</a>
                <a className={location.pathname === "/employees/selected" ? "text-orange-500 underline decoration-current" : "cursor-pointer"} 
                    onClick={() => navigateToRoute("/employees/selected")}>Clientes Selecionados</a>
                <a className={location.pathname === "/" ? "" : "cursor-pointer"} 
                onClick={() => navigateToRoute("/")}>Sair</a>
            </div>
            <span>Olá, usuario</span>
        </div>
    )
}

export default NavBar