import "./parentModal_styles.css";
import { Button } from "../../Button";
import { CircleCloseIcon } from "@/app/modules/app.modules";
import { useModalContext } from "@/app/hooks/useModalContext";

export interface ModalProps {
    modalTitle?: string;
    children: React.ReactNode;
}

export function Modal({ modalTitle, children }: ModalProps) {
    const { isOpen, closeModal } = useModalContext();

    if (isOpen) {
        return (
            <div className="modal-background">
                <div className="modal-box">
                    <div className="modal-header">
                        <span className="modal-header__span"></span>
                        <p className="modal-title-style">{modalTitle}</p>
                        <Button
                            onClick={() => closeModal()}
                            bgColorHover="var(--serena-01)"
                        >
                            <CircleCloseIcon size={20} />
                        </Button>
                    </div>

                    <section className="modal-content">{children}</section>
                </div>
            </div>
        );
    }
    return null;
}
