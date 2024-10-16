"use client";
import { createContext, useEffect, useState } from "react";

export const UserLoginContext = createContext<any>({});

interface UserLoginProviderProps {
    children: React.ReactNode;
}

export function UserLoginProvider({ children }: UserLoginProviderProps) {

    const [user, setUser] = useState([]);

    const [id, setId] = useState<number>(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_PROVIDER_LOGIN as string);
                if (!response.ok) {
                    throw new Error("Failed to fetch service provider login");
                }
                const data = await response.json();
                setUser(data);

                /* Provisório para buscar o id do usuário que fez login */

                data.map((userData: any) => {
                    if (userData.id) {
                        setId(userData.id)
                    }
                })

            } catch (e: any) {
                console.error("Erro ao buscar dados: ", e);
            }
        }

        fetchData();
    }, []);

    return (
        <UserLoginContext.Provider value={{ id, user }}>
            {children}
        </UserLoginContext.Provider>
    )
}