"use client";

import { useContext, useEffect, useState } from "react";
import { Modal } from "../Modal";
import { ModalContext } from "@/app/context/ModalContext";

interface ModalCreateAccountProps {
    modalView: boolean;
    children: React.ReactNode;
}

export function ModalCreateAccount({modalView, children }: ModalCreateAccountProps) {
    const { isOpen } = useContext(ModalContext);

    return (
        <div>
            {children}
            {isOpen && modalView ? (
                <Modal modalTtile="Criar conta">
                    <h1>Olá 1</h1>
                </Modal>
            ) : null}
        </div>
    );
}
