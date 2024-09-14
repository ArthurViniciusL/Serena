"use client";

import { useContext, useEffect } from "react";
import { Modal } from "../Modal";
import { ModalContext } from "@/app/context/ModalContext";

interface ModalLoginAccountProps {
    modalView: boolean;
    children: React.ReactNode;
}

export function ModalLoginAccount({modalView, children }: ModalLoginAccountProps) {
    const { isOpen } = useContext(ModalContext);

    return (
        <div>
            {children}
            {isOpen && modalView ? (
                <Modal modalTtile="Entrar">
                    <h1>Olá 2</h1>
                </Modal>
            ) : null}
        </div>
    );
}
