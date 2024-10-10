"use client";

import { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext<any>({});

interface ScreenProviderProps {
    children: React.ReactNode;
}

export function ScreenProvider({ children }: ScreenProviderProps) {
    const [screen, setScreen] = useState<number>(0);

    useEffect(() => {
        setScreen(window.innerWidth);
        function updateScreenSize() {
            setScreen(window.innerWidth);
            // console.log(`Nova largura da tela: ${screen}px`);
        }
        window.addEventListener("resize", updateScreenSize);
    },[screen]);
    
    return (
        <ScreenContext.Provider value={{ screen }}>
            {children}
        </ScreenContext.Provider>
    );
}