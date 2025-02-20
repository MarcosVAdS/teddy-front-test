import { useContext } from "react"
import { modalComponentContext } from "../contexts/modalComponent.context"


const ModalComponent = () => {
    const modal = useContext(modalComponentContext)

    console.log(modal?.state)
    if (!modal || !modal.state || !modal.content) return null; 

    const ModalInnerComponent = modal?.content

    return (
        <div className="flex flex-col items-center justify-center z-50">
                <div className="fixed inset-0 flex items-center justify-center bg-gray-300/50 p-3 rounded-xl border-solid border-2 border-gray-200">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div className="flex justify-between mb-3">
                            <span className="font-bold text-base">Cadastrar cliente:</span>
                            <button onClick={() => modal!.closeModal!()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                            </button>
                        </div>
                        <ModalInnerComponent {...modal!.contentProps}/>                     
                    </div>
                </div>
        </div>
    )
}

export default ModalComponent