import { Modal, ModalProps } from "@/components/Ui/Modal";
import { useModal } from "@/hooks/useModal";
interface ModalSeeDetailsProps {
    data: {
        id: number;
        name: string;
        description: string;
    };
    onClick: () => void;
}

type props = ModalSeeDetailsProps & ModalProps;

export function ModalSeeDetails({ children, data, onClick }: props) {
    const { modalName, openModal } = useModal();
    const thisModalName = "ModalSeeDetails";
    //console.log(data)

    return (
        <div onClick={onClick}>
            <span onClick={() => openModal(thisModalName)}>{children}</span>
            {modalName === thisModalName ? (
                <Modal modalTitle="Ver detalhes">
                    <div className="app-modal-content">
                        <div>
                            <p>Name: {data.name}</p>
                            <p>Descrição: {data.description}</p>
                        </div>

                        {/* <p>Nome: {data.name}</p>
                        <h1>...</h1> */}
                    </div>
                </Modal>
            ) : null}
        </div>
    );
}
