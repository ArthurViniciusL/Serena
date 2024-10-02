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
                    <div className="">
                        <div className="flex gap-4 flex-col">
                            <span className="flex p-2 content-start align-bottom gap-2 border-solid border-b-2 border-[var(--bg-color-02)]">
                                <h3 className="font-semibold">Nome:</h3>
                                {data.name}
                            </span>
                            <span className="flex p-2 content-start align-bottom gap-2 border-solid border-b-2 border-[var(--bg-color-02)]">
                                <h3 className="font-semibold">Descrição:</h3>
                                {data.description}
                            </span>

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
                        </div>
                    </div>
                </Modal>
            ) : null}
        </>
    );
}
