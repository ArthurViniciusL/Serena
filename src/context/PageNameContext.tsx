"use client";

import { createContext, useMemo, useState } from "react";

export const PageNameContext = createContext<any>({});

interface PageNameProps {
    children: React.ReactNode;
}

export function PageNameProvider({ children }: PageNameProps) {

    const [pageName, setPageName] = useState<boolean>();

    /*     function setPageName(name: string) {
            setCurrentPage(name);
        } */

    const memoValue = useMemo(
        () => ({
            pageName,
            setPageName,
        }),
        [pageName],
    );

    return (
        <PageNameContext.Provider
            value={{ pageName, setPageName, memoValue }}
        >
            {children}
        </PageNameContext.Provider>
    );
}
