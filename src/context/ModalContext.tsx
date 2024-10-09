"use client";

import { createContext, useState } from "react";

export const ModalContext = createContext<any>({});

interface ModalProviderProps {
    children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modalName, setModalName] = useState<string>("");
    const [infoId, setinfoId] = useState<number>(0);

    // const [data, setData] = useState<object>([]);

    function openModal(modalName: string) {
        setIsOpen(true);
        setModalName(modalName);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function selectContentInfo(id: number, infos: object) {
        setinfoId(id);
        // setData(infos);
    }

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
                modalName,
                infoId,
                selectContentInfo,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}
