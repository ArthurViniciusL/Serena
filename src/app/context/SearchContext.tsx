"use client";

import { createContext, useState } from "react";

export const SearchBarContext = createContext<any>({});

interface SearchBarProviderProps {
    children: React.ReactNode;
}

export function SearchBarProvider({ children }: SearchBarProviderProps) {
    const [search, setSearch] = useState<string>("");

    return (
        <SearchBarContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchBarContext.Provider>
    );
}
