import { Modal, ModalProps } from "@/components/Modals/Modal";
import { useModal } from "@/hooks/useModal";

interface ModalSeeDetailsProps {
    id: number;
    name: string;
}

type props = ModalSeeDetailsProps & ModalProps

export function ModalSeeDetails({ children, id, name }: props) {

    const thisModalName = "ModalSeeDetails";
    const { modalName } = useModal();

    return (
        <div>
            {children}
            {modalName === thisModalName ? (
                <Modal modalTitle="Ver detalhes">
                    <div className="modal-content">
                        <p>ID: {id}</p>
                        <p>Nome: {name}</p>
                        <h1>...</h1>
                    </div>
                </Modal>
            ) : null}
        </div>
    )
}