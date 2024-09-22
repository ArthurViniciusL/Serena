import "./parentModal_styles.css";
import { Button } from "../../Button";
import { AppIcon_CircleClose } from "@/app/modules/app.modules";
import { useModal } from "@/app/hooks/useModal";
import { useState } from "react";

export interface ModalProps {
    modalTitle?: string;
    children: React.ReactNode;
}

export function Modal({ modalTitle, children }: ModalProps) {

    const { isOpen, closeModal } = useModal();

    const [leaveContent, setLeaveContent] = useState(false);

    function clickOut() {
        if (leaveContent) {
            closeModal();
        }
    }

    if (isOpen) {
        return (
            <div className="modal-background" onClick={clickOut}>
                <div className="modal-box">
                    <div className="modal-header">
                        <span className="modal-header__span"></span>
                        <p className="modal-title-style">{modalTitle}</p>
                        <Button
                            onClick={() => closeModal()}
                            bgColorHover="var(--serena-01)"
                        >
                            <AppIcon_CircleClose size={20} />
                        </Button>
                    </div>

                    <section
                        className="modal-content"
                        onMouseEnter={() => setLeaveContent(false)}
                        onMouseLeave={() => setLeaveContent(true)}
                    >
                        {children}
                    </section>
                </div>
            </div>
        );
    }
    return null;
}
