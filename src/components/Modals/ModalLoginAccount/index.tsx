import "@/components/Modals/modals_styles.css";

import { Button } from "../../Button";
import { Modal, ModalProps } from "../../Ui/Modal";
import { useModal } from "@/hooks/useModal";

import Image from "next/image";
import serena_asset_1 from "@/assets/images/serena_asset_1.svg";

export function ModalLoginAccount({ children }: ModalProps) {
    const thisModalName = "ModalLoginAccount";
    const { modalName, openModal } = useModal();

    return (
        <div>
            <span onClick={() => openModal(thisModalName)}>
                {children}
            </span>
            {modalName === thisModalName ? (
                <Modal modalTitle="Entrar">
                    <div className="modal-content">
                        <h3 className="content__msg">
                            <span className="content__msg-style">
                                Bem vindo de volta!
                            </span>{" "}
                            Qual o seu tipo de conta?
                        </h3>

                        <Image
                            className="content__img"
                            src={serena_asset_1}
                            width={110}
                            height={110}
                            alt="login ilustration"
                            priority={true}
                        />

                        <div className="buttons-container">
                            <Button>Serviço</Button>
                            <p style={{ color: "var(--font-color-04)" }}>ou</p>
                            <Button>Cliente</Button>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </div>
    );
}
