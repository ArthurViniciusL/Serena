import modal from "@/components/Ui/Modal/ui_modal.module.css";

import { Button } from "../../Button";
import { Modal, ModalProps } from "../../Ui/Modal";
import { useModal } from "@/hooks/useModal";

import serena_asset_2 from "@/assets/images/serena_asset_2.svg";
import Image from "next/image";

export function ModalCreateAccount({ children }: ModalProps) {
    const thisModalName = "ModalCreateAccount";
    const { modalName, openModal } = useModal();

    return (
        <>
            <span onClick={() => openModal(thisModalName)}>{children}</span>
            {modalName === thisModalName ? (
                <Modal modalTitle="Criar conta">
                    <div className={modal.box}>
                        <h3 className={modal.contentMsg}>
                            <span className="font-semibold">
                                Seja bem vindo!
                            </span>{" "}
                            Que tipo de conta você quer criar?
                        </h3>

                        <Image
                            className={modal.contentImg}
                            src={serena_asset_2}
                            width={200}
                            height={200}
                            alt="signUp ilustration"
                            priority={true}
                        />

                        <div className={modal.contentBtn}>
                            <Button className="serena-btn-medium">
                                Serviço
                            </Button>
                            <p className="serena-ft-color-04">ou</p>
                            <Button className="serena-btn-medium">
                                Cliente
                            </Button>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </>
    );
}
