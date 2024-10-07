import modal from "@/components/Ui/Modal/ui_modal.module.css";

import detailsSP from "./Details.module.css"

import { Modal, ModalProps } from "@/components/Ui/Modal";
import { useModal } from "@/hooks/useModal";

interface DetailsServiceProviderProps {
    data: any /* {
        id: number;
        name: string;
        description: string;
        services: string;
    }; */
    // onClick: () => void;
}

type props = DetailsServiceProviderProps & ModalProps;

export function DetailsServiceProvider({ children, data }: props) {

    const { modalName, openModal } = useModal();
    const thisModalName = "DetailsServiceProvider";

    return (
        <>
            <span onClick={() => openModal(thisModalName)}>{children}</span>
            {modalName === thisModalName ? (
                <Modal modalTitle="Detalhes">
                    <div className={modal.box}>
                        <ul className={detailsSP.content}>
                            <li className={detailsSP.contentText}>
                                <p className="font-semibold">Nome:</p>
                                <p>{data.name}</p>
                            </li>
                            <li className={detailsSP.contentText}>
                                <p className="font-semibold">Descrição:</p>
                                <p>{data.description}</p>
                            </li>

                            {/* <p>
                                Serviços:
                            </p>
                            {data.services.map((service: any) => (
                                <ul key={service.id}>
                                    <li>
                                        Nome do Serviço: {service.name}
                                    </li>
                                    <li>Tempo: {service.time} minutos</li>
                                    <li>Preço: R$ {service.price}</li>
                                </ul>
                            ))} */}
                        </ul>
                    </div>
                </Modal>
            ) : null}
        </>
    );
}
