import "@/app/components/Modals/modals_styles.css";

import { Button } from "../../Button";
import { Modal, ModalProps } from "../Modal";
import { useModalContext } from "@/app/hooks/useModalContext";

import Image from "next/image";
import serena_asset_1 from "@/app/assets/images/serena_asset_1.svg";

export function ModalLoginAccount({ thisModalIsOpen, children }: ModalProps) {
    const { isOpen } = useModalContext();

    return (
        <div>
            {children}
            {isOpen && thisModalIsOpen ? (
                <Modal modalTitle="Entrar">
                    <div className="model-content">
                        <h3 className="content__msg">
                            <span className="content__msg-style">
                                {" "}
                                Bem vindo de volta!
                            </span> Qual o seu tipo de conta?
                        </h3>

                        <Image
                            src={serena_asset_1}
                            width={130}
                            height={130}
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
