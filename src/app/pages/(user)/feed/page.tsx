"use client";

import routes from "@/app.routes";
import useSearch from "@/hooks/useSearch";
import { Button } from "@/components/Button";
import { SearchBar } from "@/components/SearchBar";
import { usePageName } from "@/hooks/usePageName";
import { SerenaIconListFilter } from "@/modules/app.modules";
import { useEffect, useState } from "react";
/* import { Card } from "@/components/Ui/Card"; */
import { Menu } from "@/components/Ui/Menu";
import { ModalSeeDetails } from "@/components/Modals/ModalSeeDetails";
import { Card } from "@/components/Ui/Card";
import { CardServiceProvider } from "../components/CardServiceProvider";

export default function Feed() {
    const { setPageName } = usePageName();
    const { search, setSearch } = useSearch();

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

    const [userId, setUserId] = useState(0);
    function handleId(id: number) {
        setUserId(id);
    }
    const seletUser = servicesProviders.find((u: any) => u.id === userId);

    if (isLoad) {
        return (
            <div>
                <Menu>
                    <SearchBar onChange={handleSearch} />
                    <Button>
                        <SerenaIconListFilter />
                        Filtrar categoria
                    </Button>
                </Menu>

                <main className="app-main">
                    <section className="app-section flex items-center justify-center">
                        <ul>
                            {dataFilter.map((provider: any) => (
                                <li key={provider.id}>
                                    {
                                        <ModalSeeDetails
                                            data={seletUser}
                                            onClick={() =>
                                                handleId(provider.id)
                                            }
                                        >
                                            <CardServiceProvider name={provider.name} category={provider.category}  />
                                        </ModalSeeDetails>
                                    }
                                </li>
                            ))}
                        </ul>
                    </section>
                </main>
            </div>
        );
    } else {
        return (
            <section className="app-section flex items-center justify-center h-[90vh] bg-transparent">
                <span className="loading loading-ring loading-lg"></span>
            </section>
        );
    }
}
