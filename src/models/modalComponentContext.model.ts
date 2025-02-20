import { ElementType } from "react"

interface ModalComponentContext {
    state?: boolean
    content?: ElementType
    contentProps?: any
    openModal?: (content: ElementType, props: any) => void
    closeModal?: () => void
}

export default ModalComponentContext