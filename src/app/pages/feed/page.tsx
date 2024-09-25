"use client";

import routes from "@/app.routes";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { usePageName } from "@/hooks/usePageName";
import useSearch from "@/hooks/useSearch";
import { SerenaIconListFilter } from "@/modules/app.modules";
import { useEffect } from "react";

export default function Feed() {
    const { setPageName, memoValue } = usePageName();
    const { search, setSearch } = useSearch();

    useEffect(() => {
        const fetchData = async () => {
            setPageName(routes.Feed);
        };

        fetchData();
    }, [memoValue, search]);

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

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
                <p>{search}</p>
            </main>
        </div>
    );
}
