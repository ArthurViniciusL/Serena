"use client";
import AppRoutes from "@/app/app.routes";
import { Button } from "@/app/components/Button";
import { Header } from "@/app/components/Header";
import { Input } from "@/app/components/Input";
import { SearchBar } from "@/app/components/SearchBar";
import { usePageName } from "@/app/hooks/usePageName";
import useSearch from "@/app/hooks/useSearch";
import {
    AppIcon_CircleClose,
    AppIcon_ListFilter,
} from "@/app/modules/app.modules";
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
