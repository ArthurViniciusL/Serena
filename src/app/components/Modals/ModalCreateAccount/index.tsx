import { Modal, ModalProps } from "../Modal";
import { useModalContext } from "@/app/hooks/useModalContext";

/* interface ModalCreateAccountProps {
    thisModalIsOpen: boolean | undefined;
    children: React.ReactNode;
} */

export function ModalCreateAccount({ thisModalIsOpen, children }: ModalProps) {
    const { isOpen } = useModalContext();
    return (
        <div>
            {children}
            {isOpen && thisModalIsOpen ? (
                <Modal modalTitle="Criar conta">
                    <h1>Olá 1</h1>
                </Modal>
            ) : null}
        </div>
    );
}
