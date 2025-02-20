import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const submitForm = () => {
        navigate('/employees')
    }

    return (
        <form onSubmit={submitForm} className="grid grid-cols-1 grid-rows-3 p-12 justify-items-center gap-y-4">
            <h1 className="font-normal text-4xl tracking-normal">Olá, seja bem vindo!</h1>
            <input type="text" className="border-solid border-2 border-gray-200 rounded-s-sm w-96 h-14 px-3"
                    placeholder="Digite seu nome:" 
                    onChange={(e) => setName(e.target.value)}
                    required></input>
            <button type="submit" className="rounded-s-sm bg-orange-500 w-96 h-14">Entrar</button>
        </form>
    )
}

export default LoginForm