import modal from "@/components/Ui/Modal/ui_modal.module.css";

import { Button } from "../../Button";
import { Modal, ModalProps } from "../../Ui/Modal";
import { useModal } from "@/hooks/useModal";

import Image from "next/image";
import serena_asset_1 from "@/assets/images/serena_asset_1.svg";

export function ModalLoginAccount({ children }: ModalProps) {
    const thisModalName = "ModalLoginAccount";
    const { modalName, openModal } = useModal();

    return (
        <>
            <span onClick={() => openModal(thisModalName)}>{children}</span>
            {modalName === thisModalName ? (
                <Modal modalTitle="Entrar">
                    <div className={modal.box}>
                        <h3 className={modal.contentMsg}>
                            <span className="font-semibold">
                                Bem vindo de volta!
                            </span>{" "}
                            Qual o seu tipo de conta?
                        </h3>

                        <Image
                            className={modal.contentImg}
                            src={serena_asset_1}
                            width={110}
                            height={110}
                            alt="login ilustration"
                            priority={true}
                        />
                        <div className={modal.contentBtn}>
                            <Button className="">
                                Serviço
                            </Button>
                            <p className="">ou</p>
                            <Button className="">
                                Cliente
                            </Button>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </>
    );
}
