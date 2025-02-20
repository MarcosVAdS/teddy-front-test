import { createContext, ElementType, ReactNode, useState } from "react";
import ModalComponentContext from "../models/modalComponentContext.model";

const modalComponentContext = createContext<ModalComponentContext | undefined>(undefined)
 
const ModalComponentContextComponent = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState(false)
    const [content, setModalContent] = useState<ElementType | undefined>(undefined)
    const [contentProps, setContentProps] = useState<Record<string,any>>({})

    const openModal = (content: ElementType, props: any = {}) => {
        setModalContent(() => content)
        setState(true)
        setContentProps(props)
      };
    
    const closeModal = () => {
        setState(false)
        setModalContent(undefined)
        setContentProps({})
    };

    return (
        <modalComponentContext.Provider value={{ state, content, contentProps, openModal, closeModal }}>
            {children}
        </modalComponentContext.Provider>
    )
}

export { ModalComponentContextComponent, modalComponentContext }