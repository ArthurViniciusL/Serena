import "@/app/components/Modals/modals_styles.css";

import { Button } from "../../Button";
import { Modal, ModalProps } from "../Modal";
import { useModalContext } from "@/app/hooks/useModalContext";

import serena_asset_2 from "@/app/assets/images/serena_asset_2.svg";
import Image from "next/image";

export function ModalCreateAccount({ thisModalIsOpen, children }: ModalProps) {
    const { isOpen } = useModalContext();
    return (
        <div>
            {children}
            {isOpen && thisModalIsOpen ? (
                <Modal modalTitle="Criar conta">
                    <div className="modal-content">
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
                            <Button>Cliente</Button>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </div>
    );
}
