"use client";

import { createContext, useState } from "react";

export const ModalContext = createContext<any>({});

interface ModalProviderProps {
    children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {

    // const { state, dispatch } = useModal();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modalName, setModalName] = useState<string>('');

    function openModal(modalName: string) {
        setIsOpen(true);
        setModalName(modalName);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalName }}>
            {children}
        </ModalContext.Provider>
    );
}
