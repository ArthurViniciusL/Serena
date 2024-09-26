import { Modal, ModalProps } from "@/components/Ui/Modal";
import { useModal } from "@/hooks/useModal";

interface ModalSeeDetailsProps {
    name: string;
}

type props = ModalSeeDetailsProps & ModalProps;

export function ModalSeeDetails({ children, name }: props) {
    const { modalName, openModal } = useModal();
    const thisModalName = "ModalSeeDetails";

    return (
        <div>
            <span onClick={() => openModal(thisModalName)}>{children}</span>
            {modalName === thisModalName ? (
                <Modal modalTitle="Ver detalhes">
                    <div className="modal-content">
                        
                        <p>Nome: {name}</p>
                        <h1>...</h1>
                    </div>
                </Modal>
            ) : null}
        </div>
    );
}
