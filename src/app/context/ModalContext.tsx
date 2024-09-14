"use client";

import { createContext, useState } from "react";

export const ModalContext = createContext<any>({});

interface ModalProviderProps {
    children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function setIsOpenModal(order: boolean) {
        setIsOpen(order);
    }

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpenModal }}>
            {children}
        </ModalContext.Provider>
    );
}
