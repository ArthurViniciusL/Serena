"use client";

import { createContext, useMemo, useState } from "react";

export const ButtonContext = createContext<any>({});

interface ButtonProviderProps {
    children: React.ReactNode;
}

export function ButtonProvider({ children }: ButtonProviderProps) {
    const [buttonActive, setButtonActive] = useState<string>("");

    function activeButton(name: string) {
        setButtonActive(name);
    }

    const memoValue = useMemo(
        () => ({
            buttonActive,
            activeButton,
        }),
        [buttonActive],
    );

    return (
        <ButtonContext.Provider
            value={{ buttonActive, activeButton, memoValue }}
        >
            {children}
        </ButtonContext.Provider>
    );
}
