import "@/components/Modals/modals_styles.css";

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
                    <div className="app-modal-content">
                        <h3 className="content__msg">
                            <span className="content__msg-style">
                                {" "}
                                Seja bem vindo!
                            </span>{" "}
                            Que tipo de conta você quer criar?
                        </h3>

                        <Image
                            className="content__img"
                            src={serena_asset_2}
                            width={200}
                            height={200}
                            alt="signUp ilustration"
                            priority={true}
                        />

                        <div className="buttons-container">
                            <a href="">
                                <Button>Serviço</Button>
                            </a>
                            <p style={{ color: "var(--font-color-04)" }}>ou</p>
                            <a href="">
                                <Button>Cliente</Button>
                            </a>
                            
                        </div>
                    </div>
                </Modal>
            ) : null}
        </>
    );
}
