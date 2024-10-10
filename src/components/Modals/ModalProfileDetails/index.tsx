import modal from "@/components/Ui/Modal/ui_modal.module.css";

import css from "./Details.module.css";

import { Modal, ModalProps } from "@/components/Ui/Modal";
import { useModal } from "@/hooks/useModal";
import { Loading } from "@/components/Loading";
import { ServiceProvider } from "@/app/(user)/feed/components/CardProfile";
import { Scheduling } from "@/app/(user)/feed/components/Scheduling";
import { Button } from "@/components/Button";
import { ServicesList } from "@/app/(user)/feed/components/ServicesList";
import { Reviews } from "@/components/Review";

export function ModalProfileDetails({ children, data }: ModalProps & ServiceProvider) {
    const { modalName, openModal } = useModal();
    const thisModalName = "ModalPorfileDetails";

    //console.log(infoId)
    return (
        <>
            <span onClick={() => openModal(thisModalName)}>{children}</span>
            {modalName === thisModalName ? (
                <Modal modalTitle="Detalhes">
                    <div className={modal.box}>
                        <ul className={css.content}>
                            <li className={css.contentText}>
                                <p className="font-semibold">Nome:</p>
                                <p>{data.name}</p>
                            </li>
                            <li className={css.contentText}>
                                <p className="font-semibold">Agenda:</p>
                                <Scheduling status={data.scheduling} />
                            </li>
                            <li className={css.contentText}>
                                
                                <ServicesList services={data.services} />
                            </li>
                            <li className={css.contentText}>
                                <p className="font-semibold">Descrição:</p>
                                <p>{data.description}</p>
                            </li>

                            <li className={css.contentText}>
                                <p className="font-semibold">Pontuação:</p>
                                {/* <p>{data.review}</p> */}
                                <Reviews reviewScore={data.review}/>
                            </li>
                        </ul>
                        <Button className="serena-btn-large">
                            Realizar agendamento
                        </Button>
                    </div>
                </Modal>
            ) : null}
        </>
    );
}
