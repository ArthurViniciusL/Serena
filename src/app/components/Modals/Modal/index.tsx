"use client";

import { useContext, useEffect, useState } from "react";
import "./modal_styles.css";
import { Button } from "../../Button";
import { CircleCloseIcon } from "@/app/modules/app.modules";
import { ModalContext } from "@/app/context/ModalContext";
import { useModalContext } from "@/app/hooks/useModalContext";

interface ModalProps {
    modalTtile: string;
    children: React.ReactNode;

    /* modalState: boolean; */
}

export function Modal({ modalTtile, children }: ModalProps) {
    const { isOpen, closeModal } = useModalContext();

    //const { isOpen, closeModal } = useContext(ModalContext)

    if (isOpen) {
        return (
            <div className="modal-box">
                <div className="modal-content">
                    <div className="modal-content__header">
                        <span className="modal-content__span"></span>
                        <p className="modal-title-style">{modalTtile}</p>
                        <Button onClick={() => closeModal()}
                            bgColorHover="var(--serena-01)"
                        >
                            <CircleCloseIcon size={20} />
                        </Button>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
    return null;
}
