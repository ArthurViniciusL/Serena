import { useOpenModal } from "@/app/hooks/useOpenModal";
import { Modal } from "../Modal";
import { useModalContext } from "@/app/hooks/useModalContext";

interface ModalLoginAccountProps {
    view: boolean;
    children: React.ReactNode;
}

export function ModalLoginAccount({
    view,
    children
}: ModalLoginAccountProps) {
    const { isOpen } = useModalContext();

    return (
        <div>
            {children}
            {isOpen && view ? (
                <Modal modalTtile="Entrar">
                    <h1>Olá 2</h1>
                </Modal>
            ) : null}
        </div>
    );
}
