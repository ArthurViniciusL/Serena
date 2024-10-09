"use client";

import routes from "@/app.routes";
import useSearch from "@/hooks/useSearch";
import { SearchBar } from "@/components/SearchBar";
import { usePageName } from "@/hooks/usePageName";
import { useEffect, useState } from "react";
import { CardProfile } from "./components/CardProfile";
import { useModal } from "@/hooks/useModal";

import { Loading } from "@/components/Loading";
import { ModalPorfileDetails } from "@/components/Modals/ModalDetailsServiceProvider";
import { OptionsMenu } from "./components/OptionsMenu";

export default function Feed() {
    const { setPageName } = usePageName();
    const { search, setSearch } = useSearch();

    const [isLoad, setIsLoad] = useState(false);
    const [servicesProviders, setServicesProviders] = useState<any>([]);
    const dataFilter = servicesProviders.filter((providers: any) =>
        providers.name.toLowerCase().includes(search.toLowerCase()),
    );

    const { selectContentInfo, infoId } = useModal();
    const seletUser = servicesProviders.find((u: any) => u.id === infoId);

    
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
    },[isLoad]);

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    

    /* https://www.youtube.com/watch?v=E1cklb4aeXA&list=LL&index=7 */

    if (isLoad) {
        return (
            <>
                {/* sub menu provisorio */}
                <>
                    <SearchBar onChange={handleSearch} />
                    <OptionsMenu />
                </>

                <main
                    className=""
                    style={{
                        marginBottom: "30px",
                    }}
                >
                    <section className="flex items-center justify-center ">
                        <ul>
                            {dataFilter.map((provider: any) => (
                                <li key={provider.id}>
                                    {
                                        <ModalPorfileDetails data={seletUser}>
                                            <CardProfile
                                                name={provider.name}
                                                review={provider.review}
                                                category={provider.category}
                                                onClick={() =>
                                                    selectContentInfo(
                                                        provider.id,
                                                    )
                                                }
                                            />
                                        </ModalPorfileDetails>
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
            </>
        );
    } else {
        return <Loading type="screen" />;
    }
}
