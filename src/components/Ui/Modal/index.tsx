import "./Modal-styles.css";
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
            <dialog className="serena-modal-background" onClick={clickOut}>
                <div
                    className="serena-modal-box"
                    onMouseEnter={() => setLeaveContent(false)}
                    onMouseLeave={() => setLeaveContent(true)}
                >
                    <div className="serena-modal-header">
                        <span className="serena-modal-header__span"></span>
                        <h3 className="serena-modal-title-style">{modalTitle}</h3>
                        <Button
                            onClick={() => closeModal()}
                            bgColorHover="var(--serena-01)"
                        >
                            <SerenaIconCircleClose size={20} />
                        </Button>
                    </div>

                    <section className="serena-modal-content">{children}</section>
                </div>
            </dialog>
        );
    }
    return null;
}
