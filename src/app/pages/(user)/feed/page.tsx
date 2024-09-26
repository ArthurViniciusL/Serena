"use client";

import routes from "@/app.routes";
import useSearch from "@/hooks/useSearch";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { usePageName } from "@/hooks/usePageName";
import { SerenaIconListFilter } from "@/modules/app.modules";
import { useEffect, useState } from "react";
import { UserCard } from "@/components/UserCard";

export default function Feed() {
    const { setPageName, memoValue } = usePageName();

    const { search, setSearch } = useSearch();

    const [servicesProviders, setServicesProviders] = useState<any>([])

    useEffect(() => {
        async function fillButton() {
            setPageName(routes.Feed);
        }

        async function fetchData() {
            const api = await fetch("http://localhost:8000/services-providers");
            const data: any = await api.json();

            setServicesProviders(data)
        }

        fillButton();
        fetchData();
    }, [memoValue, search]);

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    /* https://www.youtube.com/watch?v=E1cklb4aeXA&list=LL&index=7 */

    return (
        <div>
            <Header colorFill="var(--bg-color-01)">
                <SearchBar onChange={handleSearch} />
                <Button>
                    <SerenaIconListFilter />
                    Filtrar categoria
                </Button>
            </Header>
            <main className="app-main">

                <section className="app-section flex items-center justify-center">
                    <ul>
                        {servicesProviders.map((provider: any) => (
                            <li key={provider.id}>
                                {/* <h2>{provider.name}</h2>
                                <p>{provider.description}</p>
                                <p>Categoria: {provider.category}</p>
                                <p>Telefone: {provider.phone}</p> */}
                                <UserCard id={provider.id} name={provider.name} category={provider.category} />
                            </li>
                        ))}
                    </ul>
                </section>


            </main>
        </div>
    );
}
