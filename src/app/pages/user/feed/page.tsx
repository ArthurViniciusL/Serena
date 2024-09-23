"use client";

import AppRoutes from "@/app.routes";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { usePageName } from "@/hooks/usePageName";
import useSearch from "@/hooks/useSearch";
import {
    AppIcon_ListFilter,
} from "@/modules/app.modules";
import { useEffect, useState } from "react";

export default function Feed() {
    const { activeButton, memoValue } = usePageName();
    const { search, setSearch } = useSearch();

    useEffect(() => {
        const fetchData = async () => {
            activeButton(AppRoutes.Feed);
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
                    <AppIcon_ListFilter />
                    Filtrar categoria
                </Button>
            </Header>
            <main className="app-main">
                <p>{search}</p>
                {}
            </main>
        </div>
    );
}
