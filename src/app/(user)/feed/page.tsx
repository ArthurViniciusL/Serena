"use client";

import routes from "@/app.routes";
import useSearch from "@/hooks/useSearch";
import { SearchBar } from "@/components/SearchBar";
import { usePageName } from "@/hooks/usePageName";
import { useEffect, useState } from "react";
import { Menu } from "@/components/Ui/Menu";
import { CardServiceProvider } from "../components/CardServiceProvider";
import { useModal } from "@/hooks/useModal";
import { DetailsServiceProvider } from "@/components/Modals/DetailsServiceProvider";

export default function Feed() {
    const { setPageName } = usePageName();
    const { search, setSearch } = useSearch();

    const { selectContentInfo, infoId } = useModal();

    const [isLoad, setIsLoad] = useState(false);
    const [servicesProviders, setServicesProviders] = useState<any>([]);
    const dataFilter = servicesProviders.filter((providers: any) =>
        providers.name.toLowerCase().includes(search.toLowerCase()),
    );

    useEffect(() => {
        setPageName(routes.Feed);

        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            try {
                const response = await fetch(
                    process.env.NEXT_PUBLIC_SERVICES_PROVIDERS as string,
                    { signal },
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch service providers");
                }
                const data = await response.json();
                setServicesProviders(data);
            } catch (e: any) {
                console.error("Erro ao buscar dados: ", e);
            }

            setIsLoad(true);
        }

        fetchData();

        return () => {
            /* canceling the api request, in case the user cancels the page call */
            controller.abort();
        };
    }, []);

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    /* https://www.youtube.com/watch?v=E1cklb4aeXA&list=LL&index=7 */

    const seletUser = servicesProviders.find((u: any) => u.id === infoId);

    if (isLoad) {
        return (
            <div>
                <Menu>
                    <SearchBar onChange={handleSearch} />
                    
                    {/* <Button>
                        <SerenaIconListFilter />
                        Filtrar categoria
                    </Button> */}

                    {/* <Input onChange={handleSearch} placeholder="Algo" type="search"/> */}

                </Menu>

                <main className="serena-main">
                    <section className="serena-section flex items-center justify-center">
                        <ul>
                            {dataFilter.map((provider: any) => (
                                <li key={provider.id}>
                                    {
                                        <DetailsServiceProvider data={seletUser}>
                                            <CardServiceProvider
                                                name={provider.name}
                                                review={provider.review}
                                                category={provider.category}
                                                onClick={() => selectContentInfo(provider.id)}
                                            />
                                        </DetailsServiceProvider>
                                    }
                                </li>
                            ))}
                        </ul>
                        {dataFilter.length === 0 ? (
                            <p style={{ color: "var(--font-color-08)" }}>
                                Nenhum resultado encontrado
                            </p>
                        ) : null}
                    </section>
                </main>
            </div>
        );
    } else {
        return (
            <section className="serena-section flex items-center justify-center h-[90vh] bg-transparent">
                <span className="loading loading-ring loading-lg"></span>
            </section>
        );
    }
}
