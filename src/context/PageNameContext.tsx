"use client";

import { createContext, useMemo, useState } from "react";

export const PageNameContext = createContext<any>({});

interface PageNameProps {
    children: React.ReactNode;
}

export function PageNameProvider({ children }: PageNameProps) {
    const [currentPage, setCurrentPage] = useState<string>("");

    function setPageName(name: string) {
        setCurrentPage(name);
    }

    const memoValue = useMemo(
        () => ({
            currentPage,
            setPageName,
        }),
        [currentPage],
    );

    return (
        <PageNameContext.Provider
            value={{ currentPage, setPageName, memoValue }}
        >
            {children}
        </PageNameContext.Provider>
    );
}
