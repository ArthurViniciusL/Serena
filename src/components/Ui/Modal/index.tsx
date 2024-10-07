import modal from "./Modal.module.css";
import { Button } from "../../Button";
import { SerenaIconCircleClose } from "@/modules/app.modules";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";

export interface ModalProps {
    modalTitle?: string;
    children: React.ReactNode;
}

export function Modal({ modalTitle, children }: ModalProps) {
    const { isOpen, closeModal } = useModal();

    const [leaveContent, setLeaveContent] = useState(true);

    function clickOut() {
        if (leaveContent) {
            closeModal();
        }
    }

    if (isOpen) {
        return (
            <dialog className={modal.container} onClick={clickOut}>
                <main
                    className={modal.box}
                    onMouseEnter={() => setLeaveContent(false)}
                    onMouseLeave={() => setLeaveContent(true)}
                >
                    <header className={modal.header}>
                        <span className={modal.span}></span>
                        <h2 className="font-bold">{modalTitle}</h2>
                        <Button
                            onClick={() => closeModal()}
                            bgColorHover="var(--serena-red-01)"
                        >
                            <SerenaIconCircleClose size={20} />
                        </Button>
                    </header>

                    <section className={modal.content}>{children}</section>
                </main>
            </dialog>
        );
    }
    return null;
}
