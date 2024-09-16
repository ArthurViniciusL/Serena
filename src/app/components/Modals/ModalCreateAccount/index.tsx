import { Modal } from "../Modal"
import { useModalContext } from "@/app/hooks/useModalContext";

interface ModalCreateAccountProps {
    view: boolean;
    children: React.ReactNode;
}

export function ModalCreateAccount({view, children }: ModalCreateAccountProps) {

    const { isOpen } = useModalContext();

    return (
        <div>
            {children}
            {isOpen && view ? (
                <Modal modalTtile="Criar conta">
                    <h1>Olá 1</h1>
                </Modal>
            ) : null} 
        </div>
    );
}
