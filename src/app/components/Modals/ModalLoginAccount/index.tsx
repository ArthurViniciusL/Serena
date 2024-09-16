import "./ModalLoginAccount_styles.css";

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
                    <div className="model-login-content">
                        <h3 className="login-content__msg">
                            <span className="login-content__msg-style">
                                {" "}
                                Bem vindo de volta
                            </span>
                            , qual o seu tipo de conta?
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
