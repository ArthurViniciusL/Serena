"use client";

import { createContext, useState } from "react";
import { useOpenModal } from "../hooks/useOpenModal";

export const ModalContext = createContext<any>({});

interface ModalProviderProps {
    children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
    const { state, dispatch } = useOpenModal();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}
